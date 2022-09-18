const express = require('express');
const app = express();
const PORT = process.env.PORT || 911;

const connection = require('./config/db.config');

//connection.once('open', () => console.log('DB Connected'))
//connection.on('error', () => console.log('Error'))

app.use(express.json({
    extended: false
}))

app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))


app.listen(PORT, ()=>{
    console.log(`server on, listening PORT ${PORT}`);
});