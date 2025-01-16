const { log } = require('console')
const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs')


const connectDB = require('./db');

app.get('/', async (req, res) => {
  try {
    const db = await connectDB();
    const users = db.collection('users'); // Mendapatkan collection 'users'
    
    // Menambahkan data
    
    // Mengambil data
    const user = await users.findOne({ nama: 'John Doe' });
    console.log('Data user:', user);
    // ... (operasi database, misalnya mengambil data dari collection)
    res.render('index', { title: 'John Doe' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Terjadi kesalahan.');
  }
});

app.get('/about', (req, res) => {
    res.send('Ini Halaman About')
})

app.get('/mahasiswa', (req, res) => {
    res.send('Ini Halaman Mahasiswa')
})

app.get('/products/:id', (req, res) => {
    let product = req.params.id
    res.send(`produk id: ${product}`)
})
app.use(express.static('public'))


const myLogger = require('./myLogger'); // Import middleware
app.use(myLogger); // Gunakan middleware

app.listen(port, () => {
    console.log('app listening at http://localhost:3000');
    
})