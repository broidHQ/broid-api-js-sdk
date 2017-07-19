"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Integration {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    create(integration) {
        this.logger.debug('Create the integration', integration);
        return this.http.makeRequest('POST', 'integrations', integration);
    }
    delete(id) {
        this.logger.debug(`Delete the integration ${id}`);
        return this.http.makeRequest('DELETE', `integrations/${id}`, null);
    }
    disable(id) {
        this.logger.debug(`Disable the integration ${id}`);
        return this.http.makeRequest('DELETE', `integrations/${id}/disable`, null);
    }
    update(id, integration) {
        this.logger.debug(`Update the integration ${id}`, integration);
        return this.http.makeRequest('PUT', `integrations/${id}`, integration);
    }
}
exports.Integration = Integration;
