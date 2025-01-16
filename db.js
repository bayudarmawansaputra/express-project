const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rajadwiaqso:jdijfCFn1PSKWoWm@botdb.szxyp.mongodb.net/"; // Ganti dengan URI MongoDB kamu
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Terhubung ke MongoDB!');
    return client.db('botdb'); // Ganti dengan nama database kamu
  } catch (err) {
    console.error('Gagal terhubung ke MongoDB:', err);
  }
}

module.exports = connectDB;