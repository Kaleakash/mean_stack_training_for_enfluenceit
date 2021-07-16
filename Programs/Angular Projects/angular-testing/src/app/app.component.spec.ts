import { TestBed } from '@angular/core/testing';
import { async } from 'rxjs';
import { AppComponent } from './app.component';
import { CustomService } from './custom.service';

describe('AppComponent', () => {
  let mySer:CustomService;      // only reference type ready 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    mySer=TestBed.inject(CustomService);    // DI for Service

  });

  it("calling service function ",()=> {
    expect(mySer.displayServiceMsg()).toEqual("Welcome to My Service class");
  })

  it('should create the app', () => {
    //let obj = new AppComponent();
    const fixture = TestBed.createComponent(AppComponent);  // loaded..
    const app = fixture.componentInstance;  // instance created of component
    expect(app).toBeTruthy();     // reference created successfully..
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
    expect(app.name).toEqual("Ravi Kumar");
    expect(app.stdNames.length).toEqual(4);
    expect(app.sayHello()).toEqual("welcome");
    expect(app.age).toEqual(21);
    app.changeAge();
    expect(app.age).toEqual(34);
  });

  it("asyn function testing",async ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app =  fixture.componentInstance;
    let result = await app.dis();
    expect(result).toEqual("Welcome");
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
            //compiled.querySelector("classselector, id selector")
    expect(compiled.querySelector('#p1').textContent).toContain('Welcome to Angular');
    expect(compiled.querySelector("#p1").textContent).toEqual("Welcome to Angular Testing");
    expect(compiled.querySelector("span").textContent).toEqual("Ravi Kumar");
  });
});



