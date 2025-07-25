// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {
    
    async getUser ({request}:HttpContext){               
        
        if(request.params().id != undefined){
            const nuevo = await  User.findOrFail(request.params().id);       
            return nuevo;
        }
        let todos = await User.query().all();
        return todos;
        
    }
    async create ({}:HttpContext){
       
        const nuevo = await User.create({
            nombre:"Sebastian",
            pass:"123123"
        });
        return nuevo;
    }
   
}