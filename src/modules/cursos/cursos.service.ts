import { Injectable } from '@nestjs/common';
import { CursosRepository } from './cursos.repository';

@Injectable()
export class CursosService {
  constructor(private cursosRepository: CursosRepository) {}

  async obtenerTodos() {
    return this.cursosRepository.obtenerTodosLosCursos();
  }

  async crearCurso(nombre: string, cupos: number) {
    return this.cursosRepository.crearCurso(nombre, cupos);
  }

  async eliminarCurso(id: string) {
    return this.cursosRepository.eliminarCurso(id);
  }
}
// 