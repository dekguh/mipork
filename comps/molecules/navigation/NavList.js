import { Cart, HouseDoor, Search, Wallet } from 'react-bootstrap-icons';
import NavLink from '../../atomics/navigation/NavLink';

const NavList = () => {
    return (
        <>
            <ul className='navigation__nav'>
                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <HouseDoor size={27} />
                    </div>
                </NavLink>

                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <Search size={27} />
                    </div>
                </NavLink>

                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <Cart size={27} />
                    </div>
                </NavLink>

                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <Wallet size={27} />
                    </div>
                </NavLink>
            </ul>
        </>
    )
}

export default NavList
