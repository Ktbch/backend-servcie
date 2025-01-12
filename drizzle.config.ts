import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "postgresql",
    schema: './src/schemas/index.ts',
    out: './drizzle',
    dbCredentials: {
        url: 'postgresql://investment_bftn_user:eL2JbfqmS2SxxG5VuJeREgf4uxVU8LR9@dpg-cu24mj1opnds73ak9n00-a/investment_bftn'
    }

})
