const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const path = require('path');

module.exports = function() {
  app.use(cors());
  app.use(bodyParser());

  let isCasting = false;
  let cast = {};

  function castInput(input) {
    const stdinStream = new stream.Readable();
  }

  app.post('/start-cast', (req, res) => {
    try {
      console.log('Starting cast', req.body);
      const filePath = req.body.path.replace(/\\/g, '/');
      console.log('casting video from', filePath);
      cast = spawn(`castnow ${req.body.path}`);
      isCasting = true;
    } catch (e) {
      throw e;
    }
  });

  app.post('/pause', (req, res) => {
    castInput('space');
  });

  app.listen('5000', () => {
    console.log('Listening');
  });
};
