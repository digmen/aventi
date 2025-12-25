// 'use client'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// export default function Page() {
//     const [progress, setProgress] = useState(0)
//     const [isLoaded, setIsLoaded] = useState(false)

//     useEffect(() => {
//         const handleLoad = () => {
//             setProgress(100)
//             setTimeout(() => setIsLoaded(true), 700)
//         }

//         let currentProgress = 0
//         const interval = setInterval(() => {
//             if (document.readyState === 'complete') {
//                 currentProgress = 100
//                 setProgress(currentProgress)
//                 clearInterval(interval)
//             } else {
//                 currentProgress = Math.min(currentProgress + 1, 95)
//                 setProgress(currentProgress)
//             }
//         }, 80) // можно настраивать скорость

//         window.addEventListener('load', handleLoad)

//         return () => {
//             clearInterval(interval)
//             window.removeEventListener('load', handleLoad)
//         }
//     }, [])

//     if (isLoaded) return null

//     return (
//         <main>
//             <article className="fixed inset-0 z-50 bg-[#2E4459] overflow-hidden flex flex-col justify-between">
//                 <section className="relative w-full h-[63px] mt-[40vh] overflow-hidden">
//                     <div
//                         className="absolute top-0 left-0 h-full bg-white flex items-center pl-[80px] pr-4"
//                         style={{
//                             width: `${progress}%`,
//                             transition: 'width 2s ease-in-out',

//                         }}
//                     >
//                         <div
//                             className="flex items-center"
//                             style={{
//                                 gap: `${7 + progress * 0.5}px`, // Увеличиваем gap пропорционально progress
//                                 transition: 'gap 0.3s ease-in-out',
//                             }}
//                         >
//                             <p className="text-[#2E4459] text-[16px]">Loading</p>
//                             <Image
//                                 src="/assets/images/star.svg"
//                                 width={32}
//                                 height={32}
//                                 alt="star"
//                                 className="w-[32px] h-auto"
//                             />
//                         </div>
//                         <p className="text-[#2E4459] text-[16px] ml-2"
//                             style={marginLeft: `calc(${progress}vw)`,
//                                 transition: 'margin-left 0.3s ease-in-out',}
//                 >/ {Math.floor(progress)}%</p>
//                 </div>
//             </section>

//             {/* Логотип */}
//             <section className="mb-[20px] flex justify-center items-center">
//                 <Image
//                     src="/assets/images/logo.svg"
//                     width={323}
//                     height={86}
//                     alt="AVENTIA STUDIO"
//                     className="w-[323px] h-auto"
//                 />
//             </section>
//         </article>
//         </main >
//     )
// }


'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PreloaderWithTransition({ children }) {
    const [progress, setProgress] = useState(0)
    const [phase, setPhase] = useState('loading') // 'loading', 'transition', 'done'

    useEffect(() => {
        const handleLoad = () => {
            setProgress(100)
            setTimeout(() => setPhase('transition'), 400)
        }

        let currentProgress = 0
        const interval = setInterval(() => {
            if (document.readyState === 'complete') {
                currentProgress = 100
                setProgress(currentProgress)
                clearInterval(interval)
                setTimeout(() => setPhase('transition'), 400)
            } else {
                currentProgress = Math.min(currentProgress + 1, 96)
                setProgress(currentProgress)
            }
        }, 16)

        window.addEventListener('load', handleLoad)

        return () => {
            clearInterval(interval)
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    // Анимация раскрытия и лого
    if (phase === 'done') return children

    return (
        <>
            <AnimatePresence>
                {phase !== 'done' && (
                    <motion.article
                        className="fixed inset-0 z-50 bg-[#2E4459] flex flex-col justify-between overflow-hidden"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.7 } }}
                    >
                        {/* Верхний bar */}
                        <motion.div
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full"
                            initial={{ height: 63 }}
                            animate={
                                phase === 'transition'
                                    ? { height: '100vh', transition: { duration: 0.7, ease: 'easeInOut' } }
                                    : { height: 63 }
                            }
                            style={{ overflow: 'hidden', zIndex: 2 }}
                        >
                            <motion.div
                                className="relative w-full h-full bg-[#2E4459] flex items-center"
                                initial={{ width: `${progress}%` }}
                                animate={
                                    phase === 'transition'
                                        ? { width: '100%' }
                                        : { width: `${progress}%` }
                                }
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                style={{ background: '#2E4459' }}
                            >
                                <motion.div
                                    className="flex items-center gap-5 px-16"
                                    initial={{ opacity: 1 }}
                                    animate={phase === 'transition' ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-white text-[16px]">Loading</p>
                                    <Image
                                        src="/assets/images/star.svg"
                                        width={32}
                                        height={32}
                                        alt="star"
                                        className="w-[32px] h-auto"
                                    />
                                    <p className="text-white text-[16px] ml-2">/ {Math.floor(progress)}%</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        {/* Логотип */}
                        <motion.div
                            className="absolute left-1/2 bottom-[50px] z-20"
                            initial={{ x: '-50%', y: 0, scale: 1, filter: 'brightness(200%)' }}
                            animate={
                                phase === 'transition'
                                    ? { x: 0, y: '-48vh', scale: 0.6, left: 32, filter: 'brightness(100%)' }
                                    : { x: '-50%', y: 0, scale: 1, left: '50%' }
                            }
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                        >
                            <Image
                                src="/assets/images/logo.svg"
                                width={323}
                                height={86}
                                alt="AVENTIA STUDIO"
                                className="w-[323px] h-auto transition-all"
                                style={{
                                    filter: phase === 'transition' ? 'invert(1) brightness(0.6)' : '',
                                }}
                            />
                        </motion.div>

                        {/* После раскрытия — показываем контент лендинга */}
                        {phase === 'transition' && (
                            <motion.div
                                className="absolute inset-0 z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                onAnimationComplete={() => setPhase('done')}
                            />
                        )}
                    </motion.article>
                )}
            </AnimatePresence>
            {phase === 'done' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.7 } }}
                >
                    {children}
                </motion.div>
            )}
        </>
    )
}
