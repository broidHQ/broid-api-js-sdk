"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    create(application) {
        this.logger.debug('Create an application.', application);
        return this.http.makeRequest('POST', `applications`, application);
    }
    delete(id) {
        this.logger.debug(`Delete the application ${id}`);
        return this.http.makeRequest('DELETE', `applications/${id}`, null);
    }
    disable(id) {
        this.logger.debug(`Disable the application ${id}`);
        return this.http.makeRequest('DELETE', `applications/${id}/disable`, null);
    }
    info(id) {
        this.logger.debug(`Get application ${id}`);
        return this.http.makeRequest('GET', `applications/${id}`, null);
    }
    integrations(id) {
        this.logger.debug(`Get integrations for application ${id}`);
        return this.http.makeRequest('GET', `applications/${id}/integrations`, null);
    }
    update(id, application) {
        this.logger.debug(`Update the application ${id}`, application);
        return this.http.makeRequest('PUT', `applications/${id}`, application);
    }
    setWebHook(id, webhook) {
        this.logger.debug(`Set the WebHook for application ${id}`, webhook);
        return this.http.makeRequest('PUT', `applications/${id}`, webhook);
    }
}
exports.Application = Application;
