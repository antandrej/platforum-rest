const app = require('../app');
const fileUpload = require('express-fileupload');

app.use(fileUpload({
  createParentPath: true
}));

const uploadFile = async (req, res) => {
    try {
      if (!req.files || !req.files.avatar) {
        res.send({
          status: false,
          message: 'No file uploaded'
        });
      } else {
        let avatar = req.files.avatar;
  
        avatar.mv(`../uploads/${req.params.id}/${avatar.name}`, (err) => {
          if (err) {
            res.status(500).send(err);
          } else {
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
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  module.exports = { uploadFile };  