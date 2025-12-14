import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/college").then((res)=>{
    console.log("Database connect success")
}).catch((e)=>{
    console.log("Database connection error",e);
})
const userSchema = new mongoose.Schema({
  image: String
});

const User = mongoose.model('User', userSchema);
// file upload 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const mediaName = file.fieldname + '-' + Date.now() + '.' + ext;
    cb(null, mediaName)
  }
})

const upload = multer({ storage: storage })

app.get('/',async (req, res) => {
    let user = await User.find({})
    user.forEach((u)=>{
        u.image="http://127.0.0.1:8000/"+u.image;
    })
    
    return res.json(user)
});

app.post('/',upload.single('image'),async(req, res) => {
    let image = req.file.filename;
    let userData = await User.create({image:image});
    res.send('File uploaded successfully');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});