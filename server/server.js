const app = require('express')();
const config = require('dotenv').config();

// TODO: Import authentication logic.


// TODO: Serve react.
app.get('/', (req, res) => {
    res.send('Under construction 🏗...');
});

// TODO: Implement data saving option.
app.post('/save', (req, res) => {

})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`);
});