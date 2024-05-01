const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
const connectDB = require('./dbOperations/mongodbConnection');

const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
    response.send("App is Live!");
});

app.use('/', userRouter);


connectDB().then(() =>
    app.listen(port, () => {
        console.log(`Server is listening at port ${port}`);
    })
).catch((err) => console.log(err));



