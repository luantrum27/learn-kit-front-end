'use client'
import { registerCourse } from '@/app/services/course.service';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function AddCourse() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [cost, setCost] = useState(0);
    const [level, setLevel] = useState('');
    const [time, setTime] = useState(0);
    const [numberOfSubscribers, setNumberOfSubscribers] = useState(0);
    const [numberOfLessions, setNumberOfLessions] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [thumbnail, setThumbnail] = useState('');
    const handleSubmit = async () => {
        const newCourse = {
            title,
            description,
            type,
            cost,
            level,
            time,
            numberOfSubscribers,
            numberOfLessions,
            averageRating,
            thumbnail
        }
        await registerCourse(newCourse);
        router.push('/pages/admin')
    }
    return (
        <div className='max-w-[60%] mx-auto grid grid-cols-2 gap-[20px] items-center justify-center'>
            <div className="form-group">
                <label htmlFor="title">Title course</label>
                <input onChange={(e: any) => setTitle(e.target.value)} value={title} type="text" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="title" placeholder="Enter title course" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea onChange={(e: any) => setDescription(e.target.value)} value={description} className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="description" placeholder="Enter description course"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="type">Type</label>
                <input onChange={(e: any) => setType(e.target.value)} value={type} type="text" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="type" placeholder="Enter type course" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Cost</label>
                <input onChange={(e: any) => setCost(e.target.value)} value={cost} type="number" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="description" placeholder="Enter description course" />
            </div>
            <div className="form-group">
                <label htmlFor="level">Level</label>
                <input onChange={(e: any) => setLevel(e.target.value)} value={level} type="text" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="level" placeholder="Enter level course" />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time</label>
                <input onChange={(e: any) => setTime(e.target.value)} value={time} type="number" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="time" placeholder="Enter time course" />
            </div>
            <div className="form-group">
                <label htmlFor="averageRating">Average Rating</label>
                <input onChange={(e: any) => setAverageRating(e.target.value)} value={averageRating} type="number" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="averageRating" placeholder="Enter average rating course" />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfSubscribers">Number Of Subscribers</label>
                <input onChange={(e: any) => setNumberOfSubscribers(e.target.value)} value={numberOfSubscribers} type="number" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="numberOfSubscribers" placeholder="Enter number of subscribers course" />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfLessions">Number Of Lessions</label>
                <input onChange={(e: any) => setNumberOfLessions(e.target.value)} value={numberOfLessions} type="number" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="numberOfLessions" placeholder="Enter number of lessions course" />
            </div>
            <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input onChange={(e: any) => setThumbnail(e.target.value)} value={thumbnail} type="file" className="ct-input border-[#8D8C9B] h-[54px] px-8 rounded-md py-4 text-[#8D8C9B]" id="thumbnail" placeholder="Enter thumbnail course" />
            </div>
            <button onClick={handleSubmit} className="w-full btn btn-primary bg-green-300 border-green-300 hover:bg-green-300 hover:border-green-300">Submit</button>
        </div>
    )
}

export default AddCourse