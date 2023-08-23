/*
const client = require('./connection.js')
const app = require('./app.js');

const sessionsRouter = require('./routes/session.js');
const usersRouter = require('./routes/users.js');
//const filesRouter = require('./routes/files.js');

app.use('/', sessionsRouter);
app.use('/', usersRouter);
//app.use('/', filesRouter);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();
*/

const client = require('./connection.js')
const app = require('./app.js');

const fs = require('fs');
const path = require('path');

// ~~~~~~~~~~

const sessionsRouter = require('./routes/session.js');
const usersRouter = require('./routes/users.js');

app.use('/', sessionsRouter);
app.use('/', usersRouter);

app.post('/api/uploads/:id', async (req, res) => {
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          let avatar = req.files.avatar;
          
          avatar.mv(`./uploads/${req.params.id}/${avatar.name}`);

          res.send({
              status: true,
              message: 'File is uploaded',
              data: {
                  name: avatar.name,
                  mimetype: avatar.mimetype,
                  size: avatar.size
              }
          });
      }
  } catch (err) {
      res.status(500).send(err);
  }
});


app.get('/api/uploads/:id', (req, res) => {
    const folderPath = `./uploads/${req.params.id}`;
  
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
  
      res.send({
        status: true,
        message: 'List of files',
        data: files
      });
    });
  });

  app.get('/api/uploads/:id/:fileName', (req, res) => {
    const filePath = path.join(__dirname, 'uploads', req.params.id, req.params.fileName);
  
    res.download(filePath, req.params.fileName, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file');
      }
    });
  });

// ~~~~~~~~~~

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();