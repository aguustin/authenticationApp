import express, { urlencoded } from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import { PORT } from "./config.js";
import { connectionDb } from "./db.js";
import passport from "passport";
import cookieSession from "cookie-session";
import userRoutes from "./routes/infoRoutes/userRoutes.js";
import socialRoutes from "./routes/infoRoutes/socialRoutes.js";
import shoppingifyRoutes from "./routes/shoppingifyRoutes/shoppingifyRoutes.js";
const app = express();

connectionDb();

//settings

//middlewares
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './usersImg',
}));
app.use(cookieSession({
    name:"session",
    keys:["authenticated"],
    maxAge: 24 * 24 * 60 * 100
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('tiny'));

//routes
app.use(userRoutes);
app.use(socialRoutes);
app.use(shoppingifyRoutes);
//listen
app.listen(PORT);

console.log("the server is connected in port:", PORT);