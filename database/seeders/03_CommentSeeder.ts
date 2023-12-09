import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class CommentSeeder extends BaseSeeder {
  public async run () {
    await Comment.createMany([
      {
        userId: 1, 
        postId: 1,
        content: 'hola'
      },
      {
        userId: 2,
        postId: 2, 
        content: 'como andas'
      }
    ])   
  }
}
