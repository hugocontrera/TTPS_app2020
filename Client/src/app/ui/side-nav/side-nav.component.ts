import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListItem } from './model/listItem';
import adminData from 'src/assets/data/adminMenuItems.json';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();
  listItems: ListItem[];
  show: boolean[];

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    // this.listItems = this.sessionService.getMode() === 'employee' ? employeeData.menuItems : organizationData.menuItems;
    this.listItems = adminData.menuItems;
  }

  showElemento(item: ListItem) {
    item.show = !item.show;
  }

  toggleClick() {
    this.toggleMenu.emit();
  }

}
