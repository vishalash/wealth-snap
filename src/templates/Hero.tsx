import Link from 'next/link';

import { Background } from '../background/Background';
import { StyleButton } from '../button/StyleButton';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Logout from '../logout/Logout';

const Hero = () => {
  const userDetail = useSelector((state: any) => state.auth);
  // const features: any = ["Modern", "Fastest", "Personalized"];
  const newName = useState("Minimal")[0];
  // const shuffle = useCallback(() => {
  //   const index = Math.floor(Math.random() * features.length);
  //   setnewName(features[index]);
  // }, []);
  // useEffect(() => {
  //   const intervalID = setInterval(shuffle, 5000);
  //   return () => clearInterval(intervalID);
  // }, [shuffle]);
  return (
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

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {newName + ' personal finance app for\n'}
              <span className="text-primary-500">{userDetail.isLogin ? userDetail.userInfo.name : 'You'}!</span>
            </>
          }
          description="The easiest way to keep track of your net worth for free"
          button={
            <Link href="/dashboard">
              <span>
                <StyleButton>Click here to start</StyleButton>
              </span>
            </Link>
          }
        />
      </Section>
    </Background>
  )
};

export { Hero };
