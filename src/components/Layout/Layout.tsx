import { Outlet } from 'react-router-dom'
import { Button } from 'antd'
import { sortBooksByName } from '../../slices/bookSlice' 
import { useAppDispatch } from '../../hooks/reduxHooks'

export const Layout = () => {
  const dispatch = useAppDispatch();

  return (
    <>
        <header style={{height: '100px', display: 'flex', justifyContent: 'space-around', paddingTop: '50px', backgroundColor: 'grey'}}>

        </header>
        <Outlet />
    </>
    
  )
}
