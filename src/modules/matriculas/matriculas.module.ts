import { Module } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { MatriculasController } from './matriculas.controller';
import { MatriculasRepository } from './matriculas.repository';
import { PrismaService } from 'src/prisma.service';
import { CursosRepository } from '../cursos/cursos.repository';

@Module({
  controllers: [MatriculasController],
  providers: [MatriculasService, MatriculasRepository, CursosRepository, PrismaService],
})
export class MatriculasModule {}
