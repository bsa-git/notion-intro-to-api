import { IdType } from "../mytypes";
import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();

const apiKey: IdType = process.env.NOTION_TOKEN + "";
const pageId: IdType = process.env.NOTION_PAGE_ID + "";

const notion = new Client({ auth: apiKey });

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

export default newDatabase;
