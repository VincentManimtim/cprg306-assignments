" use client"

import { useState } from "react"

export default function NewItem(){
    
    const [count, setCount] = useState(1); 

    const plus = () => {
        if (count < 20){
            setCount(count +1);
        }
    }

    const minus = () => {
        if (count > 1){
            setCount(count - 1);
        }
    };

    let buttonGreen = "bg-green-700 hover:bg-green-500 active:bg-green-700 text-white rounded size-15 ml-10 mr-2 cursor-pointer transition-colors "

    let buttonRed = "bg-red-700 hover:bg-red-300 active:bg-red-700 text-white rounded size-15 cursor-pointer transition-colors "
    return (
        <main className="bg-blue-300 p-3 rounded-4xl m-5 size-fit">
            <p className="text-4xl"> {count}
                <button onClick={plus} className= {buttonGreen}> + </button>
                <button onClick={minus} className= {buttonRed}> - </button>
            </p>
        
        </main>
    )

}

