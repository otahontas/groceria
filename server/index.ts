import express from "express";
import { postgraphile } from "postgraphile";
var cors = require("cors");
require("dotenv").config({ path: "../.env" });

const app = express();

app.use(express.json());

const groceriaDbUrl = process.env.DATABASE_URL;
if (!groceriaDbUrl) {
  console.log("Environmental variable DATABASE_URL can't be empty! Exiting");
  process.exit(1);
}

const port = process.env.PORT;
if (!port) {
  console.log("Environmental variable PORT can't be empty! Exiting");
  process.exit(1);
}

app.use(
  postgraphile(groceriaDbUrl, "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }),
  cors()
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
