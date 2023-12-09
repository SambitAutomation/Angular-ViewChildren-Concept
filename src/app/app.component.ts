import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';

  FullName: string;
  @ViewChildren('inputEl') inputElement: QueryList<ElementRef>;

  showName(){
    let name = '';
    this.inputElement.forEach((el) =>
    {
      name += el.nativeElement.value + ' ';
    })

    this.FullName = name.trim();
  }

}
