import dotenv from 'dotenv';
dotenv.config();
import { initializeDB } from "./db";

import express from "express";
import cors from "cors";
import {default as routes} from "./routes/index";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes)
app.listen(PORT, () => {
  initializeDB().then(
    () => {
      console.log("database successfully initialized");
    },
    (error) => {
      console.error(error);
    }
  );
  console.log(`Server listening on port ${PORT}`);
});
