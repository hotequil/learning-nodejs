const { MongoClient } = require('mongodb');
const { URIMongoDBAdaLovelace } = require("../.env");
const client = new MongoClient(URIMongoDBAdaLovelace, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((error, connection) => {
     if(error) throw error;

     const database = connection.db('School');
     const value = { name: 'HTML', price: 25 };
     const collection = database.collection('Courses');

    // collection.insertOne(value, (insertError, response) => {
    //     if(insertError) throw insertError;
    //
    //     console.log('Inserted data!', response);
    //
    //     connection.close();
    // });

    collection.find({ name: 'Angular' })
              .toArray((error, response) => {
                  if(error) throw error;

                  console.log(response);

                  connection.close();
              });
});
