import { Injectable } from '@nestjs/common';
import { EstudiantesRepository } from './estudiantes.repository';

@Injectable()
export class EstudiantesService {
  constructor(private estudiantesRepo: EstudiantesRepository) {}

  async crearEstudiante(nombre: string, email: string, edad: number) {
    return this.estudiantesRepo.crearEstudiante({ nombre, email, edad});
  }

  async obtenerEstudiantes() {
    return this.estudiantesRepo.obtenerEstudiantes();
  }

  async obtenerEstudiantePorId(id: string) {
    return this.estudiantesRepo.obtenerEstudiantePorId(id);
  }

  async actualizarEstudiante(id: string, data: Partial<{ nombre: string; email: string; edad: number }>) {
    return this.estudiantesRepo.actualizarEstudiante(id, data);
  }

  async eliminarEstudiante(id: string) {
    return this.estudiantesRepo.eliminarEstudiante(id);
  }
}
