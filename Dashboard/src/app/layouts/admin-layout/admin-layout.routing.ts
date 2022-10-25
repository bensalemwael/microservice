import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { AddProductComponent } from 'src/app/pages/products/add-product/add-product.component';
import { EditProductComponent } from 'src/app/pages/products/edit-product/edit-product.component';
import { ListCategoriesComponent } from 'src/app/pages/categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from 'src/app/pages/categories/edit-categories/edit-categories.component';
import { AddCategoriesComponent } from 'src/app/pages/categories/add-categories/add-categories.component';
import { DepartmentsComponent } from 'src/app/pages/departments/departments.component';
import { AddDepartmentComponent } from 'src/app/pages/departments/add-department/add-department.component';
import { EditDepartmentComponent } from 'src/app/pages/departments/edit-department/edit-department.component';
import { AbsencesComponent } from 'src/app/pages/absences/absences.component';
import { AddAbsenceComponent } from 'src/app/pages/absences/add-absence/add-absence.component';
import { ListProductComponent } from 'src/app/pages/products/list-product/list-product.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { AddEventComponent } from 'src/app/pages/events/add-event/add-event.component';
import { EditEventComponent } from 'src/app/pages/events/edit-event/edit-event.component';
import { PartnersComponent } from 'src/app/pages/partners/partners.component';
import { AddPartnerComponent } from 'src/app/pages/partners/add-partner/add-partner.component';
import { EditPartnerComponent } from 'src/app/pages/partners/edit-partner/edit-partner.component';
import { AddUserComponent } from 'src/app/pages/users/add-user/add-user.component';
import { VendorsComponent } from 'src/app/pages/vendors/vendors.component';
import { AddVendorComponent } from 'src/app/pages/vendors/add-vendor/add-vendor.component';
import { EditVendorComponent } from 'src/app/pages/vendors/edit-vendor/edit-vendor.component';
import { MaterialsComponent } from 'src/app/pages/materials/materials.component';
import { AddMaterialComponent } from 'src/app/pages/materials/add-material/add-material.component';
import { EditMaterialComponent } from 'src/app/pages/materials/edit-material/edit-material.component';
import { CarsComponent } from 'src/app/pages/cars/cars.component';
import { AddCarComponent } from 'src/app/pages/cars/add-car/add-car.component';
import { EditCarComponent } from 'src/app/pages/cars/edit-car/edit-car.component';
import { InsurencesComponent } from 'src/app/pages/insurences/insurences.component';
import { AddInsuranceComponent } from 'src/app/pages/insurences/add-insurance/add-insurance.component';
import { EditInsuranceComponent } from 'src/app/pages/insurences/edit-insurance/edit-insurance.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'add_user',          component: AddUserComponent },

    { path: 'absences',       component: AbsencesComponent },
    { path: 'add_absence',    component: AddAbsenceComponent },
    { path: 'departments',    component: DepartmentsComponent },
    { path: 'add_department', component: AddDepartmentComponent },
    { path: 'edit_department/:department_id', component: EditDepartmentComponent },

    { path: 'events',    component: EventsComponent },
    { path: 'add_event',    component: AddEventComponent },
    { path: 'edit_event/:event_id',    component: EditEventComponent },

    { path: 'partners',    component: PartnersComponent },
    { path: 'add_partner',    component: AddPartnerComponent },
    { path: 'edit_partner/:partner_id',    component: EditPartnerComponent },

    { path: 'add_product',    component: AddProductComponent },
    { path: 'edit_product/:id',   component: EditProductComponent },
    { path: 'categories',     component: ListCategoriesComponent },
    { path: 'edit_category/:id',  component: EditCategoriesComponent },
    { path: 'add_category',   component: AddCategoriesComponent },
    { path: 'products',       component: ListProductComponent },

    { path: 'vendors',    component: VendorsComponent },
    { path: 'add_vendor',    component: AddVendorComponent },
    { path: 'edit_vendor/:id',    component: EditVendorComponent },

    { path: 'materials',    component: MaterialsComponent },
    { path: 'add_material',    component: AddMaterialComponent },
    { path: 'edit_material/:id',    component: EditMaterialComponent },

    { path: 'cars',    component: CarsComponent },
    { path: 'add_car',    component: AddCarComponent },
    { path: 'edit_car/:id',    component: EditCarComponent },

    { path: 'insurances',    component: InsurencesComponent },
    { path: 'add_insurance',    component: AddInsuranceComponent },
    { path: 'edit_insurance/:id',    component: EditInsuranceComponent },


];
