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
import { DepartmentsComponent } from './pages/departments/departments.component';
import { AddDepartmentComponent } from './pages/departments/add-department/add-department.component';
import { EditDepartmentComponent } from './pages/departments/edit-department/edit-department.component';
import { AbsencesComponent } from './pages/absences/absences.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { AddAbsenceComponent } from './pages/absences/add-absence/add-absence.component';
import { ListProductComponent } from './pages/products/list-product/list-product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EventsComponent } from './pages/events/events.component';
import { AddEventComponent } from './pages/events/add-event/add-event.component';
import { EditEventComponent } from './pages/events/edit-event/edit-event.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { AddPartnerComponent } from './pages/partners/add-partner/add-partner.component';
import { EditPartnerComponent } from './pages/partners/edit-partner/edit-partner.component';
import { VendorsComponent } from './pages/vendors/vendors.component';
import { AddVendorComponent } from './pages/vendors/add-vendor/add-vendor.component';
import { EditVendorComponent } from './pages/vendors/edit-vendor/edit-vendor.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { AddMaterialComponent } from './pages/materials/add-material/add-material.component';
import { EditMaterialComponent } from './pages/materials/edit-material/edit-material.component';
import { CarsComponent } from './pages/cars/cars.component';
import { AddCarComponent } from './pages/cars/add-car/add-car.component';
import { EditCarComponent } from './pages/cars/edit-car/edit-car.component';
import { InsurencesComponent } from './pages/insurences/insurences.component';
import { AddInsuranceComponent } from './pages/insurences/add-insurance/add-insurance.component';
import { EditInsuranceComponent } from './pages/insurences/edit-insurance/edit-insurance.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
     
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
    DepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    AbsencesComponent,
    AddUserComponent,
    EditUserComponent,
    AddAbsenceComponent,
    ListProductComponent,
    EventsComponent,
    AddEventComponent,
    EditEventComponent,
    PartnersComponent,
    AddPartnerComponent,
    EditPartnerComponent,
    VendorsComponent,
    AddVendorComponent,
    EditVendorComponent,
    MaterialsComponent,
    AddMaterialComponent,
    EditMaterialComponent,
    CarsComponent,
    AddCarComponent,
    EditCarComponent,
    InsurencesComponent,
    AddInsuranceComponent,
    EditInsuranceComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
