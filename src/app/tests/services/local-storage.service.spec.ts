import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@app/services/local-storage.service';
import "@src/test-setup";

function storageMock() {
  let storage: any = {};

  return {
    setItem: function(key: any, value: any) {
      storage[key] = value || '';
    },
    getItem: function(key: string) {
      return key in storage ? storage[key] : null;
    },
    removeItem: function(key: string) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i: any) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let mockItem =  {
    name: 'Caneca de cerâmica rústica',
    description: "lorem lorem",
    image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    category: 'mugs'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set an item in the localStorage', () => {
    service.set("shoppingCart", mockItem);
    expect(service).toBeTruthy();
  });
});
