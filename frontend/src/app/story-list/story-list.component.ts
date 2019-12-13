import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { StoryListService } from '../story-list.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoryListComponent implements OnInit {

  voterRegex: RegExp = /^[1-9][0-9]*$/;
  form;

  constructor(private formBuilder: FormBuilder,
              private service: StoryListService) {
    this.form = this.formBuilder.group({
      sessionName: ['', Validators.required],
      voterNum: ['', Validators.required],
      stories: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (this.form.dirty && this.form.valid) {
      console.log("Valid");
      //this.service.sendStories(formData);
      var storiesArr = formData.stories.split("\n");
      storiesArr.forEach(element => {
        console.log(element)
      });
    } else {
      console.log("INValid");
    }
  }

}
