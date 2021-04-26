import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//cors for client
app.use(
  cors({
    origin: ["http://localhost:4000"],
    optionsSuccessStatus: 200,
  })
);

//moongoose
mongoose.connect("mongodb://localhost:27017/oursite", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .once("open", () => {
    console.log("connected to mongo instance");
  })
  .on("error", (error) => {
    throw new Error("error connecting to mongodb: " + error);
  });

//body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));

//error middlewaer
app.use((req, res, next) => {
  console.log("error");
  if ((req as any).error) {
    res.json({ err: ((req as any).error as Error).message });
  }
});

//start server
app.listen(4080, () => {
  console.log("server started on port 4080");
});
