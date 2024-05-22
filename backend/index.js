const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

const mainRouter = require("./routes/index");
const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", accountRouter);

app.listen(port, () => console.log(`Server is listening to ${port}...`));
