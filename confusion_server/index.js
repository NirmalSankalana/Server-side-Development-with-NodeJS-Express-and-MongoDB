const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter");
const promotionRouter = require("./routes/promotionRouter");
const leaderRouter = require("./routes/leaderRouter");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const hostname = "localhost";
const port = 3001;
// Connect Mongodb Database
// mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promotionRouter);
app.use("/leaders", leaderRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body>This is an Express server</body></html>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
