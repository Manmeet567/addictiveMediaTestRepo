const db = require('../models');
const Data = db.schema;

const deleteData = (req,res)=>{
    const id = req.params.id;

    Data.destroy({
        where:{id:id}
    })
     .then(num =>{
        if(num == 1){
            res.status(200).redirect('/listingPage')
        }
        else{
            res.send("Could not delete data");
        }
     })
     .catch(err => {
        res.status(500).send("Some error occured while deleting . . .");
     })
};

module.exports = deleteData;