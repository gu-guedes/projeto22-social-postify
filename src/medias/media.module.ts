import { Module, forwardRef } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { PublicationModule } from '../publications/publication.module';
import { MediaRepository } from './media.repository';
import { PublicationRepository } from '../publications/publication.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [forwardRef(() => PublicationModule)],
  controllers: [MediaController],
  providers: [
    MediaService,
    MediaRepository,
    PublicationRepository,
    PrismaService,
  ],
  exports: [MediaService],
})
export class MediaModule {}