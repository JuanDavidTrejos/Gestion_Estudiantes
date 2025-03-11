import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EstudiantesRepository {
  constructor(private prisma: PrismaService) {}

  async crearEstudiante(data: { nombre: string; email: string; edad: number }) {
    return this.prisma.estudiante.create({ data });
  }

  async obtenerEstudiantes() {
    return this.prisma.estudiante.findMany();
  }

  async obtenerEstudiantePorId(id: string) {
    return this.prisma.estudiante.findUnique({ where: { id } });
  }

  async actualizarEstudiante(id: string, data: Partial<{ nombre: string; email: string; edad: number }>) {
    return this.prisma.estudiante.update({ where: { id }, data });
  }

  async eliminarEstudiante(id: string) {
    return this.prisma.estudiante.delete({ where: { id } });
  }
}
