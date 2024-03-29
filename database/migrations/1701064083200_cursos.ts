import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CursosSchema extends BaseSchema {
  protected tableName = 'cursos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo').notNullable()
      table.text('descripcion').notNullable()
      table.integer('profesor_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.decimal('precio', 12, 2)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())      
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
