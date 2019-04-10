import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { NavService } from '../../../commons/services/utils/nav.service';
import { FeedService } from '../../../commons/services/utils/feed.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private nav      : NavService,
    private feed     : FeedService,
    private ngbmodal : NgbModal
  ) {
    // nav configuration
    // TODO: this sucks!. find a better solution
    this.nav.setNav('Dashboard');
  }

  ngOnInit() {
    this.feed.getFeed();
  }

}
