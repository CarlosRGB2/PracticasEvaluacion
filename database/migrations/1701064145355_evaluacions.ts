import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EvaluacionesSchema extends BaseSchema {
  protected tableName = 'evaluaciones'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('leccion_id').unsigned().references('id').inTable('leccions').onDelete('CASCADE')
      table.string('tipo').notNullable()
      table.text('contenido') 
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
  table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
