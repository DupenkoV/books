import React, { useState } from 'react'
import { Button } from 'antd'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { sortBooksByDate, sortBooksByName } from '../../slices/bookSlice'


export const SortButtons = () => {
    const [sortName, setSortName] = useState(false)
    const [sortDate, setSortDate] = useState(false)
    const dispatch = useAppDispatch();

    const handleClickName = () => {
        dispatch(sortBooksByName({prop: 'title', dir: sortName }))
        setSortName(!sortName)
    }

    const handleClickDate = () => {
        dispatch(sortBooksByDate({prop: 'publishingDate', dir: sortDate }))
        setSortDate(!sortDate)
    }

  return (
    <div style={{display: 'flex', justifyContent:'space-around', height: '50px', padding: '30px'}}>
        <Button type="primary" onClick={handleClickName}>Сортировать по названию</Button>
        <Button type="primary" onClick={handleClickDate}>Сортировать по году публикации</Button>
  </div>
  )
}
