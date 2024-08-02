const express = require('express');
const mongoose = require('mongoose')
const playerRoute = require('./routes/player.route.js');
const app = express();
const PORT = 3000;
//middleware
app.use(express.json());
//routes
app.use('/api/players', playerRoute);
app.get('/', (req, res)=>{
    res.send('This is a response from the Sports Team Project Server');
});
mongoose.connect('mongodb+srv://walstromowen:N0af7umEQTJdYJI0@cuwdb.tpip061.mongodb.net/sports-team-project?retryWrites=true&w=majority&appName=cuwDB')
.then(()=>{
    console.log('Connected to database.');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    });
})
.catch(()=>{
    console.log("Failed to connect to database.")
})
