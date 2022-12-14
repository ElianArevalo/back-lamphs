const mongoose = require('mongoose');

const dbConnection = async()=>{
    try{

        await mongoose.connect(process.env.MONGO_DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database Connection Success');

    }catch(error){
        console.log(error);
        throw new Error('Error al conectarse a la base de datos.');
    }
}


module.exports = {
    dbConnection
}