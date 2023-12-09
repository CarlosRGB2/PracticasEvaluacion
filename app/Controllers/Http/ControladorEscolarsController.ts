import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Curso from 'App/Models/Curso'
import Modulo from 'App/Models/Modulo'
import Leccion from 'App/Models/Leccion'
import Matricula from 'App/Models/Matricula'
import CreateUserValidator from 'App/Validators/UserValidator'
export default class ControladorEscolar {
    public async registrarProfesor({ request, response }: HttpContextContract) {
        try {
          const validatedData = await request.validate(CreateUserValidator)
          
          const usuario = await User.create({ ...validatedData, rol: 'profesor' })
          return response.status(201).json(usuario)
        } catch (e) {
          return response.status(e.status || 400).json({ message: e.messages })
        }
      }
    
      public async registrarAlumno({ request, response }: HttpContextContract) {
        try {
          const validatedData = await request.validate(CreateUserValidator)
          
          const usuario = await User.create({ ...validatedData, rol: 'alumno' })
          return response.status(201).json(usuario)
        } catch (e) {
          return response.status(e.status || 400).json({ message: e.messages })
        }
      }

  public async crearCurso({ request, response}: HttpContextContract) {
    const datosCurso = request.only(['titulo', 'descripcion', 'profesor_id', 'precio'])
    const curso = await Curso.create(datosCurso)
    return response.status(201).json(curso)
  }

  public async listarCursos({}: HttpContextContract) {
    return await Curso.all()
  }

  public async listarProfesores({}: HttpContextContract) {
    return await User.query().where('rol', 'profesor')
  }

  public async listarAlumnos({}: HttpContextContract) {
    return await User.query().where('rol', 'alumno')
  }

  public async asignarAlumnoACurso({ request, response}: HttpContextContract) {
    const { alumnoId, cursoId } = request.only(['alumnoId', 'cursoId'])
    const matricula = await Matricula.create({ usuarioId: alumnoId, cursoId })
    return response.status(201).json(matricula)
  }

  public async actualizarCurso({ request, response }: HttpContextContract) {
    try {
      const id = request.input('id')
      const curso = await Curso.findOrFail(id)
      const datosActualizados = request.only(['titulo', 'descripcion', 'precio'])
      curso.merge(datosActualizados)
      await curso.save()
      return response.status(200).json(curso)
    } catch (e) {
      return response.status(e.status || 500).json({ mensaje: e.message })
    }
  }
  
  public async eliminarCurso({ request, response }: HttpContextContract) {
    try {
      const id = request.input('id')
      const curso = await Curso.findOrFail(id)
      await curso.delete()
      return response.status(200).json({ mensaje: 'Curso eliminado con éxito.' })
    } catch (e) {
      return response.status(e.status || 500).json({ mensaje: 'Error al eliminar el curso.' })
    }
  }
  
  public async obtenerCursosDelProfesor({ request, response }: HttpContextContract) {
    try {
      const profesorId = request.input('profesorId')
      const cursosDelProfesor = await Curso.query().where('profesor_id', profesorId)
      return response.status(200).json(cursosDelProfesor)
    } catch (e) {
      return response.status(e.status || 500).json({ mensaje: 'Error al obtener los cursos del profesor.' })
    }
  }

  public async crearModulo({ request, response }: HttpContextContract) {
    const datosModulo = request.only(['curso_id', 'titulo', 'descripcion'])
    const modulo = await Modulo.create(datosModulo)
    return response.status(200).json(modulo)
  }

  public async crearLeccion({ request, response }: HttpContextContract) {
    const datosLeccion = request.only(['modulo_id', 'titulo', 'contenido'])
    const leccion = await Leccion.create(datosLeccion)
    return response.status(200).json(leccion)
  }

}
