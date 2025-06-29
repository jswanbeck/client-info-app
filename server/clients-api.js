const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

const clientsFilePath = path.join(__dirname, '..', 'src', 'assets', 'clients.json');

app.get('/api/clients', (req, res) => {
  fs.readFile(clientsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Could not read clients data.' });
      return;
    }
    try {
      const clients = JSON.parse(data);
      res.json(clients);
    } catch (parseErr) {
      res.status(500).json({ error: 'Invalid clients data format.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Clients API server running on http://localhost:${PORT}`);
});
