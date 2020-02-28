import { AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent2 } from './app.component2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Gregor';

  selectedHero = "brak";

  dane = "brak";

  heroes: Object;
//  { id: 11, login: 'brak' },
//  { id: 12, login: 'ggNarco' }
//];

  @ViewChild(AppComponent2)
  private doc22: AppComponent2;

onSelect(hero): void {
  this.selectedHero = hero;
  this.title = hero;
  this.doc22.setUrl("https://szukaj.onet.pl/wyniki.html?qt=" + hero);
//  this.http.get('https://api.github.com/users/' + hero).subscribe(data => {
//    this.doc22.title = data.name;
//  });
}

ngAfterViewInit() {}

constructor(private http: HttpClient
){}


ngOnInit(): void {
  this.http.get('https://api.github.com/users').subscribe(data => {
    this.heroes = data;
  });
}

ola(): void { alert("event"); }


@HostListener("window:message", ['$event']) onTtt(event) {
  if (event.data.substr(0, 8) == "ksiview:")
    this.doc22.setUrl(
    "https://ksi-portal-xvp-int.127.0.0.1.nip.io/#!/application/KsiPortalAdmin/1.0/KsiPortalAdmin.About?params=JTdCJTdE&itemId=item-0&seq=0"
    //"https://szukaj.onet.pl/wyniki.html?qt=" + event.data.substr(8, 2000)
    );
  else if (event.data == "ggg")
    alert("ggg");
}

}
