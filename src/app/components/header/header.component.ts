import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'angular-crash';
  showAddTask: boolean= true
  subscription: Subscription

  constructor(private uiServices: UiService) { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiServices.toggleAddTask()
  }

}
