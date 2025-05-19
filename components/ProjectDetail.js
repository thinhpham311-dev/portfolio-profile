'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6"
import { FaUserClock } from 'react-icons/fa'
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export default function ProjectDetailPage({ project, previousProject, nextProject, query }) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const scrollRef = useRef(null)
    const containerRef = useRef(null)


    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [query.slug])

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement)
        }
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
        }
    }, [])

    const toggleFullscreen = () => {
        if (!document.fullscreenElement && containerRef.current) {
            containerRef.current.requestFullscreen()
        } else if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }

    if (!project) {
        return (
            <div className="text-center py-10 text-white-500 italic">
                Dự án chưa được tìm thấy hoặc đang được cập nhật.
            </div>
        )
    }


    return (

        <>
            {/* Breadcrumb */}
            {!isFullscreen && (
                <nav
                    className="text-sm sticky top-0 z-10 transition-colors duration-300 px-6 py-3 flex items-center justify-between"
                    aria-label="Breadcrumb"
                >
                    <ol className="flex items-center space-x-2 text-sm">
                        <li><Link href="/" className="hover:underline">Home</Link><span className="ml-2">/</span></li>
                        <li><Link href="/project" className="hover:underline">Projects</Link><span className="ml-2">/</span></li>
                        <li className="text-white-400 font-medium truncate max-w-[180px]">{project.title}</li>
                    </ol>
                    <button onClick={toggleFullscreen} className="text-lg hover:text-blue-600 transition">
                        {isFullscreen ? <MdOutlineFullscreenExit size={22} /> : <MdOutlineFullscreen size={22} />}
                    </button>
                </nav>
            )}

            <motion.div
                ref={(el) => {
                    scrollRef.current = el;
                    containerRef.current = el;
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`rounded-2xl shadow-xl overflow-auto z-40 relative 
                ${isFullscreen
                        ? 'h-screen p-6 md:p-10'
                        : 'max-h-[calc(100vh-250px)] h-full px-5'
                    }`}
            >

                {/* Header */}
                <div className="flex items-center justify-between mb-6 px-4">
                    <div className="flex items-center space-x-4">
                        {project.companyImage ? (
                            <div className="w-[100px] h-[50px] p-2 shadow-inner flex items-center justify-center">
                                <img src={project.companyImage} alt="Company Logo" className="max-w-full max-h-full object-contain" />
                            </div>
                        ) : (
                            <FaUserClock size={30} />
                        )}
                        <div className="flex flex-col justify-center h-[50px]">
                            <span className="text-sm text-white-500 uppercase tracking-wide leading-none">Project</span>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-bold text-white-800 leading-tight"
                            >
                                {project.title}
                            </motion.h1>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='flex items-center'
                    >
                        {isFullscreen && (
                            <button
                                onClick={toggleFullscreen}
                                className="   z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                            >
                                <MdOutlineFullscreenExit size={22} />
                            </button>
                        )}
                        <Link
                            href={project.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex text-sm items-center gap-3 hover:underline text-white font-semibold rounded-lg"
                        >
                            <span className='md:block hidden'>Visit Page</span> <FaArrowRightLong />
                        </Link>

                    </motion.div>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <img
                        src={project.path}
                        alt={project.title}
                        className="w-full h-auto shadow-lg mb-6"
                    />
                </motion.div>

                {/* Description */}
                <div className="space-y-4 text-base leading-relaxed px-4">
                    {project?.description ? (
                        <div className="text-white-700" dangerouslySetInnerHTML={{ __html: project.description }} />
                    ) : (
                        <div className="p-5">
                            <p className="text-white-700 text-center">Content will be available soon. </p>
                        </div>
                    )}
                </div>

                {/* Prev / Next Navigation */}
                {(previousProject || nextProject) && (
                    <div className="flex justify-between items-center border-t mt-10 p-3">
                        {previousProject ? (
                            <Link
                                href={`/project/${previousProject.slug}`}
                                className="text-sm text-white-700 hover:underline flex items-center space-x-2"
                            >
                                <FaArrowLeftLong /> <span className="font-bold">{previousProject.title}</span>
                            </Link>
                        ) : <div />}

                        {nextProject ? (
                            <Link
                                href={`/project/${nextProject.slug}`}
                                className="text-sm text-white-700 hover:underline flex items-center space-x-2"
                            >
                                <span className="font-bold">{nextProject.title}</span> <FaArrowRightLong />
                            </Link>
                        ) : <div />}
                    </div>
                )}
            </motion.div>

        </>
    )
}
