import "colorts/lib/string";
import { inspector } from "./lib/util";
import {
  AppendBlockChildrenResponse as blockResponse,
  DatabaseObjectResponse as databaseResponse,
  QueryDatabaseResponse as queryResponse,
} from "./mytypes";
import addBlock from "./basic/1-add-block";
import addLinkedBlock from "./basic/2-add-linked-block";
import addStyledBlock from "./basic/3-add-styled-block";
import createDatabase from "./intermediate/1-create-a-database";
import createDatabase2 from "./intermediate/2-add-page-to-database";
import queryFromNotionDatabase from "./intermediate/3-query-database";

const isDebug = false;
const isRun = false;
let response: blockResponse|databaseResponse|queryResponse|undefined;

/**
 * @metod main
 * @retruns {Promise}
 */
async function main() {
  
  if (isRun && addBlock) {
    response = await addBlock();
    console.log("<-- Appending block children endpoint: OK -->".green);
    if (isDebug && response) inspector("addBlock.response", response);
  }
  if (isRun && addLinkedBlock) {
    response = await addLinkedBlock();
    console.log(
      "<-- Include a url to make the paragraph a link in Notion: OK -->".green,
    );
    if (isDebug && response) inspector("addBlock.response", response);
  }

  if (isRun && addStyledBlock) {
    response = await addStyledBlock();
    console.log(
      "<-- Include a url to make the styled paragraph a link in Notion: OK -->"
        .green,
    );
    if (isDebug && response) inspector("addBlock.response", response);
  }

  if (isRun && createDatabase) {
    response = await createDatabase();
    console.log("<-- Create dataBase in Notion: OK -->".green);
    if (isDebug && response) inspector("createDatabase.response", response);
    // Print URL for the new database response
    if (isDebug && response) console.log(response.url)
  }

  if (isRun && createDatabase2) {
    response = await createDatabase2();
    console.log(
      "<-- Create dataBase and add page to dataBase in Notion: OK -->".green,
    );
    if (isDebug && response) inspector("createDatabase2.response", response);
  }

  if (isRun && queryFromNotionDatabase) {
    response = await queryFromNotionDatabase();
    console.log(
      "<-- Get query from Notion database entries and return pages: OK -->".green,
    );
    if (isDebug && response) inspector("queryFromNotionDatabase.response", response);
  }
}

main(); // Call the main async function
