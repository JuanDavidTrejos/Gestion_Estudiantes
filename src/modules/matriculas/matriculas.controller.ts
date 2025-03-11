import { Controller, Post, Get, Body } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Post()
  matricular(@Body() data: { estudianteId: string; cursoId: string }) {
    return this.matriculasService.matricularEstudiante(data.estudianteId, data.cursoId);
  }

  @Get()
  obtenerTodas() {
    return this.matriculasService.obtenerMatriculas();
  }
}
