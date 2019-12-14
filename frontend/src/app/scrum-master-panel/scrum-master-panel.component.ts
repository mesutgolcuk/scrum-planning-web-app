import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScrumMasterPanelService } from './scrum-master-panel.service';

@Component({
  selector: 'app-scrum-master-panel',
  templateUrl: './scrum-master-panel.component.html',
  styleUrls: ['./scrum-master-panel.component.scss'],
  providers: [ScrumMasterPanelService],
  encapsulation: ViewEncapsulation.None
})
export class ScrumMasterPanelComponent implements OnInit {

  data;
  activeStory;
  storyPoint;

  constructor(private service: ScrumMasterPanelService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      (response) => {this.data = response; console.log(this.data)},
      (error) => console.log(error)
    )
  }

  submitStoryPoint() {
    this.activeStory.storyPoint = this.storyPoint;
    this.storyPoint = "";
  }

}
