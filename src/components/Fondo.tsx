import React from "react"

function Fondo({children}:{children:React.ReactNode}) {
  return (
    <figure className=" bg-baner-fondo w-full h-full bg-cover bg-no-repeat">
        {children}
    </figure>
  )
}

export default Fondo