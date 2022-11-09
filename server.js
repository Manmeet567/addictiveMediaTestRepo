const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const multer = require('multer');


const app = express();
const PORT = 3000 || process.env.PORT;
const corsOptions = "http://localhost:8081";

// setting view engine
app.set('view engine', 'ejs');


// middlewares
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// routes
app.use('/', router)


// database

// In development, you may need to drop existing tables and re-sync database. Just use force: true as following code: db.sequelize.sync({force:true})

db.sequelize.sync({force:true})
  .then(() => {
    console.log("Synced with database");

    // server ready to listen after connectin to database
    app.listen(PORT, ()=>{
    console.log(`Server started at Port:${PORT}`);
})

  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

