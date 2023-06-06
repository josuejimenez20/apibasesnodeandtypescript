"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("../routes/UserRoutes/UserRoutes"));
const app = (0, express_1.default)();
app.use('/users', UserRoutes_1.default);
exports.default = app;
//# sourceMappingURL=indexRoutes.js.map