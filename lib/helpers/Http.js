"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonBigint = require("json-bigint");
const jwt = require("jsonwebtoken");
const request = require("request-promise");
const EXP_TTL = (60 * 60);
const JSONstrict = jsonBigint({ 'strict': true });
class Http {
    constructor(credentials, hostUrl = 'https://api-dev.broid.ai', apiVersion = '1', logger) {
        this.credentials = credentials;
        this.hostUrl = hostUrl;
        this.apiVersion = apiVersion;
        this.logger = logger;
    }
    _autoParse(body, response) {
        if (/application\/json/.test(response.headers['content-type'])) {
            return JSONstrict.parse(body);
        }
        else {
            return body;
        }
    }
    _generateHeaders() {
        const exp = Math.floor(Date.now() / 1000) + EXP_TTL;
        const token = jwt.sign({ iss: this.credentials.secretID, exp }, this.credentials.secret, { algorithm: 'HS256' });
        return {
            'Authorization': `Bearer ${token}`,
            'api-version': this.apiVersion,
        };
    }
    makeRequest(method, url, body_) {
        let headers = this._generateHeaders();
        let body = null;
        if (body_) {
            body = JSONstrict.stringify(body_);
            headers['Content-Type'] = 'application/json';
        }
        const params = {
            headers,
            json: false,
            body,
            method,
            resolveWithFullResponse: false,
            transform: this._autoParse,
            url: `${this.hostUrl}/${this.apiVersion}/${url}`,
        };
        this.logger.debug(params);
        return request(params);
    }
}
exports.Http = Http;
