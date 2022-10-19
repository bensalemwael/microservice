import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
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

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'absences',       component: AbsencesComponent },
    { path: 'add_absence',    component: AddAbsenceComponent },
    { path: 'departments',    component: DepartmentsComponent },
    { path: 'add_department', component: AddDepartmentComponent },
    { path: 'edit_department/:department_id', component: EditDepartmentComponent },
    { path: 'products',       component: ProductsComponent },
    { path: 'add_product',    component: AddProductComponent },
    { path: 'edit_product',   component: EditProductComponent },
    { path: 'categories',     component: ListCategoriesComponent },
    { path: 'edit_category',  component: EditCategoriesComponent },
    { path: 'add_category',   component: AddCategoriesComponent },

];
