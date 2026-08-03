import { AccountWrapper, Content } from "./AccountPage.styled";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { MobileAccountMenu } from "../../components/MobileAccountMenu/MobileAccountMenu";

export const AccountPage = () => {
      const isMobile = useMediaQuery({
    maxWidth: 767,
  });
  return (
    <AccountWrapper className="container">
      {/* <AccountSidebar /> */}
      {isMobile ? (
  <MobileAccountMenu />
) : (
  <AccountSidebar />
)}

       <Content>
        <Outlet />
      </Content>
    </AccountWrapper>
  );
};