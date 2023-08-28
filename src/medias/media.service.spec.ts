import { Test, TestingModule } from '@nestjs/testing';
import { MediaService } from './media.service';
import { AppModule } from '../app.module';

describe('MediasService', () => {
  let service: MediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    service = module.get<MediaService>(MediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});