import React from 'react';
const UserNavbar = () =>
{
    return (
    <div className='usernavbarre'>
        <div className='logo'>
            <img src='logo192'></img>
        </div>
        <ul className='links'>
            <li><a href='/Userdash'>Home</a></li>
            <li><a href='/User_guide'>User Guide</a></li>
            <li><a href='/Login'>login</a></li>
            <li><a href='/register'>Join us</a></li>
            <li><a href='/Contacts'>Contact us</a></li>
        </ul>
    </div>
    )
}

export default UserNavbar;