// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {

    public async findUser({ request }: HttpContext) {
        const {nombre,pass} = request.body();       
        const nuevo = await  User.query()
            .where("nombre",nombre)
            .where("pass",pass)
            .first();       
        
        if(nuevo){
            return "Encontrado"
        }
        return "No encotrado";
    }

    /*
    async create({request}: HttpContext) {
        const nuevo = await User.create({
            nombre: "Sebastian",
            pass: "123123"
        });
        return nuevo;
    }
*/
    
}