import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DashbordModule } from './dashbord/dashbord.module';
import { CustomersModule } from './customers/customers.module';




@NgModule({
  declarations: [      
  ],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    DashbordModule,
    CustomersModule

  ]
})
export class ComponentsModule { }
