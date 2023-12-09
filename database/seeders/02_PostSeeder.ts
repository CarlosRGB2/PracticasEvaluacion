import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class PostSeeder extends BaseSeeder {
  public async run () {
    await Post.createMany([
      {
        userId: 1,
        title: 'Primer post de Juan',
        content: 'Este es el contenido del primer post de Juan.'
      },
      {
        userId: 2, 
        title: 'Primer post de Maria',
        content: 'Este es el contenido del primer post de Maria.'
      }
    ])
  }
}
