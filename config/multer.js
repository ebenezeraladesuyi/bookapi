"use strict";
exports.__esModule = true;
var multer_1 = require("multer");
var storages = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var coverUpload = (0, multer_1["default"])({
    storage: storages
}).single("coverImage");
exports["default"] = coverUpload;
