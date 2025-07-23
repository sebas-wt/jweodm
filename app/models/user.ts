import { DateTime } from 'luxon'
import { BaseModel, column } from 'adonis-odm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'


export default class User extends BaseModel {
  static accessTokens = DbAccessTokensProvider.forModel(User, {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  });  
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


}

