import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import employeeData from 'src/assets/data/employeeMenuItems.json';
import organizationData from 'src/assets/data/organizationMenuItems.json';
import { ListItem } from '../side-nav/model/listItem';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-side-nav-icons',
  templateUrl: './side-nav-icons.component.html',
  styleUrls: ['./side-nav-icons.component.css']
})
export class SideNavIconsComponent implements OnInit {
  listItems: ListItem[];
  show: boolean[];
  @Output() toggleMenu = new EventEmitter();

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.listItems = this.sessionService.getMode() === 'employee' ? employeeData.menuItems : organizationData.menuItems;
  }

  toggleClick() {
    this.toggleMenu.emit();
  }

  showElemento(item: ListItem) {
    item.show = !item.show;
  }

}
