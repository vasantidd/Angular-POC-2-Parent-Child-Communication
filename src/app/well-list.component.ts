import value from "*.json";
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Renderer2
} from "@angular/core";
import { WellchildComponent } from "./child/wellchild.component";

@Component({
  selector: "my-app",
  templateUrl: "./well-list.component.html",
  styleUrls: ["./well-list.component.css"]
})
export class WelllistComponent implements AfterViewInit {
  @ViewChild(WellchildComponent) child;
  @ViewChild("welcomenameuser") welname: ElementRef<HTMLInputElement>;
  //Declaration of varaibles
  nameVal: string;
  typeVal: string;
  sourceKeyVal: number;
  userInfo: any = null;
  welldatalists: any = []; //create the arraylist

  constructor(private renderer: Renderer2) {
    //static array list data assigning the name and type etc
    this.welldatalists = [
      {
        nameVal: "TestRLSWell01",
        typeVal: "rls",
        sourceKeyVal: "10110000"
      },
      {
        nameVal: "TestRLSWell01",
        typeVal: "rls",
        sourceKeyVal: "10110000"
      },
      {
        nameVal: "NewWellRLS01",
        typeVal: "esp",
        sourceKeyVal: "1090000"
      },
      {
        nameVal: "TestRLSWell01",
        typeVal: "rls",
        sourceKeyVal: "10110000"
      },
      {
        nameVal: "NewWellRLS01",
        typeVal: "esp",
        sourceKeyVal: "123444"
      }
    ];
  }

  //called the function once viewintilized
  ngAfterViewInit(): void {
    this.welname.nativeElement.innerHTML = this.child.childWelInput.nativeElement.value;
  }

  ngOnInit() {
    console.log(this.welname);
  }
  //on row Clicked event from parent component
  rowClickedEvent(indexVal) {
    this.userInfo = this.welldatalists[indexVal];
  }

  //Function for parent and child communication which helps to add new row
  addItem(newItem: any) {
    this.welldatalists.push(newItem);
    // console.log(JSON.stringify(this.welldatalists));
  }
}
