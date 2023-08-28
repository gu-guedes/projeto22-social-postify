import { Module, forwardRef } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PublicationModule } from '../publications/publication.module';
import { PostRepository } from './post.repository';
import { PublicationRepository } from '../publications/publication.repository';

@Module({
  imports: [forwardRef(() => PublicationModule)],
  controllers: [PostController],
  providers: [PostRepository, PostService, PublicationRepository],
  exports: [PostService],
})
export class PostModule {}