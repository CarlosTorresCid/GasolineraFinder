
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltersComponent } from './filters';  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('FiltersComponent', () => {  
  let component: FiltersComponent;  
  let fixture: ComponentFixture<FiltersComponent>;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, FiltersComponent]  
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersComponent);  
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
