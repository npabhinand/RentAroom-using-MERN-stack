const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/rentaroom',{
useNewUrlparser:true,
useUnifiedtopology:true
}).then(() =>console.log("connected to db")).catch(console.error);

const registerRouter=require('./src/components/routes/register.js')
const signinRouter=require('./src/components/routes/signin')


app.use('/register',registerRouter)
app.use('/signin',signinRouter)

app.listen(3001,()=>
console.log("server connected"));







