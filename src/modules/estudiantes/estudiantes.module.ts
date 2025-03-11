import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { PrismaService } from 'src/prisma.service';
import { EstudiantesRepository } from './estudiantes.repository';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService, PrismaService, EstudiantesRepository],
  exports: [EstudiantesService],
})
export class EstudiantesModule {}
