const country_list = require('../public/countries')
const inputPage = (req,res)=>{

    res.status(200).render('inputPage',{country_list, message:""})
};
module.exports = inputPage;