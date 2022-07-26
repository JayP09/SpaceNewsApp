import React from "react"

const Card = ({item}) => {
    return (
        <div className="p-2 bg-[#e1d8ee]">
            <div className="p-[2px] bg-[#1f1122] h-full">
                <div className="flex justify-center flex-auto p-2 w-96 bg-[#e1d8ee] text-[#1f1122] cursor-pointer hover:bg-[#e0c6b2] h-full" onClick={() => window.location.href = item.url}>
                    <div className="flex flex-col items-center">
                        <img src={item.imageUrl} alt="img"/>
                        <h3 className="text-xl m-2 font-bold capitalize">{item.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card