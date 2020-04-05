const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const path = require("path");

module.exports = function() {
  app.use(cors());
  app.use(bodyParser());

  console.log(path.resolve(__dirname));

  app.post("/start-cast", (req, res) => {
    try {
      console.log("Starting cast", req.body);
      const filePath = req.body.path.replace(/\\/g, "/");
      console.log("casting video from", filePath);
      exec(`castnow ${req.body.path}`);
    } catch (e) {
      throw e;
    }
  });

  app.listen("5000", () => {
    console.log("Listening");
  });
};
