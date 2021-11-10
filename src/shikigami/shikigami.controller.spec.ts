import { Test, TestingModule } from '@nestjs/testing';
import { ShikigamiController } from './shikigami.controller';
import { ShikigamiService } from './shikigami.service';

describe('ShikigamiController', () => {
  let controller: ShikigamiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShikigamiController],
      providers: [ShikigamiService],
    }).compile();

    controller = module.get<ShikigamiController>(ShikigamiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
