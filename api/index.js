import express from "express";
import dotenv from "dotenv";
import db from "../db/db.js";
import router from "../routes/auth.js";
import cors from 'cors'
const port = process.env.PORT


dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

app.use("/", router)

async function startServer() {
    
    app.listen(port, () => {
        
      console.log(`Express server listening ${port}`);
    });
  }
  

  startServer();
