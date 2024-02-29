import express  from "express";
import { Socket } from "socket.io";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`server running on ${port}`);
});