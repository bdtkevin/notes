const express = require('express');
const app = express();
const cors = require('cors');
const { db, port } = require('./config');

db.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.use(express.json());
app.use(cors());

app.get('/api/notes/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  db.query(
    'SELECT id, title, note, date_created, date_modified FROM notes WHERE id_user = ? ORDER BY date_modified DESC',
    [userId],
    (err, results) => {
      if (!err) {
        res.status(200).json(results);
      } else {
        res.sendStatus(500);
      }
    }
  );
});

app.post('/api/notes/new', (req, res) => {
  const { userId, title, note } = req.body;
  db.query(
    'INSERT INTO notes(id_user, title, note) VALUES (?, ?, ?)',
    [userId, title, note],
    (err) => {
      if (!err) {
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    }
  );
});

app.put('/api/notes/update', (req, res) => {
  const { id, title, note } = req.body;
  db.query(
    'UPDATE notes SET title = ?, note = ? WHERE id = ?',
    [title, note, id],
    (err) => {
      if (!err) {
        res.sendStatus(200);
      } else {
        res.sendStatus(500);
      }
    }
  );
});

app.delete('/api/notes/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM notes WHERE id = ?', [id], (err) => {
    if (!err) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
