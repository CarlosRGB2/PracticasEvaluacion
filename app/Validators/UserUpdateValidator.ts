import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string.optional({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' })
    ]),
    password: schema.string.optional({ trim: true }, [
      rules.minLength(8)
    ]),
  })

  public messages: CustomMessages = {
    'email.required': 'El correo electrónico es obligatorio.',
    'password.required': 'La contraseña es obligatoria.',
    'email.email': 'Proporciona una dirección de correo electrónico válida.',
    'email.unique': 'Este correo electrónico ya está en uso.',
    'password.minLength': 'La contraseña debe tener al menos 8 caracteres.'
  }
}
