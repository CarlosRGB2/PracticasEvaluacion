import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Modulo from './Modulo'
import Matricula from './Matricula'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public descripcion: string

  @column()
  public profesorId: number

  @column()
  public precio: number | null

  @hasMany(() => Modulo)
  public modulos: HasMany<typeof Modulo>

  @hasMany(() => Matricula)
  public matriculas: HasMany<typeof Matricula>

  @column.dateTime({ autoCreate: true, serializeAs: null  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null  })
  public updatedAt: DateTime
}
