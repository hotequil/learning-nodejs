const { MongoClient } = require('mongodb');
const { URIMongoDBAdaLovelace } = require("../.env");
const client = new MongoClient(URIMongoDBAdaLovelace, { useNewUrlParser: true, useUnifiedTopology: true });
const ASC = 1;
const DESC = -1;
const FIELD = 'slug';

const frameworks = [
    {
        name: 'NodeJS',
        [FIELD]: 'javascript'
    },
    {
        name: 'Laravel',
        [FIELD]: 'php'
    },
    {
        name: 'Spring',
        [FIELD]: 'java'
    }
];

const languages = [
    {
        name: 'JavaScript',
        [FIELD]: 'javascript'
    },
    {
        name: 'PHP',
        [FIELD]: 'php'
    },
    {
        name: 'Java',
        [FIELD]: 'java'
    }
];

client.connect(async (error, connection) => {
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

    // collection.find({ name: 'Angular' })
    //           .toArray((error, response) => {
    //               if(error) throw error;
    //
    //               console.log(response);
    //
    //               connection.close();
    //           });

    // collection.find()
    //           .sort({ name: DESC })
    //           .limit(5)
    //           .toArray((error, response) => {
    //               if(error) throw error;
    //
    //               console.log(response, response.length);
    //
    //               connection.close();
    //           });

    // collection.deleteOne({ name: 'React' }, (error, response) => {
    //     if(error) throw error;
    //
    //     console.log('Deleted!', response);
    //
    //     connection.close();
    // });

    // collection.updateOne({ name: 'Vue' }, { $set: { name: 'VueJS', price: 50 } }, (error, response) => {
    //     if(error) throw error;
    //
    //     console.log('Updated data!', response);
    //
    //     connection.close();
    // });

    const collectionFrameworks = database.collection('frameworks');
    const collectionLanguagesName = 'languages';
    const collectionLanguages = database.collection(collectionLanguagesName);

    // await collectionFrameworks.insertMany(frameworks);
    // await collectionLanguages.insertMany(languages);

    collectionFrameworks.aggregate([
                            {
                                $lookup: {
                                    from: collectionLanguagesName,
                                    localField: FIELD,
                                    foreignField: FIELD,
                                    as: 'language'
                                }
                            }
                        ])
                        .toArray((error, response) => {
                            if(error) throw error;

                            console.log(JSON.stringify(response));

                            connection.close();
                        });
});
