import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private estudiantesService: EstudiantesService) {}

  @Post()
  async crearEstudiante(@Body() body: { nombre: string; email: string; edad: number }) {
    return this.estudiantesService.crearEstudiante(body.nombre, body.email, body.edad);
  }

  @Get()
  async obtenerEstudiantes() {
    return this.estudiantesService.obtenerEstudiantes();
  }

  @Get(':id')
  async obtenerEstudiantePorId(@Param('id') id: string) {
    return this.estudiantesService.obtenerEstudiantePorId(String(id));
  }

  @Put(':id')
  async actualizarEstudiante(@Param('id') id: string, @Body() body: { nombre?: string; email?: string; edad?: number }) {
    return this.estudiantesService.actualizarEstudiante(String(id), body);
  }

  @Delete(':id')
  async eliminarEstudiante(@Param('id') id: string) {
    return this.estudiantesService.eliminarEstudiante(String(id));
  }
}
