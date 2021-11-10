import { Test, TestingModule } from '@nestjs/testing';
import { ShikigamiService } from './shikigami.service';

describe('ShikigamiService', () => {
  let service: ShikigamiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShikigamiService],
    }).compile();

    service = module.get<ShikigamiService>(ShikigamiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
