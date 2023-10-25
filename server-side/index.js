const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.hgznyse.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        // post/insert data to the database
        const userCollection = client.db("userDB").collection("users");
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user)
            res.send(result);
        })

        // get data to the database
        app.get('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.find().toArray()
            res.send(result);
        })

        // delete data to the database
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id:new ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })

        // update data to the database
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id:new ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Your server is ready !')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})