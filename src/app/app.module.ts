import { Directive, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WelllistComponent } from "./well-list.component";
import { HelloComponent } from "./hello.component";
import { WellchildComponent } from "./child/wellchild.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [WelllistComponent, HelloComponent, WellchildComponent],
  bootstrap: [WelllistComponent]
})
export class AppModule {}
