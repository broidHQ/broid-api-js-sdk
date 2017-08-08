"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@broid/utils");
const Http_1 = require("./helpers/Http");
const endpoints_1 = require("./endpoints");
class BroidAPISDK {
    constructor(credentials, hostUrl = 'https://api.broid.ai', apiVersion = '1', logLevel = 'info') {
        this.credentials = credentials;
        this.hostUrl = hostUrl;
        this.apiVersion = apiVersion;
        this.logLevel = logLevel;
        this.credentials = credentials;
        this.apiVersion = apiVersion;
        this.hostUrl = hostUrl;
        this.logLevel = logLevel;
        this.logger = new utils_1.Logger('broid-sdk', this.logLevel);
        this.http = new Http_1.Http(this.credentials, this.hostUrl, this.apiVersion, this.logger);
        this.rtm = new endpoints_1.Realtime(this.http, this.logger);
        this.users = new endpoints_1.User(this.http, this.logger);
        this.applications = new endpoints_1.Application(this.http, this.logger);
        this.integrations = new endpoints_1.Integration(this.http, this.logger);
    }
    realtime() {
        return this.rtm.connect()
            .then(() => this.rtm);
    }
    sendMessage(message) {
        return this.rtm.sendMessage({ message: message });
    }
}
exports.BroidAPISDK = BroidAPISDK;
