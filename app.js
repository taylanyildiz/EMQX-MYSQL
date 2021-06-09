require('./config/mqtt_config.js');
require('./config/db_config.js');

const express = require('express');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3050;
const API_VERSION = "/api/v1";
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(API_VERSION,router);

require('./routers/db_routers')(router);

app.listen(PORT,()=> console.log(`Server is running ${PORT}`));