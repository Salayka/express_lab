const express = 
require('express');

const userRouter = 
require('./routes/users');

const app = express(); 
app.set('view engine', 'ejs');
app.use('/users', userRouter);


app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index", 
        {user:"George!",});
}); 

app.listen(3030);

