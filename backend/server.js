import express from "express";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;




 











if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  app.use(express.static(path.join(__dirname, "/dist")));

  // react app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
