import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ModulosSchema extends BaseSchema {
  protected tableName = 'modulos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('curso_id').unsigned().references('id').inTable('cursos').onDelete('CASCADE')
      table.string('titulo').notNullable()
      table.text('descripcion').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
