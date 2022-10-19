import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UsersComponent } from './pages/users/users.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { AddCategoriesComponent } from './pages/categories/add-categories/add-categories.component';
import { EditCategoriesComponent } from './pages/categories/edit-categories/edit-categories.component';
<<<<<<< HEAD
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AddDepartmentComponent } from './pages/departments/add-department/add-department.component';
import { EditDepartmentComponent } from './pages/departments/edit-department/edit-department.component';
import { AbsencesComponent } from './pages/absences/absences.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { AddAbsenceComponent } from './pages/absences/add-absence/add-absence.component';
=======
import { ListProductComponent } from './pages/products/list-product/list-product.component';
>>>>>>> master


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
     
>>>>>>> master
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UsersComponent,
    AddProductComponent,
    EditProductComponent,
    ListCategoriesComponent,
    AddCategoriesComponent,
    EditCategoriesComponent,
<<<<<<< HEAD
    DepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    AbsencesComponent,
    AddUserComponent,
    EditUserComponent,
    AddAbsenceComponent,
=======
    ListProductComponent
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
