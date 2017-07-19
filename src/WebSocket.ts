import { Logger } from '@broid/utils';
import * as jsonBigint from 'json-bigint';
import * as ws from 'ws';
import { Subject, Observer, Observable } from 'rxjs';

const JSONstrict = jsonBigint({'strict': true});

export class WebSocket<T> extends Subject<T> {
  private socket: ws;
  private connectionObserver: Observer<boolean>;
  private reconnectionObservable: Observable<number> | null;
  public connectionStatus: Observable<boolean>;

  constructor(
    private url: string,
    private logger: Logger,
    private reconnectInterval: number = 5000,
    private reconnectAttempts: number = 10
  ) {
    super();

    // connection status
    this.connectionStatus = new Observable<boolean>((observer) => {
      this.connectionObserver = observer;
    }).share().distinctUntilChanged();

    // we connect
    this.connect();

    // we follow the connection status and run the reconnect while losing the connection
    this.connectionStatus.subscribe((isConnected) => {
      if (!this.reconnectionObservable && typeof(isConnected) == "boolean" && !isConnected) {
        this.reconnect();
      }
    });
  }

  private connect(): void {
    this.socket = new ws(this.url);
    this.socket.on('close', (e: any) => {
      this.logger.warn('Close event is received', e);
      switch (e) {
    		case 1000:	// CLOSE_NORMAL
          this.complete();
    			break;
    		default:	// Abnormal closure
    			this.reconnect();
    			break;
  		}
    });

    this.socket.on('error', (e: any) => {
      this.logger.warn('Error event is received', e);
      if (!this.socket) {
        // in case of an error with a loss of connection, we restore it
        this.reconnect();
      }
    });

    this.socket.on('open', () => {
      this.logger.debug('Socket is open.');
      this.connectionObserver.next(true);
    });

    this.socket.on('message', (event) => {
      this.logger.debug('Event is received', event);

      if (event) {
        let message = JSONstrict.parse(event);
        return this.next(message);
      };
    });
  }

  private reconnect(): void {
    this.reconnectionObservable = Observable.interval(this.reconnectInterval)
      .takeWhile((_, index) => {
        return index < this.reconnectAttempts && !this.socket
      });

    this.reconnectionObservable.subscribe(
      () => this.connect(),
      () => {
        // NOOP
      },
      () => {
        // if the reconnection attempts are failed, then we call complete of our Subject and status
        this.logger.debug!('Reconnection attempts are failed');
        this.reconnectionObservable = null;
        if (!this.socket) {
          this.logger.debug!('Completing the subject.');
          this.complete();
          this.connectionObserver.complete();
        }
      });
  }

}
