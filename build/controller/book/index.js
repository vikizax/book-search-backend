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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooksDetailsByBookId = exports.getAllBooks = void 0;
const axios_1 = __importDefault(require("axios"));
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { data } = yield axios_1.default.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.keyword ? `"${req.query.keyword}"` : `""`}&startIndex=${(_a = req.query.startIndex) !== null && _a !== void 0 ? _a : 0}&maxResults=${(_b = req.query.maxResults) !== null && _b !== void 0 ? _b : 10}`);
        return res.status(200).send({ data: data.items, total: data.totalItems });
    }
    catch (err) {
        return res.status(500).send({ message: 'Something went wrong. Please try again.' });
    }
});
exports.getAllBooks = getAllBooks;
const getBooksDetailsByBookId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(`https://www.googleapis.com/books/v1/volumes/${req.params.id}`);
        return res.status(200).send({ data: data, total: data.totalItems });
    }
    catch (err) {
        return res.status(500).send({ message: 'Something went wrong. Please try again.' });
    }
});
exports.getBooksDetailsByBookId = getBooksDetailsByBookId;
