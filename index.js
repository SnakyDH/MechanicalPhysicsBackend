import express from "express";
import { SerialPort } from "serialport";
import cors from "cors";
const app = express();
const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const data = [];

port.on("data", (distance) => {
  let dataInt;
  dataInt = parseInt(distance.toString());
  dataInt !== 0 ? data.push(dataInt) : null;
  console.log(parseInt(distance.toString()));
});

app.use(cors());
app.get("/", (req, res) => {
  setTimeout(() => {
    data.length < 100
      ? res.json({ data })
      : res.json(data.slice(data.length - 100));
  }, 1000);
});

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
