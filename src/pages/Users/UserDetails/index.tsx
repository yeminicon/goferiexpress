import UserDetailsTabs from "@/components/UserDetails/userDetailsTabs";
import UserDetailsHeroCard from "@/components/userDetailsHeroCard";
import { SidebarRoutes } from "@/types/routes";

function UserDetailsPage(): JSX.Element {
  return (
    <div className="flex flex-col space-y-6">
      <UserDetailsHeroCard isVIP backRoute={SidebarRoutes.users} userId="Id347829YEOS" />
      <div className="lg:px-10">
        <UserDetailsTabs />
      </div>
    </div>
  );
}

export default UserDetailsPage;
