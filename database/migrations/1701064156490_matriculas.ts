import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MatriculasSchema extends BaseSchema {
  protected tableName = 'matriculas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('curso_id').unsigned().references('id').inTable('cursos').onDelete('CASCADE')
      table.timestamp('fecha_matricula', { useTz: true })
      table.float('progreso').defaultTo(0)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
  table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
