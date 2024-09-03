import React from 'react';
import profilePic from '../assets/profile.jpg'; // เปลี่ยนเส้นทางให้ถูกต้อง

function Deshboard() {
    return ( 
        <>
            <h1 className="text-3xl font-bold underline">Deshboa</h1>
            <div className="profile">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <span>Weerapol Thitprasert</span>
            </div>
        </>
    );
}

export default Deshboard;
