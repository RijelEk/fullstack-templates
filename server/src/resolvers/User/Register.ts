import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { Request } from "express";
import {Error} from './types/Error';
import { sendEmail } from "../../utils/sendEmail";
import {createConfirmationUrl} from "../../utils/createConfirmationUrl";

export default {
    register: async (
        _:void, {email,password, confirm_password, username}:{email:string,password:string, confirm_password:string, username:string}, 
        {req}:{req:Request}
    ): Promise<User | Error> =>{

        if(password != confirm_password){
          return{
            error:{
               field:["password"],
                 message:"Confirm password doesn't match"
            },
            user: null
          };
        }

         const hashedPassword = await bcrypt.hash(password, 12);
         const user = await User.create({
            username,
            email,
            password: hashedPassword
         }).save();

        await sendEmail(email, await createConfirmationUrl(user.id));

        return{
          user: user,
          error:null
        };
    }
}
