const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>¡Mi App Desplegada con CI/CD! 🚀</h1>
        <p>Versión: 1.0.0</p>
        <p>Fecha: ${new Date().toLocaleString()}</p>
        <p>Host: ${process.env.HOSTNAME || 'Desconocido'}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`App ejecutándose en puerto ${port}`);
});