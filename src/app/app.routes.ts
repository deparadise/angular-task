import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "@core/layout/page-not-found";
import { HomePageComponent } from "@features/home-page";
import { UserProfileListComponent } from "@features/user-profile-list/user-profile-list.component";
import { ProfileDetailComponent } from "@features/profile/profile-detail";

export const appRoutes: Routes = [
    {
        component: UserProfileListComponent,
        data: { name: "profileList" },
        path: "user/profiles",
    },
    {
        component: ProfileDetailComponent,
        data: { name: "profileDetail" }, // todo << where is this tield to?
        path: "profile",
    },
    {
        component: PageNotFoundComponent,
        data: { name: "pageNotFound" },
        path: "404",
    },
    {
        component: HomePageComponent,
        data: { name: "homePage" },
        path: "",
    },
    {
        data: { name: "pageNotFound" },
        path: "**",
        redirectTo: "/404",
    },
];
