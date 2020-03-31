
const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')

const errorController = require('./controllers/error')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs({layoutsDir: path.join(__dirname, 'views/layouts'), defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const adminRoutes = require('./routes/admin')
const publicRoutes = require('./routes/public')

app.use('/admin', adminRoutes)
app.use(publicRoutes)
app.use(errorController.get404)


app.listen(3000)
