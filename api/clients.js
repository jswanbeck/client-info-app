const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const clientsFilePath = path.join(process.cwd(), 'src', 'assets', 'clients.json');
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
};
