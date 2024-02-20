"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colorts/lib/string");
const util_1 = require("./lib/util");
const addBlock_1 = __importDefault(require("./basic/addBlock"));
const addLinkedBlock_1 = __importDefault(require("./basic/addLinkedBlock"));
const addStyledBlock_1 = __importDefault(require("./basic/addStyledBlock"));
const isDebug = false;
let response;
/**
 * @metod main
 * @retruns {Promise}
 */
async function main() {
    response = await (0, addBlock_1.default)();
    console.log("Appending block children endpoint: OK".green.bold);
    if (isDebug && response)
        (0, util_1.inspector)("addBlock.response", response);
    response = await (0, addLinkedBlock_1.default)();
    console.log("Include a url to make the paragraph a link in Notion: OK".green.bold);
    if (isDebug && response)
        (0, util_1.inspector)("addBlock.response", response);
    response = await (0, addStyledBlock_1.default)();
    console.log("Include a url to make the styled paragraph a link in Notion: OK".green.bold);
    if (isDebug && response)
        (0, util_1.inspector)("addBlock.response", response);
}
main(); // Call the main async function
