const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/rn');

db.connection.on('error', function(err) {
    if(err) {
        throw err;
    }
})

db.connection.on('open', function() {
    console.log('数据库链接成功')
})
