import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-widok2',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent2 implements OnInit {
  title = 'gregor 2';

  @Input()
  url: string = "./test.html";
  urlSafe: SafeResourceUrl;
  
constructor(public http: HttpClient, public sanitizer: DomSanitizer, private el: ElementRef){
}


@Input() todo;

toggleTodo(todo) {
    this.el.nativeElement
      .dispatchEvent(new CustomEvent('toggle-todo', {
        detail: todo,
        bubbles: true
      }));
}



public setUrl(uuu: string) {
	this.url = uuu;
	this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
	this.toggleTodo(this.todo);
}

ngOnInit(): void {
	this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl("");
}

}
