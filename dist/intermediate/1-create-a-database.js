"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@notionhq/client");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const apiKey = process.env.NOTION_TOKEN + "";
const pageId = process.env.NOTION_PAGE_ID + "";
const notion = new client_1.Client({ auth: apiKey });
/*
---------------------------------------------------------------------------
*/
/**
 * Resources:
 * - Create a database endpoint (notion.databases.create(): https://developers.notion.com/reference/create-a-database)
 * - Working with databases guide: https://developers.notion.com/docs/working-with-databases
 */
async function newDatabase() {
    // Create a new database
    const newDatabaseResponse = await notion.databases.create({
        parent: {
            type: "page_id",
            page_id: pageId,
        },
        title: [
            {
                type: "text",
                text: {
                    content: "New database name",
                },
            },
        ],
        properties: {
            // These properties represent columns in the database (i.e. its schema)
            "Grocery item": {
                type: "title",
                title: {},
            },
            Price: {
                type: "number",
                number: {
                    format: "dollar",
                },
            },
            "Last ordered": {
                type: "date",
                date: {},
            },
        },
    });
    // Print the new database response
    return newDatabaseResponse;
}
exports.default = newDatabase;
