const mysql = require('mysql');

const pool = mysql.createPool({
    connectTimeout: 10,
    password: 'BenYaparim.55',
    user: 'root',
    database: 'dent_clinic',
    host: 'localhost'
});


let dentclinic = {};

dentclinic.all = () => {
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM mng_users`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = dentclinic;