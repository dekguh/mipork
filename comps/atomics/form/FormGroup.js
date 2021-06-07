import Label from "./Label"

const FormGroup = ({ classes, labelText, children }) => {
    return (
        <div className={classes ? `form__group ${classes}` : 'form__group' }>
            {labelText && <Label textlabelText />}
            {children}
        </div>
    )
}

export default FormGroup
