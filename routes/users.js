var express = require('express');
var router = express.Router();
var service = require('./../services/user');

/* GET users listing. */
router.get('/login', service.login);

module.exports = router;