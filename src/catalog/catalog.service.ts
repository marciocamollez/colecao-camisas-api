import { Injectable } from '@nestjs/common';
@Injectable()
export class CatalogService {
  findAll() {
    return [
      {
        id: 'CAM-0001',
        team: 'Palmeiras',
        season: '2024',
      },
      {
        id: 'CAM-0002',
        team: 'Nottingham Forest',
        season: '2023',
      },
    ];
  }
}
