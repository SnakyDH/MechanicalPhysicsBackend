import express from "express";
//import { SerialPort } from "serialport";
import cors from "cors";
const app = express();
//const port = new SerialPort({ path: "COM3", baudRate: 9600 });
const data = [];

/* port.on("data", (distance) => {
  let dataInt;
  dataInt = parseInt(distance.toString());
  dataInt !== 0 ? data.push(dataInt) : null;
  console.log(parseInt(distance.toString()));
}); */

// send a random number and push it to the data array the random number is between 1 and 21
for (let i = 0; i < 100; i++) {
  data.push(Math.floor(Math.random() * 21) + 1);
  if (i % 2 !== 0) {
    data.push(20);
  }
}
console.log(data);
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
