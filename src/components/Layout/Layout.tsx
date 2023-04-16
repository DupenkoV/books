import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'

export const Layout = () => {

  return (
    <>
        <header style={{height: '100px', display: 'flex', justifyContent: 'space-around', paddingTop: '50px', backgroundColor: 'grey'}}>

        </header>
        <Outlet />
    </>
    
  )
}
