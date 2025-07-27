const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use((req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});