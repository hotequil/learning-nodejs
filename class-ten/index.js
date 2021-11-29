const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://root:adalovelace@ada-lovelace-cluster.9jghq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((error, connection) => {
     if(error) throw error;

     const database = connection.db('School');
     const value = { name: 'HTML', price: 25 };

     database.collection('Courses')
             .insertOne(value, (insertError, response) => {
                  if(insertError) throw insertError;

                  console.log('Inserted data!', response);

                  connection.close();
             });
});
