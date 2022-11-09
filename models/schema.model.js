module.exports = (sequelize, Sequelize) => {
    const Schema = sequelize.define("mydb", {
        name:{
            type:Sequelize.STRING
        },
        dob:{
            type:Sequelize.DATEONLY
        },
        resume:{
            type:Sequelize.BLOB
        },
        country:{
            type:Sequelize.STRING
        }
    });

    return Schema;
};