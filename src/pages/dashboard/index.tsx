import { useSelector } from "react-redux";
import { Meta } from "../../layout/Meta";
import { Footer } from "../../templates/Footer";
import { AppConfig } from "../../utils/AppConfig";
import Login from "../../login";
import Link from "next/link";
import { Background } from "../../background/Background";
import { Section } from "../../layout/Section";
import { NavbarTwoColumns } from "../../navigation/NavbarTwoColumns";
import { Logo } from "../../templates/Logo";
import Wallet from "../../wallet/Wallet";
import Logout from "../../logout/Logout";

const Dashboard = () => {
  const userDetail = useSelector((state: any) => state.auth);
  let dashBoardUI = <></>;
  if (userDetail.isLogin) {
    dashBoardUI = <Wallet />
  } else {
    dashBoardUI = <Login />;
  }
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link href="/dashboard">
                <span>Dashboard</span>
              </Link>
            </li>
            {userDetail.isLogin && <li>
              <Logout />
            </li>}
          </NavbarTwoColumns>
        </Section>
        {dashBoardUI}
      </Background>
      <Footer />
    </div>
  )
};

export default Dashboard;
