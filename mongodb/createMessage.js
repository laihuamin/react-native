require('./connect.js')

const mongoose = require('mongoose')
const fs = require('fs')

const MessageData = JSON.parse(fs.readFileSync('./mongodb/messageData.json', 'utf-8'));

// 定义骨架
MessageSchema = new mongoose.Schema({
    messageid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

// 定义模型

const Message = mongoose.model('Message', MessageSchema);

MessageData.forEach((item) => {
    const tempItem = new Message({
        messageid: item.messageid,
        userid: item.userid,
        time: item.time,
        username: item.username,
        message: item.message
    })
    tempItem.save(function(err) {
        if(err) {
            throw err;
        }
    })
});