import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CursosRepository {
  constructor(private prisma: PrismaService) {}

  async obtenerTodosLosCursos() {
    return this.prisma.curso.findMany();
  }

  async obtenerCursoPorId(id: string) {
    return this.prisma.curso.findUnique({ where: { id } });
  }

  async crearCurso(nombre: string, cupos: number) {
    return this.prisma.curso.create({
      data: { nombre, cupos },
    });
  }

  async eliminarCurso(id: string) {
    return this.prisma.curso.delete({ where: { id } });
  }
}
