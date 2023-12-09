import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create ({
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [
      rules.confirmed(),
      rules.required(),
      rules.minLength(8),
    ])
  })

  public messages: CustomMessages = {
    'email.required': 'El correo electrónico es obligatorio.',
    'email.email': 'Proporciona una dirección de correo electrónico válida.',
    'email.unique': 'Este correo electrónico ya está en uso.',
    'password.required': 'La contraseña es obligatoria.',
    'password.minLength': 'La contraseña debe tener al menos 8 caracteres.'
  }
}
