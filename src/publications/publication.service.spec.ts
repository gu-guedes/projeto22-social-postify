import { Test, TestingModule } from '@nestjs/testing';
import { PublicationService } from './publication.service';
import { AppModule } from '../app.module';

describe('PublicationService', () => {
  let service: PublicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    service = module.get<PublicationService>(PublicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});