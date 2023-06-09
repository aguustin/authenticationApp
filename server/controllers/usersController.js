import users from "../models/users.js";
import bcrypt from "bcrypt";
import { imageUploader } from "../libs/cloudinary.js";
import fs from 'fs-extra';

export const deleteAll = async (req, res) => {
    await users.deleteMany();
    res.sendStatus(200);
}

export const loginUser = async (req, res) => {

    const email = req.body.email;
    
    const password = req.body.password;

    const findUser = await users.find({email: email});

        if(findUser.length !== 0){

            let compare = bcrypt.compareSync(password, findUser[0].password);

            if(compare !== 0){

                res.send(findUser);

            }else{

                res.sendStatus(400);

            }
        }else{

            console.log("The email is not found");

        }

}

export const registerUser = async (req, res) => {
    
    const name = req.body.name;
    const bio = req.body.bio;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    
    

    const userExist = await users.find({email:email});

    if(userExist.length !== 0){

        console.log("usuario ya existe");

        res.sendStatus(500);

    }else{

        const salt = bcrypt.genSaltSync(10);

        const hash = await bcrypt.hash(password, salt);
        
        const newUser = await new users({
            name: name,
            bio: bio,
            phone: phone,
            email: email,
            password:hash
        })
        
        await newUser.save();
    
        res.send(newUser);
    }

}

export const details = async (req, res) => {

    const id = req.params.id;

    console.log(id);
        try{
            const userDetails = await users.find({_id: id});

            res.send(userDetails);
            
        }catch(error){
            console.log(error);
        }

}

export const editUser = async (req, res) => {

    const id = req.params.id;
    
    const { name, bio, phone, email, password } = req.body;

    let photo;

    if(req.files){
        //console.log(req.files);
    const result = await imageUploader(req.files.photo.tempFilePath);
    await fs.remove(req.files.photo.tempFilePath);
    
    photo = {
        url: result.secure_url,
        public_id: result.public_id
    }

    }

        try{
    
            const userUpdate = await users.updateOne({_id: id}, 
                {$set : {
                    photo: photo,
                    name: name,
                    bio: bio,
                    phone: phone,
                    email: email,
                    password: password
                }
        })
        
            res.send(userUpdate);
        
        }catch(error){
            console.log(error);
        }

}
