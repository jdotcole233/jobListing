import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineRight } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import './nav.css'

const Nav = () => {
    return (
      <>
        <div className="navContent">
          <div>
            <GiHamburgerMenu />
            Menu
            <AiOutlineRight />
          </div>
          <div>City of Raleigh Jobs</div>
          <div>
            <GrLogout />
            sign in
          </div>
        </div>
      </>
    );
}

export default Nav;