"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    create(channel) {
        this.logger.debug('Create the channel', channel);
        return this.http.makeRequest('POST', 'channels', channel);
    }
    delete(id) {
        this.logger.debug(`Delete the channel ${id}`);
        return this.http.makeRequest('DELETE', `channels/${id}`, null);
    }
    disable(id) {
        this.logger.debug(`Disable the channel ${id}`);
        return this.http.makeRequest('DELETE', `channels/${id}/disable`, null);
    }
    update(id, channel) {
        this.logger.debug(`Update the channel ${id}`, channel);
        return this.http.makeRequest('PUT', `channels/${id}`, channel);
    }
}
exports.Channel = Channel;
