import logo from '../../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiPlus, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2'

import { HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import perfil from '../../assets/Images/perfil.jpg'
import { useState } from 'react'
function Header() {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus,
        },
        {
            name: 'ORIGINAL',
            icon: HiStar,
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle,
        },

        {
            name: 'SERIES',
            icon: HiTv,
        },
    ];

    // UseStates
    const [toggle, setToggle] = useState(false)


    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex  items-center gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px]' />
                {/* MD:lange */}
                <div className='hidden md:flex gap-8'>

                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                {/* MD:small */}
                <div className='flex md:hidden gap-8' onClick={() => setToggle(!toggle)}>

                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={index} name={''} Icon={item.icon} />
                    ))}
                    <div>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-2 border-gray-700 p-3 px-5 py-4'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem key={index} name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>

            </div>
            <img src={perfil} className='w-[40px] rounded-full' />
        </div>
    )
}
export default Header