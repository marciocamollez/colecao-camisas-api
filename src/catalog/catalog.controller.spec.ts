
import { Test, TestingModule } from '@nestjs/testing';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';

describe('CatalogController', () => {
  let controller: CatalogController;

  const mockCatalogService = {
    findAll: jest.fn().mockReturnValue([
      {
        slug: 'camisa-palmeiras-puma-2026-home',
        team: 'Palmeiras',
        season: '2026',
      },
    ]),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogController],
      providers: [
        {
          provide: CatalogService,
          useValue: mockCatalogService,
        },
      ],
    }).compile();

    controller = module.get<CatalogController>(CatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all catalog items', () => {
    const result = controller.findAll();

    expect(result).toHaveLength(1);
    expect(mockCatalogService.findAll).toHaveBeenCalled();
  });
});
