import { test } from '@japa/runner'

test.group('Profesores y Alumnos', (group) => {

  /*test('registrar un profesor correctamente', async ({ client  }) => {
    const response = await client.post('/registrar-profesor').form({
      name: 'Profesor Test',
      email: 'profesor@example.com',
      password: 'contra81919',
      password_confirmation: "contra81919"
    })

    const contenido = {
        "email": "profesor@example.com",
        "rol": "profesor",
        "id": 1
    };

    response.assertStatus(201)
    response.assertBody(contenido);
  })*/

  /*test('error al registrar un profesor con email existente', async ({ client }) => {
    const response = await client.post('/registrar-profesor').form({
      name: 'Profesor Test',
      email: 'profesor@example.com',
      password: '32424324',
    })

    response.assertStatus(422)
    response.assertBodyContains({ 
      "message": {
        "errors": [
          {
            "rule": "unique",
            "message": "Este correo electrónico ya está en uso."
          }
        ]
      }
    } )
  })*/

  /*test('registrar un alumno correctamente', async ({ client }) => {
    const response = await client.post('/registrar-alumno').form({
      name: 'Alumno Test',
      email: 'alumno@ejemplo2.com',
      password: 'contra81919',
      password_confirmation: "contra81919"
    })

    response.assertStatus(201)

    const contenido = {
        "email": "alumno@ejemplo2.com",
        "rol": "alumno",
        "id": 2
  };

  response.assertBody(contenido);
  })*/

  /*test('listar profesores devuelve un array', async ({ client, assert }) => {
    const response = await client.get('/listar-profesores')
    response.assertStatus(200)
    assert.isArray(response.body(), 'La respuesta debe ser un array')
    assert.isNotEmpty(response.body(), 'Se espera al menos un profesor en la respuesta')
  })*/

  /*test('listar alumnos devuelve un array', async ({ client, assert }) => {
    const response = await client.get('/listar-alumnos')
    response.assertStatus(200)
    assert.isArray(response.body(), 'La respuesta debe ser un array')
    assert.isNotEmpty(response.body(), 'Se espera al menos un alumno en la respuesta')
  })*/

})


  

