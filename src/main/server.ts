import express from 'express'

const app = express()

const PORT = 5050

app.listen(5050, () => console.log(`Server running at http://localhost:${PORT}`))
