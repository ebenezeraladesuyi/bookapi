"use strict";
exports.__esModule = true;
var express_1 = require("express");
var port = process.env.port || 6000;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var cors_1 = require("cors");
require("../config/db");
var bookstoreRouter_1 = require("../router/bookstoreRouter");
app.use((0, cors_1["default"])());
app.get("/", function (req, res) {
    res.status(200).json({
        message: "server running"
    });
});
app.use("/api", bookstoreRouter_1["default"]);
app.listen(port, function () {
    console.log("server up on: ".concat(port));
});
