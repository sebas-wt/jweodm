import { DateTime } from 'luxon'
import { BaseModel, beforeFind, column, computed } from 'adonis-odm'
import {SignJWT, CompactEncrypt} from 'jose'

export default class User extends BaseModel {
 
  @column({ isPrimary: true })
  declare _id: string

  @column()
  declare nombre:string;
  
  @column()
  declare pass:string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
  
  /*@computed()
  public  async pruebas(){
    const secreto = new TextEncoder().encode("secretohjpiuhdapsuidp9802987r0234iufh54f4}s+sf");
    const secretos = new TextEncoder().encode("secretohjpiuhdapsuidp9802987r023");

    const jwt = await  new SignJWT({sub:this._id, })
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setIssuer('http://localhost:3333/')//Aqui la url del api 
    .setAudience('http://localhost:3000')
    .setExpirationTime("2m")
    .sign(secreto); 
    
    const encryt = await new CompactEncrypt(new TextEncoder().encode(jwt))
      .setProtectedHeader({alg:'dir',enc:'A128CBC-HS256'})
      .encrypt(secretos);
    return encryt;
  }*/
}

