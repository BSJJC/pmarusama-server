import express, { Express } from "express";
import dotenv from "dotenv";
import "colors";
import cors from "cors";
import connectDB from "./config/db";

import discographyRouter from "./router/discography/discographyRouter";

dotenv.config();

connectDB();

const port: number = (process.env.PORT as unknown as number) || 5000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.use("api/discography", discographyRouter);

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}`.cyan.underline
  );
});
