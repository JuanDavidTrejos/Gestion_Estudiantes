import { Injectable, BadRequestException } from '@nestjs/common';
import { MatriculasRepository } from './matriculas.repository';
import { CursosRepository } from '../cursos/cursos.repository';

@Injectable()
export class MatriculasService {
  constructor(
    private readonly matriculasRepository: MatriculasRepository,
    private readonly cursosRepository: CursosRepository,
  ) {}

  async matricularEstudiante(estudianteId: string, cursoId: string) {
    // Verificar si el curso existe
    const curso = await this.cursosRepository.obtenerCursoPorId(cursoId);
    if (!curso) {
      throw new BadRequestException('Curso no encontrado');
    }

    // Contar las matrículas existentes en el curso
    const totalMatriculados = await this.matriculasRepository.contarMatriculasPorCurso(cursoId);
    if (totalMatriculados >= curso.cupos) {
      throw new BadRequestException('No hay cupos disponibles');
    }

    // Crear la matrícula
    return this.matriculasRepository.crearMatricula(estudianteId, cursoId);
  }

  async obtenerMatriculas() {
    return this.matriculasRepository.obtenerMatriculas();
  }
}
