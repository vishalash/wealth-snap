import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';

const Hero = () => {
  const userDetail = useSelector((state: any) => state.auth);
  const features:any = ["Modern", "Fastest", "Personalized", "Easiest"];
  const [newName, setnewName] = useState("Modern");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * features.length);
    setnewName(features[index]);
}, []);
useEffect(() => {
  const intervalID = setInterval(shuffle, 5000);
  return () => clearInterval(intervalID);
}, [shuffle])
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/login">
              <span>Dashboard</span>
            </Link>
          </li>
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
            <Link href="/login">
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
