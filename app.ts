import express, { Express } from "express";
import dotenv from "dotenv";
import "colors";
import cors from "cors";
import connectDB from "./config/db";
dotenv.config();

import discographyRouter from "./router/discography/discographyRouter";
import discographyCoverRouter from "./router/discography/discographyCoverRouter";

import socialMediaRouter from "./router/socialMedia/socialMediaRouter";
import socialMediaImgRouter from "./router/socialMedia/socialMediaImgRouter";

import infomationRouter from "./router/infomaton/infomationRouter";

connectDB();

const port: number = (process.env.PORT as unknown as number) || 5000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.use("/api/discography", discographyRouter);
app.use("/api/discographyCover", discographyCoverRouter);

app.use("/api/socialMedia", socialMediaRouter);
app.use("/api/socialMediaImg", socialMediaImgRouter);

app.use("api/infomation", infomationRouter);

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}`.cyan.underline
  );
});
