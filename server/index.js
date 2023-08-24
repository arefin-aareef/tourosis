const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sypbrfe.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const tourCollection = client.db("tourosisDB").collection("tour");
    const reviewCollection = client.db("tourosisDB").collection("review");

    app.get('/tour', async(req, res) => {
        const result = await tourCollection.find().toArray()
        res.send(result)
    })

    app.get('/review', async(req, res) => {
        const result = await reviewCollection.find().toArray()
        res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Tourosis is running')
})

app.listen(port, () => {
    console.log(`TOUROSIS is running on port ${port}`);
})