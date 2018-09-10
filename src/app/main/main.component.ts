import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  config: any;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getConfig();
  }

  getConfig(): void {
    this.configService.getConfig()
    .subscribe(config => {
      config.building.forEach(b => b.minLevel = b.level);
      this.config = config;
    });
  }

  changeLevel(id: number, level: number, e: any): void {
    let l = e.target.checked ? level : level - 1;
    this.config.building.find(b => b.id == id).level = l;
  }

  vote() {
    console.log('vote');
  }

}
