import { IdType } from "../mytypes";
import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();

const apiKey: IdType = process.env.NOTION_TOKEN + "";
const pageId: IdType = process.env.NOTION_PAGE_ID + "";

// Initialize a client using an integration token or an OAuth access token.
const notion = new Client({ auth: apiKey });

/* 
---------------------------------------------------------------------------
*/

/**
 * Resources:
 * - Appending block children endpoint (notion.blocks.children.append(): https://developers.notion.com/reference/patch-block-children)
 * - Working with page content guide: https://developers.notion.com/docs/working-with-page-content
 */

async function addLinkedBlock() {
  const blockId: IdType = pageId; // Blocks can be appended to other blocks *or* pages. Therefore, a page ID can be used for the block_id parameter
  const linkedTextResponse = await notion.blocks.children.append({
    block_id: blockId,
    // Pass an array of blocks to append to the page: https://developers.notion.com/reference/block#block-type-objects
    children: [
      {
        heading_3: {
          rich_text: [
            {
              text: {
                content: "Tuscan  kale", // This is the text that will be displayed in Notion
              },
            },
          ],
        },
      },
      {
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "Tuscan  kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                link: {
                  // Include a url to make the paragraph a link in Notion
                  url: "https://en.wikipedia.org/wiki/Kale",
                },
              },
            },
          ],
        },
      },
    ],
  });

  return linkedTextResponse;
}

export default addLinkedBlock;
