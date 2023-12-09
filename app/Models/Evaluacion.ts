import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Evaluacion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public leccionId: number

  @column()
  public tipo: string

  @column()
  public contenido: string 
  
  @column.dateTime({ autoCreate: true, serializeAs: null  })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null  })
  public updatedAt: DateTime
}
