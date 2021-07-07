import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { map } from 'lodash';

@Component({
  selector: 'demo-inline-check',
  template: `
    <label id="example-radio-group-label-3" class="d--block">
      Pick your favorite fruit
    </label>
    <div class="row">
      <ng-container *ngFor="let category of categories">
        <fds-checkbox
          styleClass='ml--3 mr--2'
          [label]="category"
          value="category"
          [value]="category"
          [(ngModel)]="selectedCategories2"
          [inputId]="category"
        ></fds-checkbox>
      </ng-container>
    </div>
    <pre> favoriteFruitValue: {{ selectedCategories2 | json }}<pre></pre></pre>
  `,
  styles: []
})
export class InlineCheckboxComponent implements OnInit {
  binary = true;
  user = {
    juices: [
      { name: 'Mango', selected: true, id: 1 },
      { name: 'Peach', selected: true, id: 2 },
      { name: 'PineApple', selected: true, id: 3 }
    ]
  };

  categories: any[] = ['Mango', 'Peach', 'PineApple'];
  selectedCategories: any[] = [];
  selectedCategories2: any[] = [];
  checkedJuices = [];
  values = [];

  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      juices: this.buildJuices()
    });
  }

  ngOnInit() {
    this.checkedJuices = this.user.juices.filter(
      item => item.selected === true
    );
    this.values = this.checkedJuices.map((elem: any) => elem.name);
    // this.values = this.checkedJuices.map(function (elem) {
    //   return elem.name;
    // });
    this.selectedCategories = ['Mango'];
    this.selectedCategories2 = ['Mango'];
  }


  buildJuices() {
    const arr = this.user.juices.map(juice => {
      return this.fb.control({ value: juice.selected, disabled: true });
    });
    return this.fb.array(arr);
  }

  get juices() {
    return this.form.get('juices');
  }

  onCheckboxChange(event) {
    this.checkedJuices = [];
    map(this.form.value.juices, (value, index: number) => {
      if (value) {
        this.checkedJuices.push(
          this.user.juices.find(item => item.id === index + 1)
        );
      }
    });
    this.values = this.checkedJuices.map(function (elem) {
      return elem.name;
    });
  }
}
