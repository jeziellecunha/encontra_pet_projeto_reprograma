const mongoose = require('mongoose')
//Pode conectar tanto localmente, quanto nas nuvens
const MONGODB_URL =  process.env.MONGODB_URI || 'mongodb://localhost:27017/encontraPet-db' 



const connect = () => {
  mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database connected successfully.'))
  .catch(error => console.error(error))
}

module.exports = { connect }