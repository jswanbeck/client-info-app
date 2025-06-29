const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const clientsFilePath = path.join(__dirname, '..', 'src', 'assets', 'clients.json');

let clients = [];

function loadClients() {
  try {
    const data = fs.readFileSync(clientsFilePath, 'utf8');
    clients = JSON.parse(data).map((client, idx) => ({ ...client, id: idx }));
  } catch (err) {
    clients = [];
    console.error('Failed to load clients.json:', err);
  }
}
loadClients();

app.get('/api/clients', (req, res) => {
  res.json(clients);
});

app.get('/api/clients/:id', (req, res) => {
  const client = clients.find(c => c.id === Number(req.params.id));
  if (!client) return res.status(404).json({ error: 'Client not found' });
  res.json(client);
});

app.post('/api/clients', (req, res) => {
  const newClient = { ...req.body, id: clients.length ? clients[clients.length - 1].id + 1 : 0 };
  clients.push(newClient);
  res.status(201).json(newClient);
});

app.put('/api/clients/:id', (req, res) => {
  const idx = clients.findIndex(c => c.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Client not found' });
  clients[idx] = { ...clients[idx], ...req.body, id: clients[idx].id };
  res.json(clients[idx]);
});

app.delete('/api/clients/:id', (req, res) => {
  const idx = clients.findIndex(c => c.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Client not found' });
  const removed = clients.splice(idx, 1)[0];
  res.json(removed);
});

app.listen(PORT, () => {
  console.log(`Clients API server running on http://localhost:${PORT}`);
});

module.exports = app;
