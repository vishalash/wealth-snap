import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from '../store/authReducer';

const Hero = (props:any) => {
  const userDetail = useSelector((state: any) => state.auth);
  const features: any = ["Modern", "Fastest", "Personalized"];
  const [newName, setnewName] = useState("Modern");
  // const shuffle = useCallback(() => {
  //   const index = Math.floor(Math.random() * features.length);
  //   setnewName(features[index]);
  // }, []);
  // useEffect(() => {
  //   const intervalID = setInterval(shuffle, 5000);
  //   return () => clearInterval(intervalID);
  // }, [shuffle]);
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logout());
  }
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
            <Link href={''}>
              <span onClick={onLogoutHandler}>Logout</span>
            </Link>
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
          description="The easiest way to keep track of your net worth"
          button={
            <Link href="/dashboard">
              <span>
                <Button xl>Click here to start</Button>
              </span>
            </Link>
          }
        />
      </Section>
    </Background>
  )
};

export { Hero };
