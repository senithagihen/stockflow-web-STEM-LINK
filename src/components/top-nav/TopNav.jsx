import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

function TopNav() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between h-16 border-b border-gray-300 bg-amber-200'>
           <div className="font-semibold text-foreground hover:cursor-pointer" onClick={() => navigate('/')} >
             Stockflow
           </div>
           <Button onClick={() => navigate('/login')}>Login</Button>
          </div>
    )
}

export default TopNav;