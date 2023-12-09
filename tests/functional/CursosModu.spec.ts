import { test } from '@japa/runner'

test.group('Cursos, Módulos y Lecciones', (group) => {


    test('crear un curso correctamente', async ({ client, assert }) => {
      const response = await client.post('/crear-curso').form({
        titulo: 'curso ciencias',
        descripcion: 'descripcion del curso de ciencias',
        profesor_id: 2,
        precio: 100
      })
  
      response.assertStatus(201)

      const contenido = {
          "titulo": "curso ciencias",
          "descripcion": "descripcion del curso de ciencias",
          "profesor_id": "2",
          "precio": "100",
          "id": 1
      };

      response.assertBody(contenido);

    })

    test('actualizar un curso correctamente', async ({ client, assert }) => {
      const response = await client.put('/actualizar-curso').form({
        id: 1,
        titulo: 'Curso de matematicas',
        descripcion: 'Descripción del curso de matematicas',
        precio: 150.00
      })  
      response.assertStatus(200)

      const contenido = {
          "titulo": "Curso de matematicas",
          "descripcion": "Descripción del curso de matematicas",
          "precio": "150"
    }

    response.assertBodyContains(contenido);
    })
  
  
    test('crear un módulo correctamente', async ({ client, assert }) => {
  
      const response = await client.post('/crear-modulo').form({
        curso_id: 1,
        titulo: 'algebra',
        descripcion: 'modulo de matematicas'
      })
  
      response.assertStatus(200)

      const contenido = {
          "curso_id": "1",
          "titulo": "algebra",
          "descripcion": "modulo de matematicas",
          "id": 1
      };
      response.assertBody(contenido);
    })

   test('eliminar un curso correctamente', async ({ client, assert }) => {
      const response = await client.delete('/eliminar-curso').form({ id: 1 })
  
      response.assertStatus(200)
      assert.equal(response.body().mensaje, 'Curso eliminado con éxito.')
    })
    
    test('debe devolver una lista de cursos', async ({ client, assert }) => {
      const response = await client.get('/listar-cursos')
      response.assertStatus(200)
      assert.isArray(response.body(), 'La respuesta debe ser un array')
    })
    
  })

  