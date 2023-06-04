import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@app/services/local-storage.service';
import "@src/test-setup";

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let mockItem =   {
    id: 1,
    name: 'Caneca de cerâmica rústica',
    description: "lorem lorem",
    image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    category: 'mugs'
  }

  let mockItems =  [
  {
    id: 1,
    name: 'Caneca de cerâmica rústica',
    description: "lorem lorem",
    image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    category: 'mugs'
  },
  {
    id: 2,
    name: 'Camiseta not today.',
    description: "lorem lorem",
    image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
    category: 't-shirts'
   },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    service.clearAll();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.items.length).toBe(0);
  });

  it('should set an item into localStorage', () => {
    jest.spyOn(service, 'set');
    service.set("shoppingCart", mockItem);
    expect(service.set).toHaveBeenCalledWith("shoppingCart", mockItem);
    expect(service.items.length).toBe(1);
  });

  it('should get and return two items from localStorage', () => {
    expect(service.items.length).toBe(0);

    jest.spyOn(service, 'set');
    let firstItem = mockItems[0];
    service.set("shoppingCart", firstItem);
    expect(service.set).toHaveBeenCalledWith("shoppingCart", firstItem);
    expect(service.items.length).toBeGreaterThanOrEqual(1);

    jest.spyOn(service, 'set');
    let secondtItem = mockItems[1];
    service.set("shoppingCart", secondtItem);
    expect(service.set).toHaveBeenCalledWith("shoppingCart", secondtItem);
    expect(service.items.length).toBeGreaterThan(1);

    jest.spyOn(service, 'get');
    service.get("shoppingCart");
    expect(service.get).toHaveBeenCalledWith("shoppingCart");
    expect(service.items.length).toEqual(2);
    expect(service.items[0]).toEqual(firstItem);
    expect(service.items[1]).toEqual(secondtItem);
    expect(service.items[2]).not.toBeDefined();
  });

  it('should delete an item from localStorage', () => {
    expect(service.items.length).toBe(0);

    jest.spyOn(service, 'set');
    service.set("shoppingCart", mockItem);
    expect(service.set).toHaveBeenCalledWith("shoppingCart", mockItem);
    expect(service.items.length).toBe(1);
    expect(service.items[0]).toHaveProperty("id");

    jest.spyOn(service, 'delete');
    service.delete("shoppingCart", mockItem);
    expect(service.delete).toHaveBeenCalledWith("shoppingCart", mockItem);

    jest.spyOn(service, 'get');
    service.get("shoppingCart");
    expect(service.get).toHaveBeenCalledWith("shoppingCart");
    expect(service.items.length).toBe(0);
  });

  it('should clear all items from localStorage', () => {
    jest.spyOn(service, 'clearAll');
    service.clearAll();
    expect(service.clearAll).toHaveBeenCalled();
  });

});
