"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@notionhq/client");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const apiKey = process.env.NOTION_TOKEN + "";
const pageId = process.env.NOTION_PAGE_ID + "";
// Initialize a client using an integration token or an OAuth access token.
const notion = new client_1.Client({ auth: apiKey });
/*
---------------------------------------------------------------------------
*/
/**
 * Resources:
 * - Appending block children endpoint (notion.blocks.children.append(): https://developers.notion.com/reference/patch-block-children)
 * - Working with page content guide: https://developers.notion.com/docs/working-with-page-content
 */
/**
 * Appending block children endpoint
 * @resouce https://developers.notion.com/reference/patch-block-children
 * @name addBlock
 * @retruns {Promise}
 */
async function addBlock() {
    const blockId = pageId; // Blocks can be appended to other blocks *or* pages. Therefore, a page ID can be used for the block_id parameter
    const newHeadingResponse = await notion.blocks.children.append({
        block_id: blockId,
        // Pass an array of blocks to append to the page: https://developers.notion.com/reference/block#block-type-objects
        children: [
            {
                heading_2: {
                    rich_text: [
                        {
                            text: {
                                content: "Types of kale", // This is the text that will be displayed in Notion
                            },
                        },
                    ],
                },
            },
        ],
    });
    return newHeadingResponse;
}
exports.default = addBlock;
