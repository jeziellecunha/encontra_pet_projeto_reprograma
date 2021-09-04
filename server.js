const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const db = require("./src/data/database")
db.connect()

app.use(cors());
app.use(express.json());

const abrigoRouter = require("./src/routes/abrigo.routes");
app.use('/abrigo', abrigoRouter);

const adminRouter = require("./src/routes/admin.routes");
app.use('/admin', adminRouter);

// const petRouter = require("./src/routes/pet.routes");
// app.use('/pet', petRouter);

// const tutorRouter = require("./src/routes/tutor.routes");
// app.use('/tutor', tutorRouter)

//require('dotenv-safe').config();

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

module.exports = app;