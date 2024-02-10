import React from 'react'

const Card = ({ title, description, image }) => {
    return (
        <div className='relative bg-black-bg h-full w-full p-3 rounded-lg border-2 border-cbd transition-all duration-300 ease-in-out'>
            <div
                className="image"
                style={{
                    height: "100%",
                    width: "100%",
                }}
            >
                <p className="absolute top-12 right-10 z-50 bg-[#222260] text-white p-1/5 rounded-lg font-semibold text-sm py-1 px-2">New</p>
                <div className="absolute bottom-1 left-1 z-50">
                    <h3 className='inline-block text-lg text-txt bg-black-bg py-1 px-2 rounded-full mb-2 border-2 border-cbd'>{title}</h3>
                    <p>{description}</p>
                </div>

                <img
                    src={image}
                    alt="image"
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "8px",
                    }}
                />
            </div>
            <div className="absolute -bottom-1 -left-1 w-full h-1/4 bg-gradient-to-b from-gray-900 via-transparent to-transparent border-b-2 border-cbd rounded-b-8"></div>
        </div>
    )
}

export default Card