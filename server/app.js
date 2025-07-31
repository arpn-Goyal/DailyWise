import e from "express";
import dotenv from "dotenv";

dotenv.config();

const app = e();
const port = process.env.PORT || 4000;
app.get('/', (req, res)=>{
    res.send('Server');
})

app.listen(port, ()=>{
    console.log(`Server is running http://localhost:${port}`)
})