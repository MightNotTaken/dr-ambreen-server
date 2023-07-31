"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var db_1 = require("./db");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var PORT = process.env.PORT || 3001;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api", index_1.default);
app.listen(PORT, function () {
    (0, db_1.initializeDB)().then(function () {
        console.log("database successfully initialized");
    }, function (error) {
        console.error(error);
    });
    console.log("Server listening on port ".concat(PORT));
});
//# sourceMappingURL=index.js.map