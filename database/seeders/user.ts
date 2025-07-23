import { BaseSeeder } from 'adonis-odm/seeders'

export default class User extends BaseSeeder {
  async run(): Promise<void> {
    // TODO: Add your seeding logic here
    
    // Example: Insert data using collection directly
    // const collection = this.getCollection('users')
    // await collection.insertMany([
    //   { name: 'Sample 1', createdAt: new Date() },
    //   { name: 'Sample 2', createdAt: new Date() },
    // ])
  }
}