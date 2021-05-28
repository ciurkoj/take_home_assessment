const express  = require("express");
const cors  = require("cors");

const app = express();

app.use(express.json())
app.use(cors());


const subscribersRouter = require('./routes/posts')
app.use('/posts', subscribersRouter)

app.get('/', (req, res) => {
    res.send("hello world");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server Started'))