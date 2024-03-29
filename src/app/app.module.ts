import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { RecursionComponent } from './recursion/recursion.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// import { DropdownItemComponent } from './dropdown-item/dropdown-item.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    RecursionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbDropdownModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
