import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@app/components/header/header.component';
import { HeaderModule } from '@src/app/components/header/header.module';
import { LocalStorageService } from '@src/app/services/local-storage.service';
import "@src/test-setup";

const LocalStorageServiceMock = {
  set: jest.fn(),
  get: jest.fn(),
  delete: jest.fn(),
  clearAll: jest.fn()
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockItem =  {
    id: 1,
    name: 'Caneca de cerâmica rústica',
    description: "lorem lorem",
    image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    category: 'mugs'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule.withRoutes([]), HeaderModule],
      providers: [{ provide: LocalStorageService, value: LocalStorageServiceMock }]
    }).compileComponents();
    jest.useFakeTimers();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit() method and return no items from localStorage', () => {
    jest.spyOn(component, 'ngOnInit');
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    jest.useRealTimers();
    expect(component.shoppingCartItemsCount).toBe(0);
    expect(component.selectedItems.length).toBe(0);
  });

  it('should call ngOnInit() method and return 1 item from localStorage', () => {
    let localStorageService = TestBed.inject(LocalStorageService);
    jest.spyOn(localStorageService, 'set');
    localStorageService.set("shoppingCart", mockItem);
    jest.spyOn(component, 'ngOnInit');
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    jest.useRealTimers();
    expect(component.shoppingCartItemsCount).toEqual(1);
    expect(component.selectedItems.length).toBeGreaterThan(0);
    expect(localStorageService.set).toHaveBeenCalledWith("shoppingCart", mockItem);
    expect(component.selectedItems[0]).toEqual(mockItem);
    expect(component.selectedItems[0].category).toEqual("mugs");
  });

  it('should call ngOnDestroy() method', () => {
    jest.spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy()
    expect(component.ngOnDestroy).toHaveBeenCalled();
  });
});
