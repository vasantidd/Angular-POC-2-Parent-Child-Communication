import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@Component({
  selector: "app-child",
  template: `
    <div class="container">
      <h2>Add Well Form</h2>
      <input
        #childWelcomeMsg
        placeholder="Source Key"
        value="Hi User (From Child Component)"
        disabled
      />
      <form [formGroup]="wellChildForm" (ngSubmit)="addNewItem()">
        <label>
          Name:
          <input type="text" formControlName="nameVal" class="form-control" />
        </label>
        <label>
          Type:
          <input type="text" formControlName="typeVal" class="form-control" />
        </label>
        <label>
          SourceKey:
          <input
            type="text"
            formControlName="sourceKeyVal"
            class="form-control"
          />
        </label>

        <input type="submit" value="submit" class="btn btn-success " />
      </form>
    </div>
  `,
  styleUrls: ["./wellchild.component.css"]
})
export class WellchildComponent {
  @ViewChild("childWelcomeMsg") childWelInput: ElementRef; //To get the child component refrence

  @Output() newItemEvent = new EventEmitter();
  //Declaration of variables and object
  wellChildForm: FormGroup;
  sourceKeyVal: number;
  typeVal: string;
  nameVal: string;
  isEditing: boolean = true;

  //getting value from parent to child
  @Input() set userInfo(value: any) {
    if (value != null) {
      this.wellChildForm.setValue(value);
      this.toggleDisable(false);
    }
  }

  //function called to disabled the textboc for the sourceKeyInput
  toggleDisable(value: boolean) {
    this.wellChildForm
      .get("sourceKeyVal")
      [!this.isEditing ? "enable" : "disable"]();
    this.isEditing = value;
  }

  constructor(private fb: FormBuilder) {
    this.wellChildForm = new FormGroup({
      nameVal: new FormControl(),
      typeVal: new FormControl(),
      sourceKeyVal: new FormControl()
    });
  }

  addNewItem() {
    this.newItemEvent.emit(this.wellChildForm.value);
    this.wellChildForm.reset();
  }
}
