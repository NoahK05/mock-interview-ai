/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_hLZ8gfWAG5ys@ep-crimson-tree-a1248tgk-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=requires',
    }
};