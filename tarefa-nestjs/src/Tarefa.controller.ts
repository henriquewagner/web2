import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { INSTANCE_ID_SYMBOL } from "@nestjs/core/injector/instance-wrapper";
import { runInThisContext } from "vm";

@Controller()
export class tarefaController {

    // tarefaLista = ['tarefa 01', 'tarefa 02' ];

    tarefaLista = [];      //(codigo: '' , descrição)

    //@Get("/tarefa")
    //listaTarefa() {
    // return ['tarefa 01, tarefa 02'];
    @Get("/tarefa")
    listaTarefa() {
        return this.tarefaLista
    }

    @Put("/tarefa")
    salvartarefa(@Body() tarefa) {
        let index = this.tarefaLista.findIndex(t => t.codigo == tarefa.codigo);
        if (index >= 0) {
            this.tarefaLista[index].descricao = tarefa.descricao;
        } else {
            tarefa.codigo = Math.random().toString(36)
            this.tarefaLista.push(tarefa);
        }
        return "ok";
    }

    @Get("/tarefa/:codigo")
    buscarPorCodigo(@Param() parametro) {                       //Param = Significa parametro
        console.log(parametro.codigo);                         // pega o codigo da url
        let tarefa = this.tarefaLista.find(tarefa => tarefa.codigo == parametro.codigo);
        return tarefa;
    }

    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parameto) {
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parameto.codigo);
        this.tarefaLista.splice(index, 1);
        return "ok";
    }
}
