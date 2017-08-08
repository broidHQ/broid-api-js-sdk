import { Logger } from '@broid/utils';
import { Subject } from 'rxjs';
export declare class WebSocket<T> extends Subject<T> {
    private logger;
    private socket;
    constructor(logger: Logger);
    private onclose(e);
    private onerror(e);
    private onmessage(event);
    private onopen();
    connect(url: string): void;
}
