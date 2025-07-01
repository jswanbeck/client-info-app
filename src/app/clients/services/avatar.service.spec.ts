import { TestBed } from '@angular/core/testing';
import { AvatarService } from './avatar.service';

describe('AvatarService', () => {
  let service: AvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRandomAvatarUrl should return a url that is formatted correctly', () => {
    const url = service.getRandomAvatarUrl();
    expect(url.startsWith('https://avataaars.io/')).toBeTrue();
    expect(url).toContain('avatarStyle=Circle');
    expect(url).toContain('topType=');
    expect(url).toContain('accessoriesType=');
    expect(url).toContain('hairColor=');
    expect(url).toContain('facialHairType=');
    expect(url).toContain('clotheType=');
    expect(url).toContain('clotheColor=');
    expect(url).toContain('eyeType=');
    expect(url).toContain('eyebrowType=');
    expect(url).toContain('mouthType=');
    expect(url).toContain('skinColor=');
  });
});
