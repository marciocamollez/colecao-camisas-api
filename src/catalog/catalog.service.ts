
import { Injectable } from '@nestjs/common';
import { CatalogItem } from './interfaces/catalog-item.interface';

@Injectable()
export class CatalogService {
  private readonly catalog: CatalogItem[] = [
    {
      id: 'CAM-0001',
      team: 'Palmeiras',
      season: '2024',
      brand: 'Puma',
      size: 'G',
      model: 'Home',
      condition: 'Usada',
      status: 'Coleção',
    },
    {
      id: 'CAM-0002',
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

  findOne(id: string): CatalogItem | undefined {
    return this.catalog.find((item) => item.id === id);
  }
}
