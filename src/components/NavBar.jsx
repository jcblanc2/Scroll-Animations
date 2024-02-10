import logo from '../assets/images/logo.png';
import { FaWallet } from "react-icons/fa";
import Button from './Button';

const navLinks = ['Home', 'Auctions', 'Marketplace', 'About'];

const NavBar = () => {
    return (
        <nav className='p-0 px-4 min-h-24 border-b border-cbd flex justify-between items-center'>

            <div className='flex items-center gap-1 cursor-pointe'>
                <img src={logo} alt="logo" width={36} />
                <h2>Logo</h2>
            </div>

            <div className='flex flex-1 justify-center'>
                <input className='w-2/4 py-2 px-3 rounded-lg bg-cbg border-2 border-cbd placeholder-cbd font-medium' type="text" placeholder="Search" />
            </div>

            <ul className='flex items-center gap-8'>
                {
                    navLinks.map((item, index) => (
                        <li className='transition-li hover:transform-li'>
                            <a href="#" key={item}>{item}</a>
                        </li>
                    ))
                }
                <Button name="Connect Wallet" icon={<FaWallet />} background={'cbg'} />
            </ul>
        </nav>
    )
}

export default NavBar