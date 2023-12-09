
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/registrar-profesor', 'ControladorEscolarsController.registrarProfesor')
Route.post('/registrar-alumno', 'ControladorEscolarsController.registrarAlumno')
Route.post('/crear-curso', 'ControladorEscolarsController.crearCurso')
Route.get('/listar-cursos', 'ControladorEscolarsController.listarCursos')
Route.get('/listar-profesores', 'ControladorEscolarsController.listarProfesores')
Route.get('/listar-alumnos', 'ControladorEscolarsController.listarAlumnos')
Route.post('/asignar-alumno-a-curso', 'ControladorEscolarsController.asignarAlumnoACurso')
Route.put('/actualizar-curso', 'ControladorEscolarsController.actualizarCurso')
Route.delete('/eliminar-curso', 'ControladorEscolarsController.eliminarCurso')
Route.get('/obtener-cursos-del-profesor', 'ControladorEscolarsController.obtenerCursosDelProfesor')
Route.post('/crear-modulo', 'ControladorEscolarsController.crearModulo')
Route.post('/crear-leccion', 'ControladorEscolarsController.crearLeccion')