import React from 'react';

function About() {
    return (  
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <img 
                src="react-aomz/public/Aom.jpg" 
                alt="Profile" 
                className="rounded-full mb-4 shadow-lg"
            />
            <h1 className='text-black font-bold text-2xl mb-2'>วีระพล ถิตย์ประเสริฐ</h1>
            <p className="text-gray-700 text-center">
                ยินดีต้อนรับเข้าสู่โปรไฟล์ของ วีระพล ถิตย์ประเสริฐ นะจ๊ะ
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                ติดต่อ 088-123-4567
            </button>
        </div>
    );
}

export default About;