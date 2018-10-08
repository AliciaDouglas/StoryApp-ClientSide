import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { NavbarUserComponent } from './navbars/navbar-user/navbar-user.component';
import { NavbarComponent } from './navbars/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Material } from './material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeScreenComponent,
    NavbarUserComponent,
    NavbarComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
