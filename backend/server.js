const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;


//middleware
app.use(cors())
app.use(express.json())


app.use('/static', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})