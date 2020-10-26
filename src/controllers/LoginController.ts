import { Request, Response } from 'express'
import bcrypt, { hash } from 'bcrypt';

export default {
    async logIn(req: Request, res: Response){
        const {username, password }=req.body;
        if(username !== process.env.USER_LOGIN){
            return res.send('user not found')
        }
        try{
            if(await bcrypt.compare(password,`${process.env.USER_PASS}`)){
                res.send('sucess');
            }
            else{
                res.send('user or password incorrect')
            }
        }
        catch(e){
            console.log('error '+e);
        }
    }
}