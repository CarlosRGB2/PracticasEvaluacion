import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LeccionesSchema extends BaseSchema {
  protected tableName = 'leccions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('modulo_id').unsigned().references('id').inTable('modulos').onDelete('CASCADE')
      table.string('titulo').notNullable()
      table.text('contenido').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
