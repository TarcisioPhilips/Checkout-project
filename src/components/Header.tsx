import Image from "next/image";
import { useContext, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";

import logoImg from "../assets/logo.svg";
import { PurchaseContext } from "../providers/Purchase";
import { Header as HeaderContainer } from "../styles/pages/app";
import { Nav } from "./Nav";

export const Header = () => {
  const { cart } = useContext(PurchaseContext);

  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    setShowNav(false);
  };

  const handleOpenNav = () => {
    setShowNav(true);
  };

  return (
    <HeaderContainer>
      <Image src={logoImg} alt='Logo' />
      <button onClick={handleOpenNav}>
        <BsFillBagFill />
        {cart.length > 0 && <span>{cart.length}</span>}
      </button>

      <Nav show={showNav} closeNav={closeNav} />
    </HeaderContainer>
  );
};
