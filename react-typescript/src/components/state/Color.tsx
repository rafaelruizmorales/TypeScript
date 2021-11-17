import { useState } from "react";

type validColor = {
    name: string
    hex: string
}

export const Color = () => {
    const [color, setColor] = useState<validColor | null>(null)
    
    const handleChangeColor = (color: validColor) => {
        setColor({
            name: color.name,
            hex: color.hex
        })
    }

    return (
        <p>
            <button onClick={() => handleChangeColor({name: 'blue', hex: '#0000FF'})}>BLUE</button>
            <button onClick={() => handleChangeColor({name: 'red', hex: '#FF0000'})}>RED</button>

            {color && color.name 
                ? `The color is: ${color.name} - The hex is: ${color.hex}`
                : ''
            }
        </p>
    )
} 