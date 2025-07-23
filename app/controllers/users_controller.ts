// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {
    
    async getUser ({request}:HttpContext){       
        const nuevo = await  User.findOrFail(request.params().id);       
       //let token = await User.accessTokens.create(nuevo);
       console.log(nuevo.$isPersisted);
        return nuevo;
    }
    async create ({}:HttpContext){
       
        const nuevo = await User.create({
            nombre:"Sebastian",
            pass:"123123"
        });
        return nuevo;
    }
   
}