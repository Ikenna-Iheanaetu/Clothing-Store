const Button = ({ children, classes, ...otherProps }) => {
    return (
        <button className={`${classes} button-container`} { ...otherProps }>{children}</button>
    )
}

export default Button