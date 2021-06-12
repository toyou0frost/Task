"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 일반 라이브러리 import 방법
var lodash_1 = __importDefault(require("lodash"));
var arr = lodash_1.default.fill(Array(10), 4);
console.log(arr);
// export 방식을 이용한 module import 방법
// import {debug, error, log}  from "./logger"
var logger = __importStar(require("./logger"));
logger.debug("This is debug!");
logger.log("This is log!!");
logger.error("This is error!!!");
// export default 방식을 이용한 module import 방법
var calcurator_1 = __importDefault(require("./calcurator"));
console.log(calcurator_1.default.sum(3, 4), calcurator_1.default.sub(4, 3), calcurator_1.default.multiply(2, 2), calcurator_1.default.divide(3, 2));
