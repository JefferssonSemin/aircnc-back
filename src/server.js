const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ sucesso: 'texte' });
});

app.listen(3333);
