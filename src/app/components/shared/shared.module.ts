import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AllPostsComponent } from '../all-posts/all-posts.component';
import { ChooseCategoryComponent } from '../choose-category/choose-category.component';
import { JoinOurTeamComponent } from '../join-our-team/join-our-team.component';
import { ListAuthorsComponent } from '../list-authors/list-authors.component';
import { ReadNextComponent } from '../read-next/read-next.component';
import { RouterModule } from '@angular/router';
import { HomeAllPostsComponent } from '../home-all-posts/home-all-posts.component';
import { ChildCategoryComponent } from '../child-category/child-category.component';
import { FeaturedComponent } from '../featured/featured.component';
import { CategoryallpostsComponent } from '../categoryallposts/categoryallposts.component';
import { BlogPostPostsComponent } from '../blog-post-posts/blog-post-posts.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ChooseCategoryComponent,
    ListAuthorsComponent,
    JoinOurTeamComponent,
    AllPostsComponent,
    ReadNextComponent,
    HomeAllPostsComponent,
    ChildCategoryComponent,
    FeaturedComponent,
    CategoryallpostsComponent,
    BlogPostPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ChooseCategoryComponent,
    ListAuthorsComponent,
    JoinOurTeamComponent,
    AllPostsComponent,
    ReadNextComponent,
    HomeAllPostsComponent,
    ChildCategoryComponent,
    FeaturedComponent,
    CategoryallpostsComponent,
    BlogPostPostsComponent
  ]
})
export class SharedModule { }
