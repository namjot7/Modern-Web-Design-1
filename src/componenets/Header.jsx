import { navigation } from "../constants"
import { useLocation } from "react-router-dom"
import Button from "./Button";
import { HamburgerMenu, SideLines } from "./design/Header"
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";

const Header = () => {
  const currentPath = useLocation();
  // console.log(currentPath);
  const [showNav, setshowNav] = useState(false);
  return (
      <div className={`fixed top-0 left-0 right-0 w-full  
        backdrop-blur-sm border-b border-n-6 py-4 ${showNav ? "bg-n-8" : "bg-n-7 backdrop-blur-sm"}`}>

        <div className="flex justify-between px-10 items-center gap-10">
          {/* Brainwave logo */}
          <a className="block w-[10rem]" href="#hero">
            <img src="src/assets/brainwave.svg" width={200} alt="" />
          </a>

          {/* Main navigation */}
          <nav className={`${showNav ? 'flex' : 'hidden'} md:flex h-[90vh] fixed left-0 right-0 top-[5rem] py-10 md:py-0 transition-all
                   flex-col justify-center items-center 
                   md:static md:h-auto md:flex-row gap-9 font-code bg-n-7  backdrop-blur-sm`}>
            {navigation.map(item => (
              <a key={item.id} href={item.url}
                onClick={e => setshowNav(false)}
                className={`uppercase font-bold transition-colors hover:text-color-1 
                      text-xl md:text-sm 
                      ${item.onlyMobile ? 'md:hidden' : 'block'}
                      ${currentPath.hash === item.url ? 'text-n-1' : 'text-n-4'}
                      md:leading-5`}>
                {item.title}
              </a>
            ))}
          </nav>

          {/* Login and Sign up buttons */}
          <div className="hidden lg:block">
            <a href="#signup"
              className="font-code font-bold md:text-sm text-n-4 uppercase 
            hover:text-color-1 transition-colors m-8">
              New Account
            </a>
            <Button>sign in</Button>
          </div>

          {/* Hamburger button */}
          <Button onClick={e => setshowNav(!showNav)}
            className='block md:hidden'>
            <MenuSvg showNav={showNav} />
          </Button>
        </div>
        {/* Design (Lines, Circles, rings) */}
        <HamburgerMenu />
      </div>
  )
}

export default Header