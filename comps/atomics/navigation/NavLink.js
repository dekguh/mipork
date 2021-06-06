import Link from 'next/link';

const NavLink = ({  link, text, children }) => {
    return (
        <li className='navigation__nav-item'>
            <Link href={link}>
                <a className='navigation__nav-link'>
                    {children}
                    {text && <span className='navigation__nav-text'>{text}</span>}
                </a>
            </Link>
        </li>
    )
}

export default NavLink
