"use strict";
// 복수 객체 내보내기
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.log = exports.debug = void 0;
function debug(msg) {
    console.debug(msg);
}
exports.debug = debug;
function log(msg) {
    console.log(msg);
}
exports.log = log;
function error(msg) {
    console.error(msg);
}
exports.error = error;
