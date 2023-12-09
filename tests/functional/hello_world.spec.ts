import { test } from '@japa/runner'


// test('is array', async ({ assert }) => {
//   const data = [] 
//   assert.isArray(data, 'La variable debe ser un arreglo')
// })

// test('is not array', async ({ assert }) => {
//   const data = ""
//   assert.isNotArray(data, 'La variable no debe ser un arreglo')
// })

// test('is empty', async ({ assert }) => {
//   const data = [] 
//   assert.isEmpty(data, 'El arreglo debe estar vacío')
// })

// test('is false', async ({ assert }) => {
//   const data = false
//   assert.isFalse(data, 'La variable debe ser falsa')
// })



// test('crear con body', async ({ client }) => {
//   const response = await client.post('/test').form({
//     "email": 'torresval@gmail.com',
//     "password": 'maria7769',
//     "password_confirmation": 'maria7769'

//   });

//   const parseado = JSON.parse(response.text())
//   console.log(parseado)
//   response.assertStatus(201);

//   const contenido = {
//       "email": "torresval@gmail.com",
//       "id": 3
//   };

//   response.assertBody(contenido);
// });

// test('actualizar con body', async ({ client }) => {
//   const response = await client.put('/test').form({
//     "id": "1",
//     "email": 'torresval@gmail.com',
//     "password": 'antoniojs'
//   });

//   const parseado = JSON.parse(response.text())
//   console.log(parseado)
//   response.assertStatus(400);

//   const contenido = {
//     "errors": [
//       {
//         "rule": "unique",
//         "field": "email",
//         "message": "Este correo electrónico ya está en uso."
//       },
//     ]
//   };

//   response.assertBody(contenido);
// });



// test('crear con bodycontains', async ({ client }) => {
//   const response = await client.post('/test').form({
//     "email": 'torresvalz@gmail.com',
//     "password": 'maria7769',
//     "password_confirmation": 'maria7769'

//   });

//   const parseado = JSON.parse(response.text())
//   console.log(parseado)
//   response.assertStatus(201);

//   const contenido = {
//       "email": "torresvalz@gmail.com",
//   };

//   response.assertBodyContains(contenido);
// });


// test('actualizar con bodycontains', async ({ client }) => {
//   const response = await client.put('/test').form({
//     "id": "3",
//     "email": 'torresval@gmail.com',
//     "password": 'antoniojs'
//   });

//   response.assertStatus(400);

//   response.assertBodyContains({
//     "errors": [
//       {
//         "rule": "unique",
//         "field": "email"
//       }
//     ]
//   });
// });

