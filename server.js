const express = require('express');
//const connectDB = require('./config/db.js');
const path = require('path');
const app = express();

// Connect Databas
//connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
// app.use('/api/users', require('./routes/users.js'));
// app.use('/api/contacts', require('./routes/contacts.js'));
// app.use('/api/auth', require('./routes/auth.js'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
