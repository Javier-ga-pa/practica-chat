import * as Sequelize from 'sequelize'
import data from "./config/config.json";

const db = data.development.database;
const username = data.development.username;



export const database = new Sequelize.Sequelize(db, username,"", {
    dialect:"mysql",
    port:5000,
    define:{
        timestamps:false
    }
});
