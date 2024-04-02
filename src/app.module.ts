import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafiosModule } from './desafios/desafios.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.xbydcwu.mongodb.net/smartranking?retryWrites=true&w=majority&appName=Cluster0`),
    JogadoresModule,
    CategoriasModule,
    DesafiosModule],
  controllers: [],
  providers: [],
})  
export class AppModule {}
