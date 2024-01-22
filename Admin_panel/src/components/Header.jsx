import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'


export function Header({Opensidebar}) {
    

    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={Opensidebar}/>
            </div>
            <div className='header-left'>
                <BsSearch className='icon'/>
            </div>
            <div className='header-right'>
                <BsFillBellFill className='icon'/>
                <BsFillEnvelopeFill className='icon'/>
                <BsPersonCircle className='icon'/>

            </div>
        </header>
    )
}

