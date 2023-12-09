import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'juan@example.com',
        password: 'password123'
      },
      {
        email: 'maria@example.com',
        password: 'password123'
      }
    ])
  }
}
