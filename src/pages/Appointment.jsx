import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currenctSymbol } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const [docInfo, setDocInfo] = useState({});
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState("")

    const fetchDocInfo = () => {
        const docInfoData = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfoData);
        console.log(docInfo);
    }

    const getAvailableSlots = async () => {
        setDocSlots([])

        let today = new Date()

        for (let i = 0; i < 7; i++) {
            //getting date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate(currentDate) + i);

            //setting end time of the date with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 59, 0);

            //setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = []
            while (currentDate <= endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                //add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })

                //Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }

    useEffect(() => {
        fetchDocInfo();
    }, [doctors, docId]);

    useEffect(() => {
        getAvailableSlots()
    }, [docInfo])

    // useEffect(() => {

    // }, [docSlots])
    return docInfo && (
        <div>
            {/* ----Doctor details---- */}
            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <div className='text-right md:w-1/4  m-auto m-y-2'>
                    <img className='bg-primary h-full rounded-lg' src={docInfo.image} alt="" />
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0  sm:mt-1'>
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
                        <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>

                    <div>
                        <p className='flex items-center gap-1 text-lg font-medium text-gray-900 mt-5'>About <img src={assets.info_icon} alt="" /></p>
                        <p className='text-medium text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>
                    <p className='text-gray-900 font-lg mt-4'>
                        Appointment fee: <span className='text-black text-xl'>{currenctSymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* 
            // -------Booking Slots------ */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-centerw-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots.map((item, index) => (
                        <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-500 border border-gray-300'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>

                <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
            </div>

            {/* ----Listing related doctors----- */}
            <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
    )
}

export default Appointment