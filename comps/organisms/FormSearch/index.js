import { Search } from "react-bootstrap-icons"
import FormGroupIcon from "../../molecules/FormGroupIcon"
import NotifIcon from "../../molecules/NotifIcon"

const FormSearch = () => {
    return (
        <div className='form__search-wrap'>
            <div className='form__search-content'>
                <FormGroupIcon icon={Search} classesInput='border-rounded-full' placeholder='pencarian' />
            </div>

            <div className='notif__content'>
                <NotifIcon />
            </div>
        </div>
    )
}

export default FormSearch
