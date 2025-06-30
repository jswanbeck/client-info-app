import { Injectable } from '@angular/core';
import avatarData from '../../../assets/data/avatar.json';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private baseUrl = 'https://avataaars.io/';

  private getRandomValue<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getRandomAvatarUrl(): string {
    const params = [
      `avatarStyle=Circle`,
      `topType=${this.getRandomValue(avatarData.topType)}`,
      `accessoriesType=${this.getRandomValue(avatarData.accessoriesType)}`,
      `hairColor=${this.getRandomValue(avatarData.hairColor)}`,
      `facialHairType=${this.getRandomValue(avatarData.facialHairType)}`,
      `clotheType=${this.getRandomValue(avatarData.clotheType)}`,
      `clotheColor=${this.getRandomValue(avatarData.clotheColor)}`,
      `eyeType=${this.getRandomValue(avatarData.eyeType)}`,
      `eyebrowType=${this.getRandomValue(avatarData.eyebrowType)}`,
      `mouthType=${this.getRandomValue(avatarData.mouthType)}`,
      `skinColor=${this.getRandomValue(avatarData.skinColor)}`
    ];
    return `${this.baseUrl}?${params.join('&')}`;
  }
}