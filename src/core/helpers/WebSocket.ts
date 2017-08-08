import { Logger } from '@broid/utils';
import * as ws from 'ws';
import { Subject } from 'rxjs';

export class WebSocket<T> extends Subject<T> {
  private socket: ws;

  constructor(private logger: Logger) {
    super();
  }

  private onclose(e: any): void {
    this.logger.warning('Close event is received', e);
    switch (e) {
      case 1000:	// CLOSE_NORMAL
        this.complete();
        break;
      default:	// Abnormal closure
        this.error({ reconnect: true });
        break;
    }
  }

  private onerror(e: any): void {
    this.logger.warning('Error event is received', e);
    switch (e.code) {
  		case 'ECONNREFUSED':
  			this.error({ reconnect: true });
  			break;
  		default:
  			this.error(e);
  			break;
		}
  }

  private onmessage(event: any): void {
    this.logger.debug('Event is received', event);
    this.next(event);
  }

  private onopen(): void {
    this.logger.debug('Socket is open.');
  }

  public connect(url: string): void {
    this.socket = new ws(url);
    this.socket.on('close', this.onclose.bind(this));
    this.socket.on('error', this.onerror.bind(this));
    this.socket.on('message', this.onmessage.bind(this));
    this.socket.on('open', this.onopen.bind(this));
  }
}
