const fs = require('fs');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');

const Intro = require('../model/introModel');
const Main = require('../model/mainQuesModel');
const Care = require('../model/careModel');

dotenv.config({path: './config.env'}); // reads our config files into node

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

// connecting to remote datebase
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('Connction is successful'));

// READ FROM JSON FILE
const intro = JSON.parse(fs.readFileSync(`${__dirname}/intro.json`,'utf-8'));
const main = JSON.parse(fs.readFileSync(`${__dirname}/main.json`,'utf-8'));
const care = JSON.parse(fs.readFileSync(`${__dirname}/care.json`,'utf-8'));

// IMPORT FROM DB
const importData = async () => {
    try {
        await Intro.create(intro);
        await Main.create(main);
        await Care.create(care);
        console.log("Data successfully loaded");
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

// DELETE DATA FROM DB
const deleteData = async () => {
    try {
        await Intro.deleteMany({});
        await Main.deleteMany({});
        await Care.deleteMany({});
        console.log("Data successfully deleted");
        process.exit(); // a way to close our application
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

if(process.argv[2] == "--import"){
    importData();
}else if(process.argv[2] == "--delete"){
    deleteData();
}

// console.log(process.argv); // process.argv :prints out and of the directory for the node and file that is run
