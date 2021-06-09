  
const dbController = require('../controllers/db_controller');

module.exports = function (app) {
    const field = '/sensor';
    app.get(field + '/datas', dbController.getDatas);
    app.get(field + '/datas/:id', dbController.getSingleData);
    app.post(field + '/add-data', dbController.addData);
}