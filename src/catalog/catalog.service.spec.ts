import { Test, TestingModule } from '@nestjs/testing';
import { CatalogService } from './catalog.service';
import { NotFoundException } from '@nestjs/common';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogService],
    }).compile();

    service = module.get<CatalogService>(CatalogService);
  });

  it('should return all catalog items', () => {
    const result = service.findAll();

    expect(result).toHaveLength(2);
  });

  it('should throw NotFoundException when item does not exist', () => {
    expect(() => service.findOne('slug-inexistente')).toThrow(
      NotFoundException,
    );
  });

  it('should return a catalog item by slug', () => {
    const result = service.findOne(
      'camisa-palmeiras-puma-2026-home',
    );

    expect(result.team).toBe('Palmeiras');
  });

});
