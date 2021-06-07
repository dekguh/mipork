import FormGroup from "../../atomics/form/FormGroup";
import Input from "../../atomics/form/Input";

const FormGroupIcon = ({ icon: Icon, label, classesForm, classesInput, onChange, placeholder }) => {
    return (
        <FormGroup labelText={label} classes={classesForm}>
            <div className='form__group-icon-wrap'>
                <div className='form__group-icon'>
                    {Icon && <Icon fontSize={14} />}
                </div>
                <Input
                    classes={classesInput}
                    style={{ paddingLeft: '35px' }}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </FormGroup>
    )
}

export default FormGroupIcon
