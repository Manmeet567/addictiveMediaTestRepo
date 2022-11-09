const db = require('../models');
const Data = db.schema;
const Op = db.Sequelize.Op;

const handlingData = (req,res) => {
    const data = {
        name:req.body.name,
        dob:req.body.dob,
        resume:req.file,
        country:req.body.country
    }
    console.log(data);

    Data.create(data)
     .then(result => {
        console.log(result);
        res.status(200).redirect('/listingPage');
     })
     .catch(err => {
        res.status(500).send(err.message);
     })
};

module.exports = handlingData;