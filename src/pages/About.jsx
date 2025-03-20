import React from 'react'
import { assets } from '../assets/assets'
const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full max-w-[360px]' src={assets.about_image} alt="" />
                <div className='flex flex-col gap-6 justify-center md:w-2/4 text-sm test-gray-600'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tempora rerum, cum autem illo libero non eligendi nobis? Placeat eveniet officiis incidunt quam illo, rem nemo numquam vel iure debitis.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam voluptate quas iste, architecto cumque voluptates. Minima numquam porro corporis deleniti, inventore, amet provident ullam natus odio veniam nesciunt eveniet quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus corrupti vero maiores molestias quasi aspernatur, accusamus cupiditate quo cumque magni odit hic assumenda iste sint excepturi deserunt sed perspiciatis.</p>
                    <b className='text-gray-800'>Our Vision</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, distinctio ex. Repudiandae sequi nam voluptatum neque aut facere asperiores inventore aspernatur voluptatibus eligendi ea cumque, a eius? Id, omnis impedit.</p>
                </div>
            </div>
            <div className='text-xl my-4'>
                <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
            </div>
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-allduration-300 text-gray-600 cursor-pointer'>
                    <b>EFFICIENCY</b>
                    <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
                </div>
                <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-allduration-300 text-gray-600 cursor-pointer'>
                    <b>CONVINIENCE</b>
                    <p>Access To A Network Of Trusted Healthcare Proffesionals In Your Area.</p>
                </div>
                <div className='border px-10 md:px-16 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-allduration-300 text-gray-600 cursor-pointer'>
                    <b>PERSONALISATION</b>
                    <p>Tailored Reccomendations And Remides To Help You Stay On Top Of Your Health.</p>
                </div>
            </div>
        </div>
    )
}

export default About