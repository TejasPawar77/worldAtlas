import {Headers} from '../components/UI/Headers'
import {Footers} from '../components/UI/Footers'
import { Outlet } from 'react-router-dom'

export  const AppLayout = () => {
 return <>
    <Headers />
    <Outlet />
    <Footers />
 </>
}