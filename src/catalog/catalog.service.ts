
import { Injectable } from '@nestjs/common';
import { CatalogItem } from './interfaces/catalog-item.interface';

@Injectable()
export class CatalogService {
  private readonly catalog: CatalogItem[] = [
    {
      slug: 'camisa-palmeiras-puma-2026-home',
      team: 'Palmeiras',
      season: '2024',
      brand: 'Puma',
      size: 'G',
      model: 'Home',
      condition: 'Usada',
      status: 'Coleção',
    },
    {
      slug: 'camisa-nottingham-forest-adidas-2023-away',
      team: 'Nottingham Forest',
      season: '2023',
      brand: 'Adidas',
      size: 'M',
      model: 'Away',
      condition: 'Nova',
      status: 'À venda',
    },
  ];

  findAll(): CatalogItem[] {
    return this.catalog;
  }

  findOne(slug: string): CatalogItem | undefined {
    return this.catalog.find((item) => item.slug === slug);
  }
}
