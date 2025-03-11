import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MatriculasRepository {
  constructor(private prisma: PrismaService) {}

  async crearMatricula(estudianteId: string, cursoId: string) {
    return this.prisma.matricula.create({
      data: { estudianteId, cursoId },
    });
  }

  async obtenerMatriculas() {
    return this.prisma.matricula.findMany({
      include: { estudiante: true, curso: true },
    });
  }

  async contarMatriculasPorCurso(cursoId: string) {
    return this.prisma.matricula.count({
      where: { cursoId },
    });
  }
}
