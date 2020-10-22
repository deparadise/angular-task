import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { UserProfileListComponent } from './user-profile-list/user-profile-list.component';
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';

@NgModule({
    declarations: [
        HomePageComponent,
        UserProfileListComponent,
        UserProfileDetailsComponent
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
