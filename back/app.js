const express = require('express');
const connect  = require('./db/connectDB');
const app = express()
require('dotenv').config();
//cors
const cors = require('cors')
app.use(cors())
// routers
const trackRouter = require('./router/track')
const AlbumRouter = require('./router/album')

// Multer
const upload = require('./middleware/upload')

app.use('/tracks',  upload.single('cover'),trackRouter);
app.use('/albums',  upload.single('cover'),AlbumRouter);

// JSON

app.use(express.json());

//uploads
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {
    setHeaders: (res, path) => {
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    }
  }));

app.all('/', (req, res) => {
    res.status(200).send('soory can not find what you looking for')
});

const port = process.env.PORT || 5000

const start = async () =>{
    await connect(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}
start()
