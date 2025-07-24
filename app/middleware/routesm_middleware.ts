import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { compactDecrypt, jwtVerify } from 'jose';
export default class RoutesmMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {

    try {
      /**
       * Middleware logic goes here (before the next call)
       */
      let token = ctx.request.header("Authorization");
      if (token != undefined) {
        // 1. Desencriptar JWE
        const { plaintext } = await compactDecrypt(token,
          new TextEncoder().encode("secretohjpiuhdapsuidp9802987r023"));
        const jwtString = new TextDecoder().decode(plaintext);

        // 2. Verificar firma JWT
        const secreto = new TextEncoder().encode("secretohjpiuhdapsuidp9802987r0234iufh54f4}s+sf");

        const { payload, protectedHeader } = await jwtVerify(jwtString, secreto);

        console.log('✅ Token válido:', payload);
       
        await next()
      }
    } catch (error) {
      console.log(error.code);
      ctx.response.status(401);
    }
  }
}