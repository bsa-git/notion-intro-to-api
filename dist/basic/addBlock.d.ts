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
declare function addBlock(): Promise<import("@notionhq/client/build/src/api-endpoints").AppendBlockChildrenResponse>;
export default addBlock;
