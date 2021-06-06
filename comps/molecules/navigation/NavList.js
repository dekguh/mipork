import { Cart, HouseDoor, Search, Wallet } from 'react-bootstrap-icons';
import NavLink from '../../atomics/navigation/NavLink';

const NavList = () => {
    return (
        <>
            <ul className='navigation__nav'>
                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <HouseDoor size={28} />
                    </div>
                </NavLink>

                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <Search size={28} />
                    </div>
                </NavLink>

                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <div className='navigation__nav-cart'>
                            <Cart size={28} />
                            <div className='cart__number-circle'>
                                <div className='cart__number-content'>
                                    <span className='cart__number-text'>
                                        2
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <NavLink link='#'>
                    <div className='navigation__nav-icon'>
                        <Wallet size={28} />
                    </div>
                </NavLink>
            </ul>
        </>
    )
}

export default NavList
