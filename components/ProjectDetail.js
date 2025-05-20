'use client'

import { useState, useEffect, useRef, useCallback, memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    MdOutlineFullscreen,
    MdOutlineFullscreenExit,
    MdOutlineLightMode,
    MdOutlineDarkMode,
    MdArrowRightAlt,
    MdOutlineChevronLeft,
    MdOutlineChevronRight
} from "react-icons/md"
import { FaUserClock } from 'react-icons/fa'


const Breadcrumb = memo(({ title, toggleFullscreen }) => (
    <nav
        className="text-sm sticky top-0 z-10 transition-colors duration-300 md:px-6 py-3 flex items-center justify-between"
        aria-label="Breadcrumb"
    >
        <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link><span className="ml-2">/</span></li>
            <li><Link href="/project" className="hover:underline">Projects</Link><span className="ml-2">/</span></li>
            <li className="text-white-400 font-medium truncate max-w-[180px]">{title}</li>
        </ol>
        <button onClick={toggleFullscreen} className="text-lg  transition">
            <MdOutlineFullscreen size={22} />
        </button>
    </nav>
))

const ProjectHeader = memo(({ project, isFullscreen, isDarkMode, toggleFullscreen, toggleDarkMode }) => (

    <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
            {project.companyImage ? (
                <div className={`w-[100px] h-[50px] p-2 shadow-inner flex items-center justify-center ${!isDarkMode && isFullscreen ? 'bg-black' : ''}`}>
                    <img src={project.companyImage} alt="Company Logo" className="max-w-full max-h-full object-contain" />
                </div>
            ) : (
                <FaUserClock size={30} />
            )}

            {!isFullscreen && (
                <div className="flex flex-col justify-center h-[50px]">
                    <motion.span className="text-xs text-white-500 uppercase tracking-wide leading-none">Project</motion.span>
                    <motion.h1 className="text-2xl font-bold text-white-800 leading-tight">{project.title}</motion.h1>
                </div>
            )}
        </div>

        <motion.div className='flex items-center gap-x-2'>
            {isFullscreen && (
                <>
                    <button
                        onClick={toggleFullscreen}
                        className="z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                    >
                        <MdOutlineFullscreenExit size={22} />
                    </button>
                    <button
                        onClick={toggleDarkMode}
                        className="z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                        title="Toggle dark mode"
                    >
                        {isDarkMode ? <MdOutlineDarkMode size={22} /> : <MdOutlineLightMode size={22} />}
                    </button>
                </>
            )}
            <Link
                href={project.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-sm items-center gap-3 p-2 rounded-full hover:underline bg-black/50 text-white font-semibold"
            >
                <span className='md:block hidden'>Visit Page</span> <MdArrowRightAlt size={22} />
            </Link>
        </motion.div>
    </div>
))

const ProjectNavigation = ({ previousProject, nextProject }) => (
    <div className="flex justify-between items-center border-t mt-10 py-3 container px-0 mx-auto">
        {previousProject ? (
            <Link href={`/project/${previousProject.slug}`} className="text-sm text-white-700 hover:underline flex items-center space-x-1">
                <MdOutlineChevronLeft size={22} /> <span className="font-bold">{previousProject.title}</span>
            </Link>
        ) : <div />}
        {nextProject ? (
            <Link href={`/project/${nextProject.slug}`} className="text-sm text-white-700 hover:underline flex items-center space-x-1">
                <span className="font-bold">{nextProject.title}</span> <MdOutlineChevronRight size={22} />
            </Link>
        ) : <div />}
    </div>
)



export default function ProjectDetailPage({ project, previousProject, nextProject, query }) {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const scrollRef = useRef(null)
    const containerRef = useRef(null)

    // Scroll to top when slug changes
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }, [query.slug])

    // Listen to fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            const inFullscreen = !!document.fullscreenElement
            setIsFullscreen(inFullscreen)
            setIsDarkMode(inFullscreen ? localStorage.getItem('projectDarkMode') === 'true' : false)
        }

        document.addEventListener('fullscreenchange', handleFullscreenChange)
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }, [])

    const toggleFullscreen = () => {
        if (!document.fullscreenElement && containerRef.current) {
            containerRef.current.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    const toggleDarkMode = useCallback(() => {
        if (isFullscreen) {
            const newMode = !isDarkMode
            setIsDarkMode(newMode)
            localStorage.setItem('projectDarkMode', newMode)
        }
    }, [isFullscreen, isDarkMode])

    if (!project) {
        return (
            <div className="text-center py-10 text-white-500 italic">
                Dự án chưa được tìm thấy hoặc đang được cập nhật.
            </div>
        )
    }

    const containerClass = isFullscreen
        ? `h-screen md:px-6 px-3 pt-5 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`
        : 'max-h-[calc(100vh-250px)] h-full md:px-6 bg-transparent'

    const getTextColorClass = () => {
        if (isFullscreen) {
            return isDarkMode ? 'text-white' : 'text-black'
        }
        return 'text-white'
    }

    return (
        <>
            {!isFullscreen && <Breadcrumb toggleFullscreen={toggleFullscreen} title={project.title} />}

            <motion.div
                ref={(el) => {
                    scrollRef.current = el
                    containerRef.current = el
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`shadow-xl overflow-auto z-40 relative flex flex-col justify-between ${containerClass}`}
            >
                <div className="flex flex-col container px-0 mx-auto">
                    <ProjectHeader
                        project={project}
                        isFullscreen={isFullscreen}
                        isDarkMode={isDarkMode}
                        toggleFullscreen={toggleFullscreen}
                        toggleDarkMode={toggleDarkMode}
                    />

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                        <img
                            src={project.path}
                            alt={project.title}
                            className="w-full h-auto shadow-lg mb-6"
                        />
                    </motion.div>

                    {/* Title in fullscreen */}
                    {isFullscreen && (
                        <div className="flex flex-col justify-center h-[50px]">
                            <motion.span className="text-sm text-white-500 uppercase tracking-wide leading-none">
                                Project
                            </motion.span>
                            <motion.h1 className="text-2xl font-bold text-white-800 leading-tight">
                                {project.title}
                            </motion.h1>
                        </div>
                    )}

                    {/* Description */}
                    <div className={`space-y-4 leading-relaxed px-4 h-full ${getTextColorClass()}`}>
                        {project.description ? (
                            <>
                                <div dangerouslySetInnerHTML={{ __html: project.description }} />
                            </>
                        ) : (
                            <div className="p-5 text-center">
                                Content will be available soon.
                            </div>
                        )}
                    </div>
                </div>

                {/* Prev / Next Navigation */}
                {(previousProject || nextProject) && (
                    <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
                )}
            </motion.div>
        </>
    )
}