import { useState, useEffect } from "react"

export const Effect = () => {

    type validEmail = {
        email: string
    }
    
    const [randomEmail, setRandomEmail] = useState<validEmail | null>(null);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://randomuser.me/api/?results=500')
          const data = await response.json();

          setRandomEmail({email: data.results[10].email})
        }
        fetchData();
      }, []);

    return (
        <>
            {randomEmail?.email}
        </>
    )
}