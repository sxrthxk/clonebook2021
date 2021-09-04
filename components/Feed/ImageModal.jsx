import React from 'react'
import Image from 'next/image'
import { FaCross, FaTimes } from 'react-icons/fa'

const ImageModal = ({closeModal, src}) => {
    return (
        <>
        {/* OVERLAY */}
        <div className="w-screen h-screen z-10 opacity-30 bg-black fixed top-0 left-0" onClick={closeModal}/>
        <div className="w-1/2 h-1/2 z-10 fixed bottom-1/2 right-1/2 bg-white transform translate-x-1/2 translate-y-1/2">
        <Image src={src} layout="responsive" objectFit="cover"></Image>
        <FaTimes onClick={closeModal} className="fixed top-0 right-0 m-3 p-2 z-10 text-4xl box-border fill-current cursor-pointer text-white hover:bg-white hover:text-black rounded-full"/>
        </div>
        </>
    )
}

export default ImageModal
