import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tarefaController } from './Tarefa.controller';

@Module({
  imports: [],
  controllers: [AppController, tarefaController],
  providers: [AppService],
})
export class AppModule {}
