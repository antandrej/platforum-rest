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

// ~~~~~~~~~~

app.post('/api/uploads/:id', async (req, res) => {
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let avatar = req.files.avatar;
          
          //Use the mv() method to place the file in the upload directory (i.e. "uploads")
          avatar.mv(`./uploads/${req.params.id}/${avatar.name}`);

          //send response
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
// ~~~~~~~~~~

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

client.connect();