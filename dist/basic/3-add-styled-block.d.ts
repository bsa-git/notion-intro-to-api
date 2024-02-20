/**
 * Resources:
 * - Appending block children endpoint (notion.blocks.children.append(): https://developers.notion.com/reference/patch-block-children)
 * - Rich text options: https://developers.notion.com/reference/rich-text
 * - Working with page content guide: https://developers.notion.com/docs/working-with-page-content
 */
declare function addStyledBlock(): Promise<import("@notionhq/client/build/src/api-endpoints").AppendBlockChildrenResponse>;
export default addStyledBlock;
