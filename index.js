const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize.js');

app.use(express.json());
app.use(express.static('public'));

app.post('/summarize', async (req, res) => {
  const text = req.body.text_to_summarize;
  const summary = await summarizeText(text);
  res.send(summary);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
