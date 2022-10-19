import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { ProductsComponent } from 'src/app/pages/products/list-products/products.component';
import { AddProductComponent } from 'src/app/pages/products/add-product/add-product.component';
import { EditProductComponent } from 'src/app/pages/products/edit-product/edit-product.component';
import { ListCategoriesComponent } from 'src/app/pages/categories/list-categories/list-categories.component';
import { EditCategoriesComponent } from 'src/app/pages/categories/edit-categories/edit-categories.component';
import { AddCategoriesComponent } from 'src/app/pages/categories/add-categories/add-categories.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'products',       component: ProductsComponent },
    { path: 'add_product',    component: AddProductComponent },
    { path: 'edit_product',   component: EditProductComponent },
    { path: 'categories',     component: ListCategoriesComponent },
    { path: 'edit_category/:id',  component: EditCategoriesComponent },
    { path: 'add_category',   component: AddCategoriesComponent },
    

];
