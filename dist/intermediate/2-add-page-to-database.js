"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../lib/util");
const client_1 = require("@notionhq/client");
const dotenv_1 = require("dotenv");
const sampleData_1 = require("./sampleData");
(0, dotenv_1.config)();
const apiKey = process.env.NOTION_TOKEN + "";
const pageId = process.env.NOTION_PAGE_ID + "";
const isDebug = false;
const notion = new client_1.Client({ auth: apiKey });
/*
---------------------------------------------------------------------------
*/
/**
 * Resources:
 * - Create a database endpoint (notion.databases.create(): https://developers.notion.com/reference/create-a-database)
 * - Create a page endpoint (notion.pages.create(): https://developers.notion.com/reference/post-page)
 * - Working with databases guide: https://developers.notion.com/docs/working-with-databases
 */
async function addNotionPageToDatabase(databaseId, pageProperties) {
    const newPage = await notion.pages.create({
        parent: {
            database_id: databaseId,
        },
        properties: pageProperties,
    });
    if (isDebug && newPage)
        (0, util_1.inspector)("addNotionPageToDatabase.newPage", newPage);
}
async function addPageToDatabase() {
    // Create a new database
    const newDatabase = await notion.databases.create({
        parent: {
            type: "page_id",
            page_id: pageId,
        },
        title: [
            {
                type: "text",
                text: {
                    content: "Grocery list",
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
    // Print the new database's URL. Visit the URL in your browser to see the pages that get created in the next step.
    if (isDebug && newDatabase)
        (0, util_1.inspector)("addPageToDatabase.newDatabase:", newDatabase);
    // const urlNewDatabase = newDatabase.url? newDatabase.url : "";
    // console.log(newDatabase.url);
    const databaseId = newDatabase.id;
    // If there is no ID (if there's an error), return.
    if (!databaseId)
        return;
    console.log("Adding new pages...");
    for (let i = 0; i < sampleData_1.propertiesForNewPages.length; i++) {
        // Add a few new pages to the database that was just created
        await addNotionPageToDatabase(databaseId, sampleData_1.propertiesForNewPages[i]);
    }
    return newDatabase;
}
exports.default = addPageToDatabase;
