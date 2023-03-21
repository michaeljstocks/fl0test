const express = require('express')

const app = express()
let count = 0

app.get('/', (req, res) => {
  count++
  res.send(`Count: ${count}`)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
