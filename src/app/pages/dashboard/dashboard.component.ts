import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  file: any;
  summary: any;

  SERVER_URL = "http://localhost:8080/videos";
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      file: [''],
      name: [''],
      summary: ['']
    });
  }

  onSubmit() {

    console.log(this.file);

    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);
    formData.append('name', this.uploadForm.get('name').value);
    formData.append('summary', this.uploadForm.get('summary').value);

    this.http.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

    var body = {name: this.file.name, summary: this.summary};
    this.http.post('http://localhost:8080/videos', body, {observe: 'response'}).subscribe(res => {

      var fd = new FormData();

      fd.append('file', this.file);

      return this.http.put(res.headers.get('Location'), fd);
    }, err => {
      console.log(err);
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

}
