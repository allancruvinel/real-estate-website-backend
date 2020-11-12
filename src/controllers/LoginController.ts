import { Request, Response } from 'express'
import bcrypt from 'bcrypt';

export default {
    async logIn(req: Request, res: Response){
        const {username, password }=req.body;
        if(username !== process.env.USER_LOGIN){
            console.log('senha incorreta');
            return res.status(401).send('user or password incorrect')
        }
        try{
            if(await bcrypt.compare(password,`${process.env.USER_PASS}`)){
                console.log('senha CORRETA');
                res.status(200).json({aut:`${process.env.COOKIE_AUT}`});
                
                
            }
            else{
                console.log('senha incorreta');
                return res.status(401).send('user or password incorrect')
            }
        }
        catch(e){
            console.log('error '+e);
        }
    }
}