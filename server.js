const express = require('express')


const app = express()

//Sample Endpoint
app.get('/', (req,res) => res.json({msg: "Contact keeper API"}))

//Bring routes into server
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

//Initialize a port for the server to run on (Use process env variable and backup of 5000)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))