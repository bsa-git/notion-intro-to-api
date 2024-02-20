/**
 * Resources:
 * - Create a database endpoint (notion.databases.create(): https://developers.notion.com/reference/create-a-database)
 * - Working with databases guide: https://developers.notion.com/docs/working-with-databases
 */
declare function newDatabase(): Promise<import("@notionhq/client/build/src/api-endpoints").CreateDatabaseResponse>;
export default newDatabase;
