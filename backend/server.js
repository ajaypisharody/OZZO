import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
const path =require('path');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/ozzo',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,

});



app.use('/api/users', userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/config/paypal', (req, res) =>{
	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.use((err, req, res, next) =>{
	res.status(500).send({ message : err.message});
});

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('frontend/build'));
	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});

}
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
	console.log(`Serve at http://localhost:${port}`);
});