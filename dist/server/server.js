"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("../src/routes/indexRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.principalPath = '/api/v1';
        this.routes();
    }
    routes() {
        this.app.use(this.principalPath, indexRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening Server: ', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map