import React from 'react'

function NavbarCustom() {
    return (
        <>

            <div className='fixed w-full z-10'>
                <nav class="border-gray-20 bg-gray-900">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <a href="https://dafazan.my.id" class="flex items-center">
                            <img src="dafazan.png" class="h-8 mr-3" alt="Dafazan Logo" />

                        </a>
                        <div class="flex items-center">
                            <a href="https://wa.me/6285864714906" class="mr-6 text-sm  text-white hover:underline">(62) 858-6471 4906</a>
                        </div>
                    </div>
                </nav>
                <nav class="bg-gray-700">
                    <div class="max-w-screen-xl px-4 py-3 mx-auto">
                        <div class="flex items-center">
                            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <a href="#" class="text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="text-white hover:underline">Portofolio</a>
                                </li>
                                <li>
                                    <a href="#" class="text-white hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default NavbarCustom