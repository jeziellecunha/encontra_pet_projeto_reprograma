const mongoose = require('mongoose')

//const MONGODB = process.env.MONGODB_URL

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/encontraPet-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database connected successfully.'))
  .catch(err => console.err)
}

module.exports = { connect }