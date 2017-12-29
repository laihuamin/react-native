require('./connect.js')

const mongoose = require('mongoose')
const fs = require('fs')

const userData = JSON.parse(fs.readFileSync('userData.json', 'utf-8'));

