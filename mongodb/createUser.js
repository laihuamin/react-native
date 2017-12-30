require('./connect.js')

const mongoose = require('mongoose')
const fs = require('fs')

const userData = JSON.parse(fs.readFileSync('./mongodb/userData.json', 'utf-8'));

// 定义骨架
UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    partment: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    creater: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

// 定义模型

const User = mongoose.model('User', UserSchema);

userData.forEach((item) => {
    const tempItem = new User({
        name: item.name,
        password: item.password,
        partment: item.partment,
        tel: item.tel,
        email: item.email,
        tag: item.tag,
        creater: item.creater,
        token: item.token
    })
    tempItem.save(function(err) {
        if(err) {
            throw err;
        }
    })
});