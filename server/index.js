const express = require('express')
const colors=require('colors');
const cors =require('cors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema =require('./schema/schema')
const port=process.env.PORT || 8000;
const connectDB=require('./config/db');
const app=express();

app.use('/graphql',graphqlHTTP({
schema,
graphiql: process.env.NODE_ENV === 'development',
})
);
connectDB(); // Establish MongoDB connection

app.use(cors());
app.listen(port, console.log(`Server running on port ${port}`.yellow.bold));

