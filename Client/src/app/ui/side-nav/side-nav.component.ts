import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ListItem } from './model/listItem';
import guardiaData from 'src/assets/data/guardiaMenuItems.json';
import organizationData from 'src/assets/data/organizationMenuItems.json';
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
    this.listItems = this.sessionService.getMode() === 'guardia' ? guardiaData.menuItems : organizationData.menuItems;
  }

  showElemento(item: ListItem) {
    item.show = !item.show;
  }

  toggleClick() {
    this.toggleMenu.emit();
  }

}
