import Image from 'next/image'

export default function loading() {
    return (
        <div className='grid table-column-auto w-full h-full place-items-center mt-20'>
            <div className="loader"></div>
        </div>
    )
}