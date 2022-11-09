const db = require('../models');
const Data = db.schema;
const Op = db.Sequelize.Op;
const sequelize = require('sequelize');


const listingPage = (req,res) => {
  
    // { where: condition }
    Data.findAll()
      .then(data => {
        res.render('listingPage',{data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
}

const sortByName = (req,res) => {
    Data.findAll({order: sequelize.literal('name ASC')})
     .then(data => {
        res.render('listingPage', {data});
     })
     .catch(err => {
        res.send(err.message);
     })
}

module.exports = {listingPage,sortByName};