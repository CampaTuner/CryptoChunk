import React from 'react'

function Button({ icon, style, text,disabled, ...props }) {
    return (
        <button className={`text-white duration-100 ease-linear shadow-sm  bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 ${disabled ? "cursor-not-allowed" : ""} ${style}`} {...props}>
            {icon}
            <span>{text}</span>
        </button>
    )
}

export default Button
