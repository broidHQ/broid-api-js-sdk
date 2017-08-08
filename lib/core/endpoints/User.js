"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(http, logger) {
        this.http = http;
        this.logger = logger;
    }
    me() {
        return this.http.makeRequest('GET', `users/me`, null);
    }
    update(id, user) {
        this.logger.debug(`Update the user ${id}`, user);
        return this.http.makeRequest('PUT', `users/${id}`, user);
    }
}
exports.User = User;
