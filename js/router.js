var express = require('express');
var path = require('path');
var router= express.Router();

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../vid-chat/dist/index.html'));
});

module.exports = router;