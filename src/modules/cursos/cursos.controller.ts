import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  obtenerTodos() {
    return this.cursosService.obtenerTodos();
  }

  @Post()
  crear(@Body() data: { nombre: string; cupos: number }) {
    return this.cursosService.crearCurso(data.nombre, data.cupos);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.cursosService.eliminarCurso(id);
  }
}
