import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = (docInfo) => {
    const { speciality, docId } = docInfo;
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    const navigate = useNavigate();

    console.log(speciality, docId)
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => (doc.speciality === speciality && doc._id !== docId))
            setRelDoc(doctorsData);
            console.log(doctors[0].speciality, speciality);
        }
    }, [doctors, speciality, docId])
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full doctors-columns grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.map((doctor, index) => (
                    <div onClick={() => { navigate(`/appointment/${doctor._id}`); scrollTo(0, 0) }} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                        <img className='bg-blue-50 ' src={doctor.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full '></p><p>Available</p>
                            </div>
                            <p className='text-grey-900 text-lg font-medium'>{doctor.name}</p>
                            <p className='text-grey-600 text-sm'>{doctor.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/doctors'); scrollTo({ top: 0, behavior: 'smooth' }) }
            } className='bg-blue-50 text-grey-600 px-12 py-3 rounded-full mt-10 cursor-pointer'>more</button>
        </div>
    )
}

export default RelatedDoctors