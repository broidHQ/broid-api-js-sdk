"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request-promise");
class BroidAPISDK {
    constructor(hostUrl, apiVersion = 'v1') {
        this.hostUrl = hostUrl;
        this.apiVersion = apiVersion;
    }
    _makeRequest(method, url, body) {
        const params = {
            json: body || true,
            method,
            url: `${this.hostUrl}/${this.apiVersion}/${url}`,
        };
        return request(params);
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
    deleteAPIKey(id) {
        return this._makeRequest('DELETE', `apikeys/${id}`, null);
    }
    disableAPIKey(id) {
        return this._makeRequest('DELETE', `apikeys/${id}/disable`, null);
    }
    createTeam(name) {
        const body = { name };
        return this._makeRequest('POST', 'teams', body);
    }
    getTeam(id) {
        return this._makeRequest('POST', `teams/${id}`, null);
    }
    updateTeam(id, name) {
        const body = { name };
        return this._makeRequest('PUT', `teams/${id}`, body);
    }
    createUser(userObject) {
        return this._makeRequest('POST', 'users', userObject);
    }
    deleteUser(id) {
        return this._makeRequest('DELETE', `users/${id}`, null);
    }
    getUser(id) {
        return this._makeRequest('POST', `users/${id}`, null);
    }
    getUserApplications(id) {
        return this._makeRequest('GET', `users/${id}/applications`, null);
    }
    getUserAPIKeys(id) {
        return this._makeRequest('GET', `users/${id}/apikeys`, null);
    }
    updateUser(userObject) {
        return this._makeRequest('PUT', `users/${userObject.id}`, userObject);
    }
}
exports.default = BroidAPISDK;
