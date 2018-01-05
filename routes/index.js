module.exports = (app) => {
    app.use('/', (req, res) => {
        res.redirect('/message')
    })
    app.use('user', require('./user'))
    app.use('message', require('./message'))
}