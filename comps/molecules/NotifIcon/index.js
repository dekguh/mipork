import Link from "next/link"
import { Bell } from "react-bootstrap-icons"

const NotifIcon = () => {
    return (
        <div>
            <Link href='#'>
                <a>
                    <Bell fontSize={28} />
                </a>
            </Link>
        </div>
    )
}

export default NotifIcon
