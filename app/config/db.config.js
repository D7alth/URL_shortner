const mongoose = require('mongoose');
const url = `mongodb+srv://alberth:zamira@cluster0.pqelge1.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
}
const connection = mongoose.connect(url, connectionParams).then(()=>{
  console.log('Connected to the MongoDB cluster'); 
}).catch((e)=>{
  console.log(`Error connecting to the MongoDB cluster ${e}`);
});

module.exports = connection;