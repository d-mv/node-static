import express from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';

const { log } = console;

const app = express();

app.use(compression());
app.use(cors());

app.use(express.static(path.join(__dirname, '/../build')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

const port = process.env.PORT || '8080';

app.listen(port, () => {
  log(`\nserver started on port: ${port}\n`);
});
