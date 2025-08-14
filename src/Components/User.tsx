import React from 'react'

interface Props {
    name: string,
    age: number,
    isMarried: boolean,
    country : Countries,
}

export enum Countries {
    Bangladesh = "Bangladesh",
    Pakistan = "Pakistan",
    USA = "USA"
}


const User = (props : Props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.isMarried}</p>
        <p>{props.country}</p>
    </div>
  )
}

export default User