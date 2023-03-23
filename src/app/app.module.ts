import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CommentDrawerComponent } from './components/comment-drawer/comment-drawer.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { PageComponent } from './components/page/page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageContentComponent } from './components/page-content/page-content.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ButtonComponent,
    CommentDrawerComponent,
    DrawerComponent,
    ListItemComponent,
    DropdownComponent,
    PageComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageContentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
