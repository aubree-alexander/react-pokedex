const Container = props => {
    return (
        //hardcoded container class; if user passes in props, it also has new prop classname, or output an empty string if no class is defined
        <div className={`container ${props.className || ''}`}>
            {props.children}
        </div>
    )
}

export default Container