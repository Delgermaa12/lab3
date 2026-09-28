const express = require('express');
const app = express();
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Хурдан endpoint sagsand nemeh
app.post('/cart/add', (req, res) => res.json({ ok: true, items: 1 }));

// Удаан endpoint tailan 200-400 sanamsargu
app.get('/report', async (req, res) => {
  await sleep(200 + Math.random() * 200);
  res.json({ rows: 20000 });
});

// Найдваргүй endpoint tulbur huseltiin hemjee 5% chance 500 error
app.post('/pay', (req, res) => {
  if (Math.random() < 0.05) return res.status(500).json({ error: 'gateway timeout' });
  res.json({ paid: true });
});

app.listen(3000, () => console.log('API: http://localhost:3000'));