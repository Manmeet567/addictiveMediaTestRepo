const db = require('../models');
const Data = db.schema;

const showResume = (req,res)=>{

    const id = req.params.id;


    Data.findByPk(id)
     .then(result => {

        res.send(result.dataValues.resume.toString("base64"));
        console.log(result.dataValues.resume.toString("base64"));
     })
     .catch(err => {
        res.send(err.message);
     })
}
module.exports = showResume;