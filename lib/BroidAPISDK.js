"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@broid/utils");
const jwt = require("jsonwebtoken");
const request = require("request-promise");
const WebSocket_1 = require("./WebSocket");
const EXP_TTL = (60 * 60);
class BroidAPISDK {
    constructor(credentials, hostUrl = 'https://api-dev.broid.ai', apiVersion = '1', logLevel = 'info') {
        this.credentials = credentials;
        this.apiVersion = apiVersion;
        this.hostUrl = hostUrl;
        this.logLevel = logLevel;
        this.logger = new utils_1.Logger('broid-sdk', this.logLevel);
    }
    _makeRequest(method, url, body) {
        const params = {
            json: body || true,
            method,
            url: `${this.hostUrl}/${this.apiVersion}/${url}`,
            headers: this._generateHeaders(),
        };
        this.logger.debug(params);
        return request(params);
    }
    _generateHeaders() {
        const exp = Math.floor(Date.now() / 1000) + EXP_TTL;
        const token = jwt.sign({ iss: this.credentials.appID, exp }, this.credentials.secret, { algorithm: 'HS256' });
        return {
            'Authorization': `Bearer ${token}`,
            'api-version': this.apiVersion,
        };
    }
    realtime() {
        return this.getUserRealtimeURL()
            .then((response) => new WebSocket_1.WebSocket(response.url, this.logger));
    }
    deleteApplication(id) {
        return this._makeRequest('DELETE', `applications/${id}`, null);
    }
    disableApplication(id) {
        return this._makeRequest('DELETE', `applications/${id}/disable`, null);
    }
    getApplicationIntegrations(id) {
        return this._makeRequest('GET', `applications/${id}/integrations`, null);
    }
    getUserApplications(id) {
        return this._makeRequest('GET', `users/${id}/applications`, null);
    }
    getUserRealtimeURL() {
        return this._makeRequest('GET', `realtime`, null);
    }
    updateUser(userObject) {
        return this._makeRequest('PUT', `users/${userObject.id}`, userObject);
    }
    sendMessage(message) {
        return this._makeRequest('POST', `message`, { message: message });
    }
}
exports.BroidAPISDK = BroidAPISDK;
