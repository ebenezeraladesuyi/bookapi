"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.myViews = exports.searchBooks = exports.getOneBook = exports.getAllBooks = exports.bookPost = void 0;
var bookModel_1 = require("../model/bookModel");
var cloudinary_1 = require("../config/cloudinary");
var bookPost = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var cloudImg, _a, author, title, category, summary, views, isbn1, isbn2, isbn3, isbn4, newBook, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, cloudinary_1["default"].uploader.upload(request === null || request === void 0 ? void 0 : request.file.path)];
            case 1:
                cloudImg = _b.sent();
                _a = request.body, author = _a.author, title = _a.title, category = _a.category, summary = _a.summary, views = _a.views;
                isbn1 = Math.floor(Math.random() * 10000);
                isbn2 = Math.floor(Math.random() * 10000);
                isbn3 = Math.floor(Math.random() * 10000);
                isbn4 = Math.floor(Math.random() * 10000);
                return [4 /*yield*/, bookModel_1["default"].create({
                        author: author,
                        title: title,
                        category: category,
                        summary: summary,
                        views: views,
                        ISBN: "".concat(isbn1, "-").concat(isbn2, "-").concat(isbn3, "-").concat(isbn4),
                        coverImage: cloudImg.secure_url,
                        authorImage: author.charAt(0).toUpperCase()
                    })];
            case 2:
                newBook = _b.sent();
                return [2 /*return*/, response.status(201).json({
                        message: "Data Uploaded Sucessfully",
                        data: newBook
                    })];
            case 3:
                error_1 = _b.sent();
                return [2 /*return*/, response.status(400).json({
                        message: "An Error Occoured",
                        data: error_1
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.bookPost = bookPost;
var getAllBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var book, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1["default"].find()];
            case 1:
                book = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "all books found",
                        data: book
                    })];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, res.status(400).json({
                        message: "book not found"
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllBooks = getAllBooks;
var getOneBook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getOne, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1["default"].findById(req.params.id)];
            case 1:
                getOne = _a.sent();
                return [2 /*return*/, res.status(201).json({
                        message: "Succesfully gotten data",
                        data: getOne
                    })];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(400).json({
                        message: "An error occured",
                        data: error_3
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOneBook = getOneBook;
var searchBooks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var queryData, makeSearch, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                queryData = req.query;
                return [4 /*yield*/, bookModel_1["default"].find(queryData)];
            case 1:
                makeSearch = _a.sent();
                return [2 /*return*/, res.status(200).json({ message: "Data Found", data: makeSearch })];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, res.status(400).json({
                        message: "An error occured",
                        data: error_4
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchBooks = searchBooks;
var myViews = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newView, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bookModel_1["default"].findByIdAndUpdate(req.params.id, {
                        $push: { views: req.body.ip }
                    }, { "new": true })];
            case 1:
                newView = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        data: newView
                    })];
            case 2:
                error_5 = _a.sent();
                return [2 /*return*/, res.status(400).json({
                        message: "An error occured",
                        data: error_5
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.myViews = myViews;
