import { BaseModel, column, BelongsTo, belongsTo, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'
import Curso from './Curso'

export default class Matricula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuarioId: number

  @column()
  public cursoId: number

  @column.dateTime()
  public fechaMatricula: DateTime

  @column()
  public progreso: number

  @column.dateTime({ autoCreate: true, serializeAs: null  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null  })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'usuarioId', 
  })
  public usuario: BelongsTo<typeof User>

  @belongsTo(() => Curso, {
    foreignKey: 'cursoId', 
  })
  public curso: BelongsTo<typeof Curso>
}
