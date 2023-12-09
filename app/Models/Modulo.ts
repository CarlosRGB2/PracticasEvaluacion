import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Leccion from './Leccion'
import { DateTime } from 'luxon'
export default class Modulo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cursoId: number

  @column()
  public titulo: string

  @column()
  public descripcion: string

  @hasMany(() => Leccion)
  public lecciones: HasMany<typeof Leccion>

  @column.dateTime({ autoCreate: true, serializeAs: null  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null  })
  public updatedAt: DateTime
}
