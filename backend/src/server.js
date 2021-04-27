require('dotenv').config();
const app = require('express')();
const { db, port } = require('./config');

db.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

app.get('/', (req, res) => {
  res.send('hola!');
});

app.listen(port, () => {
  console.log(`Server is runing on ${port}`);
});
