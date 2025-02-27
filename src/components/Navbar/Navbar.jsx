import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import coin from "../../assets/coin.png";

const Navbar = ({ coins }) => {
  return (
    <nav className="container mx-auto w-full px-4 md:px-8 sticky top-0 bg-white z-10 shadow-md">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-between items-center gap-4 py-4">


        <div className="flex justify-center sm:justify-start">
          <img src={logo} alt="Logo" className="h-10 md:h-12" />
        </div>


        <ul className="grid grid-cols-2 sm:flex sm:justify-center gap-4 md:gap-10 text-[#5a5a5a] font-semibold text-center">
          <li><a href="#" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">Fixture</a></li>
          <li><a href="#" className="hover:text-black">Teams</a></li>
          <li><a href="#" className="hover:text-black">Schedules</a></li>
        </ul>

        <div className="flex justify-center sm:justify-end items-center gap-2 border rounded-xl px-4 py-2 font-semibold text-black">
          <h2>{coins.toLocaleString()} Coin</h2>
          <img src={coin} alt="dollar-coin" className="h-6 w-6" />
        </div>

      </div>
    </nav>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Navbar;
