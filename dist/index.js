"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colorts/lib/string");
const util_1 = require("./lib/util");
const _1_add_block_1 = __importDefault(require("./basic/1-add-block"));
const _2_add_linked_block_1 = __importDefault(require("./basic/2-add-linked-block"));
const _3_add_styled_block_1 = __importDefault(require("./basic/3-add-styled-block"));
const _1_create_a_database_1 = __importDefault(require("./intermediate/1-create-a-database"));
const _2_add_page_to_database_1 = __importDefault(require("./intermediate/2-add-page-to-database"));
const isDebug = false;
let response;
/**
 * @metod main
 * @retruns {Promise}
 */
async function main() {
    response = await (0, _1_add_block_1.default)();
    console.log("<-- Appending block children endpoint: OK -->".green);
    if (isDebug && response)
        (0, util_1.inspector)("addBlock.response", response);
    response = await (0, _2_add_linked_block_1.default)();
    console.log("<-- Include a url to make the paragraph a link in Notion: OK -->".green);
    if (isDebug && response)
        (0, util_1.inspector)("addBlock.response", response);
    response = await (0, _3_add_styled_block_1.default)();
    console.log("<-- Include a url to make the styled paragraph a link in Notion: OK -->".green);
    if (isDebug && response)
        (0, util_1.inspector)("addBlock.response", response);
    response = await (0, _1_create_a_database_1.default)();
    console.log("<-- Create dataBase in Notion: OK -->".green);
    if (isDebug && response)
        (0, util_1.inspector)("createDatabase.response", response);
    response = await (0, _2_add_page_to_database_1.default)();
    console.log("<-- Create dataBase and add page to dataBase in Notion: OK -->".green);
    if (isDebug && response)
        (0, util_1.inspector)("createDatabase2.response", response);
}
main(); // Call the main async function
