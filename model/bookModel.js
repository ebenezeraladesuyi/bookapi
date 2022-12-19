"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1["default"].Schema({
    author: String,
    title: String,
    summary: String,
    ISBN: String,
    authorImage: String,
    coverImage: String,
    views: []
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("myBook", bookSchema);
