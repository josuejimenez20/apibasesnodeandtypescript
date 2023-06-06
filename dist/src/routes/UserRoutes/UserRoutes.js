"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../../controllers/UserController/UserController");
const router = (0, express_1.Router)();
router.get('/all', UserController_1.getAllUsers);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map