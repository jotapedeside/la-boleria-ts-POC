import * as express from "express";
import router from "./routers/routes";

const server = express();
server.use(router);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});