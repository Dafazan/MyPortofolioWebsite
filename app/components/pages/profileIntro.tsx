import React from 'react'

function ProfileIntro() {
    return (
        <>
            <div className='w-full h-[2px] bg-blue-600'></div>
            <p className='text-lime-500'>SUBJECT&rsquo;S INTRODUCTION</p>
            <div className='w-full h-[2px] bg-blue-600'></div>
            <div className='h-52 overflow-x-hidden overflow-y-scroll'>
                <p className='text-red-600'>FIRST STATEMENT</p>
                <p className='text-sm text-justify'>&rsquo;&rsquo;Hello There, My name is Muhamad Daffa Fauzan, I&rsquo;m passionate about 3D design, Game developing and Website developing. I&rsquo;ve graduated as a Software Engineer at a Vocational High School. I found my passion in the field of Designing and Developing when I was studying in Mid school then I decided to take a Software Engineer Vocational High School.&rsquo;&rsquo;</p>
                <p className='text-red-600'>SECOND STATEMENT</p>
                <p className='text-sm text-justify'>&rsquo;&rsquo;I&rsquo;ve spending 4 years learning 3D Modelling as a hobby, and learn how to develop website at school for 3 years. As soon as I graduated from high school, I started to learn how to make a Game with Unity Game Engine.&rsquo;&rsquo;</p>
            </div>
        </>
    )
}

export default ProfileIntro