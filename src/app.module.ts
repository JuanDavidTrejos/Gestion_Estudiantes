import { Module } from '@nestjs/common';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { MatriculasModule } from './modules/matriculas/matriculas.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [EstudiantesModule, CursosModule, MatriculasModule],
  providers: [PrismaService], // Se inyecta el servicio de Prisma para que esté disponible globalmente
})
export class AppModule {}
