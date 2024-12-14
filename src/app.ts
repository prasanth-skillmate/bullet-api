import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "dotenv/config";
import compression from "compression";
import cors, { CorsOptions } from "cors";
import mentorRouter from "./routes/mentor/mentor.routes";
import connectToDatabase from "./lib/db.connect";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const corsOptions: CorsOptions = {
  origin: function (origin: string | undefined, callback: any) {
    const whitelist = ["https://bullet.skillmate.ai", "http://localhost:3001"];
    if (whitelist.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  maxAge: 84600,
};

app.use(bodyParser.json());
app.use(cookieParser());
app.use(urlencodedParser);
app.use(compression());
app.use(morgan("dev"));
app.use(helmet());
// CORS
app.use(cors(corsOptions));

// app.use(express.json());
const MONGODB_URI = process.env.MONGODB_URI!;

// mongoose.Promise = Promise;

// mongoose.connect(MONGODB_URI);

// mongoose.connection.on("error", (error: Error) => console.log(error));
// mongoose.connection.on("success", (res) => console.log(res));
connectToDatabase(MONGODB_URI);

app.get("/api/v1", (req, res) => {
  res.json({
    message: "Auth Routes API - 👋🌎🌍🌏",
  });
});
app.use("/api/v1/mentors", mentorRouter);

export default app;
