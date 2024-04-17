import app from "./server";
import { port } from "../config";
import * as dotenv from "dotenv";

dotenv.config();

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
