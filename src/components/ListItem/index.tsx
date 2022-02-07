import React, { useState } from 'react'
import * as C from './styles'
import { Item } from '../../types/item'

type Props = {
    item: Item
}

export const ListItem = ({item}: Props)=>{
    const [isChecked, setIsChecked] = useState(item.done)
    return(
        <C.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={(e)=>{
                setIsChecked(e.target.checked)
                item.done = !item.done
                console.log(item)
            }}/>
            <label htmlFor="">{item.name}</label>
        </C.Container>
    )
}