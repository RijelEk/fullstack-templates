import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { Request } from "express";
import {Error} from './types/Error';

export default {
    login: async (
        _:void, {email,password}:{email:string,password:string}, 
        {req}:{req:Request}
    ): Promise<User | Error> =>{

      const user:User|undefined = await User.findOne({ where: { email } });

        if (!user) {
          return{
              error:{
                field:["username"],
                message:"User not found"
              }
          };
        }

        const valid:boolean = await bcrypt.compare(password, user.password);

        if (!valid) {
          return{
            error:{
              field:["password"],
              message:"Password is not valid"
            }
          };
        }

        if (!user.confirmed) {
          return{
            error:{
              field:["username"],
              message:"User is not confirmed"
            }
          };
        }

        req.session!.userId = user.id;

        return{
              user:user,
              error: null
        } 
    }
}