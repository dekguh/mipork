import { Search } from "react-bootstrap-icons"
import FormGroupIcon from "../../molecules/FormGroupIcon"
import NotifIcon from "../../molecules/NotifIcon"

const FormSearch = ( { classes, onChange, onBlur, value }) => {
    return (
        <div className={classes ? `form__search-wrap ${classes}` : 'form__search-wrap'}>
            <div className='form__search-content'>
                <FormGroupIcon
                    icon={Search}
                    classesInput='border-rounded-full'
                    placeholder='pencarian'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            </div>

            <div className='notif__content'>
                <NotifIcon />
            </div>
        </div>
    )
}

export default FormSearch
