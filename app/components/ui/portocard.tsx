import React from 'react';

interface PortocardProps {
    title: string;
    roles: React.ReactNode;
    img: string;
}

const Portocard: React.FC<PortocardProps> = ({ title, roles, img }) => {
    return (
        <div className='w-full border-b border-white'>
            <div className='h-52 w-full bg-red-950'>
                <img
                    src={img}
                    alt="portfolio thumbnail"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='flex justify-between'>
                <p className='font-thin'>{title}</p>
                <div className='flex flex-col font-thin'>
                    {roles}
                </div>
            </div>
        </div>
    );
};

export default Portocard;
