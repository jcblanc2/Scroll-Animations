const Button = ({
    name,
    icon,
    background,
    color,
    border,
}) => {
    return (
        <button className={`bg-${background ? background : 'cbd'} text-${color} border-2 border-${border} rounded-full py-3 px-8 cursor-pointer transition-all duration-200 ease-in-out flex items-center gap-4 hover:bg-cbd hover:text-white`}>
            {icon && icon}
            {name}
        </button>
    )
}

export default Button
