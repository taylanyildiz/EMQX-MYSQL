const connection = require('../config/db_config.js');

const getDatas = (req,res)=>{
    const sql = 'SELECT * FROM mqtt_test_1';
    connection.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }
    });
}

const getSingleData = (req,res)=>{
    const { id } = req.params;
    const sql = `SELECT * FROM mqtt_test_1 WHERE id = ${id}`;
    connection.query(sql,(error,result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result[0]);
        }else{
            res.send('Not result');
        }
    });
}

const addData = (req, res) => {
    const sql = 'INSERT INTO mqtt_test_1 SET ?';
    const customerObj = {
        imei: req.body.imei,
        id: req.body.id,
        speed: req.body.speed,
        temperature: req.body.tempeture,
        floor: req.body.floor,
        isMoving: req.body.isMoving,
        maintenance: req.body.maintenance,
        status: req.body.status,
        dateTime: req.body.dateTime,
    };
    connection.query(sql, customerObj, error => {
        if (error) res.send(error);
        console.log("Sensor datas pushed to db");
        res.send("Sensor datas pushed to db");
    });
}

module.exports = {
    getDatas,
    getSingleData,
    addData,
};