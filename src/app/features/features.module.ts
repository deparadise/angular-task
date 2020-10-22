import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';

@NgModule({
    declarations: [
        HomePageComponent,
        UserProfileListComponent
    ],
    entryComponents: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        LayoutModule,
        ProfileModule
    ]
})
export class FeaturesModule { }
