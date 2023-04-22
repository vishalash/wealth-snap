import Link from "next/link"
import { useDispatch } from "react-redux";
import { logout } from "../store/authReducer";
import { removeAllWallet } from "../store/walletReducer";
import LogoutConfirm from "./LogoutConfirm";
import { useState } from "react";

const Logout: React.FC = () => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    setShowLogoutConfirm(true);
  }
  const confirmClosed = (isLogout: boolean) => {
    if (isLogout) {
      dispatch(logout());
      dispatch(removeAllWallet());  
    } else {
      setShowLogoutConfirm(false);
    }
  }
  return (
    <>
      {showLogoutConfirm && <LogoutConfirm onClose={confirmClosed} />}
      <Link href={''}>
        <span onClick={onLogoutHandler}>Logout</span>
      </Link>
    </>
  )
}

export default Logout;