import express from 'express';
import mongoose from 'mongoose';
// import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './Routes/UserRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://127.0.0.1:27017/muscle_data', { // //localhost/socialMuscleDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Body-Parser via Express Setup 
app.use(express.json({ extended: false }));

// CORS Setup
app.use( cors() );

routes(app);

app.get('/', ( req, res ) =>
    res.send(`The social network for fitness people is on port: ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Social network working on port: ${PORT}`)
);