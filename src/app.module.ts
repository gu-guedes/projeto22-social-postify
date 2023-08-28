import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './medias/media.module';
import { PostModule } from './post/post.module';
import { PublicationModule } from './publications/publication.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MediaModule, PostModule, PublicationModule, PrismaModule],
})
export class AppModule {}