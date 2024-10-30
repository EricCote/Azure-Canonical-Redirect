const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const site = process.env.CANONICAL_SITE || 'https://www.reactacademy.live';

app.get('*', (req, res) => {
  res.redirect(site + req.path);
});

app.listen(port, () => {
  console.log(`started at port ${port}`);
});
