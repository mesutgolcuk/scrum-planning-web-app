import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StoryListService } from './story-list.service';


@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
  providers: [StoryListService],
  encapsulation: ViewEncapsulation.None
})
export class StoryListComponent implements OnInit {

  voterRegex: RegExp = /^[1-9][0-9]*$/;
  form;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
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
      this.service.sendStories(formData).subscribe(
        (response) => this.router.navigateByUrl('/scrum-master'),
        (error) => console.log(error)
      );
    } else {
      console.log("INValid");
    }
  }

}
