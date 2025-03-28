import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { CursosRepository } from './cursos.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CursosController],
  providers: [CursosService, CursosRepository, PrismaService],
})
export class CursosModule {}
