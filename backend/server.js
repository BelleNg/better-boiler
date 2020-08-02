const express = require('express');
const path = require('path');
const cors = require('cors');
const Queries = require('./queries.js')
const app = express();
const port = 3000;


//middleware
app.use(cors())
app.use(express.json())


//app.use(express.static(path.join(__dirname, '../dist')))

app.get('/cats', (req, res) => {
  res.json({cats: 'cats cats'});
})

app.get('/cats/database', (req, res) => {
  Queries.showUsers( (err,results)=> {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})