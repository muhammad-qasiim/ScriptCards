import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import Sidebar from '../Sidebar';


const Navbar = () => {
    const location = useLocation();

    console.log(location.pathname);

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const Navigation = [{ placeholder: 'Home', path: '/' }, { placeholder: 'Our Story', path: '/our-story' }, { placeholder: 'Pricing', path: '/pricing' }, { placeholder: 'Account', path: '/account' }, { placeholder: 'App', path: '/app' }]

    return (
        <>

            <nav className="bg-white sticky top-0 z-50 h-71">
                <main className="flex h-71 justify-between items-center mx-auto px-24 lg:px-99">
                    <Link to="/">
                        <img className="w-183" src="/assets/script-cards.svg" alt="" />
                    </Link>

                    <button onClick={() => setToggleSidebar(!toggleSidebar)} type="button" className="relative inline-flex items-center p-2 ml-14 text-sm text-gray-500 rounded-xl xl:hidden  focus:outline-none focus:text-gray-800" aria-controls="mobile-menu-3" aria-expanded="false">
                        {toggleSidebar ? <VscClose size="24" /> : <AiOutlineMenu size="20" />}
                    </button>

                    <div className="hidden justify-between items-center w-full xl:flex xl:w-auto ">
                        <ul className="flex flex-col items-center mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium">
                            {
                                Navigation?.map(item => (
                                    <li key={Math.random()}>
                                        <Link to={item?.path}>
                                            <span className={`text-lg font-light cursor-pointer transition-all hover:text-primary ${item?.path == location?.pathname ? 'text-primary' : 'text-gray-700'}`}>
                                                {item?.placeholder}
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    <div className='hidden xl:block'>
                        <Link to="/user-authentication"> <button className="bg-primary text-white px-32 py-10 rounded-full transition-all hover:bg-green-600 relative top-0 hover:top-px" >Get Started</button> </Link>
                    </div>

                    <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

                </main>
            </nav>
        </>

    )
}

export default Navbar;