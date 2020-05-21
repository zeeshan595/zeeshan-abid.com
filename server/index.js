"use strict";
const express = require('express');

const CONTENT_PATH = `${__dirname}/../dist`;

const app = express();
app.use(express.static(CONTENT_PATH));

const setupHeaders = (res) => {
  //access control
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  //content security
  res.header('content-security-policy', "default-src 'self'; script-src 'self' 'unsafe-eval' style-src 'self' 'unsafe-inline'; font-src 'self' fast.fonts.net fonts.gstatic.com; img-src 'self' data:; connect-src 'self'");
}

app.get('*', (req,res) => {
  setupHeaders();
  //serve content
  res.render(`${CONTENT_PATH}/index.html`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
module.exports = app;