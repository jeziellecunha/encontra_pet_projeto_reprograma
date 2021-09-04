const mongoose = require('mongoose')
//Pode conectar tanto localmente, quanto nas nuvens
const MONGODB_URL = 'mongodb://localhost:27017/encontraPet-db' || process.env.MONGODB_URI



const connect = () => {
  mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database connected successfully.'))
  .catch(err => console.err)
}

module.exports = { connect }