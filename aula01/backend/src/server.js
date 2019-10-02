const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb://omnistack:leto2019@omnistack-shard-00-00-t9yyy.mongodb.net:27017,omnistack-shard-00-01-t9yyy.mongodb.net:27017,omnistack-shard-00-02-t9yyy.mongodb.net:27017/test?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333);