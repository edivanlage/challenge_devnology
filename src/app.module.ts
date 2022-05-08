import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ScrapperModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
