const LabelCustom = ({ classes, text }) => {
    return (
        <label className={classes ? `label__custom ${classes}` : 'label__custom'}>
            {text}
        </label>
    )
}

export default LabelCustom
