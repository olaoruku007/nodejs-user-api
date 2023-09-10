const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
  { 
    name: "Samuel",
    email: "samuel@gmail.com",
  },
  { 
    name: "Michael",
    email: "michael@gmail.com",
  },  
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
