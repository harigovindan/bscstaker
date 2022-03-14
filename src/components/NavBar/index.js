import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from "./NavbarElements";
import { Button1 } from "../ButtonElement";
// import Onboard from "bnc-onboard";
// import Web3 from "web3";
const NavBar = () => {
  // let web3;
  // const onboard = Onboard({
  //   dappId: "a617229d-becc-4b16-ae9d-e6483f8362fe",
  //   networkId: 4,
  //   subscriptions: {
  //     wallet: (wallet) => {
  //       web3 = new Web3(wallet.provider);
  //       console.log(`${wallet.name} is now connected`);
  //     }
  //   }
  // });
  // async function login() {
  //   await onboard.walletSelect();
  // }
  return (
    <>
      <Nav>
        <Logo>BSCStaker</Logo>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Audit
          </NavLink>
          <NavLink to="/services" activeStyle>
            Telegram
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Documentation
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Contract
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to="/signin">Sign In</NavBtnLink> */}
          <Button1 primary="true" dark="true" className>
            Connect
          </Button1>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
