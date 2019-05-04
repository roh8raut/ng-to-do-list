import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/Components/header/header.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { HomeComponent } from './Components/home/home.component';
import { FormComponent } from './Components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'to-do-list', component: ToDoListComponent},
      {path: 'form', component: FormComponent, data : {field : 'Rohit'}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
