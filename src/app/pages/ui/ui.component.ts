import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  // Checkboxes
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  // Form Fields
  options: FormGroup;

  constructor(fb: FormBuilder) {

    // Form Fields
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
