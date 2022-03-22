const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
