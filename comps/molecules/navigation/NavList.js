import { Cart, HouseDoor, List, Wallet } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import NavLink from '../../atomics/navigation/NavLink';

const NavList = ({ dataCart }) => {
    return (
        <>
            <ul className='navigation__nav'>
                <NavLink link='/'>
                    <div className='navigation__nav-icon'>
                        <HouseDoor size={28} />
                    </div>
                </NavLink>

                <NavLink link='/menu'>
                    <div className='navigation__nav-icon'>
                        <List size={28} />
                    </div>
                </NavLink>

                <NavLink link='/cart'>
                    <div className='navigation__nav-icon'>
                        <div className='navigation__nav-cart'>
                            <Cart size={28} />
                            <div className='cart__number-circle'>
                                <div className='cart__number-content'>
                                    <span className='cart__number-text'>
                                        {dataCart.length >= 1 ? dataCart.length : 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <NavLink link='/transaction'>
                    <div className='navigation__nav-icon'>
                        <Wallet size={28} />
                    </div>
                </NavLink>
            </ul>
        </>
    )
}

const mapStateToProps = state => {
    return {
        dataCart: state.cart.dataCart
    }
}

export default connect(mapStateToProps, null)(NavList)
