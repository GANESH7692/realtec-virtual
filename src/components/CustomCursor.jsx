import { useEffect, useRef, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const cursorDotRef = useRef(null)
    const location = useLocation()
    const mousePos = useRef({ x: -100, y: -100 })

    // Re-bind interactive elements on route change
    const bindInteractiveElements = useCallback(() => {
        const cursor = cursorRef.current
        const dot = cursorDotRef.current
        if (!cursor || !dot) return

        const onMouseEnterInteractive = () => {
            gsap.to(cursor, { scale: 2.5, opacity: 0.6, duration: 0.3 })
            gsap.to(dot, { opacity: 0, duration: 0.3 })
        }

        const onMouseLeaveInteractive = () => {
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 })
            gsap.to(dot, { opacity: 1, duration: 0.3 })
        }

        // Slight delay to let new DOM render
        const timer = setTimeout(() => {
            const interactiveElements = document.querySelectorAll('a, button, .btn, .chip, .project-card, input, textarea')
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', onMouseEnterInteractive)
                el.addEventListener('mouseleave', onMouseLeaveInteractive)
            })
        }, 200)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const cursor = cursorRef.current
        const dot = cursorDotRef.current
        if (!cursor || !dot) return

        let cursorX = -100, cursorY = -100
        let animFrameId

        const onMouseMove = (e) => {
            mousePos.current.x = e.clientX
            mousePos.current.y = e.clientY
            gsap.to(dot, { x: e.clientX - 4, y: e.clientY - 4, duration: 0.1 })
        }

        const animate = () => {
            cursorX += (mousePos.current.x - cursorX) * 0.15
            cursorY += (mousePos.current.y - cursorY) * 0.15
            gsap.set(cursor, { x: cursorX - 20, y: cursorY - 20 })
            animFrameId = requestAnimationFrame(animate)
        }

        // Re-show cursor on window focus (after switching apps)
        const onWindowFocus = () => {
            gsap.to(cursor, { opacity: 1, duration: 0.2 })
            gsap.to(dot, { opacity: 1, duration: 0.2 })
        }

        const onWindowBlur = () => {
            gsap.to(cursor, { opacity: 0, duration: 0.2 })
            gsap.to(dot, { opacity: 0, duration: 0.2 })
        }

        // If mouse enters window after refocus, snap to position
        const onMouseEnterWindow = (e) => {
            mousePos.current.x = e.clientX
            mousePos.current.y = e.clientY
            cursorX = e.clientX
            cursorY = e.clientY
            gsap.set(cursor, { x: cursorX - 20, y: cursorY - 20, opacity: 1 })
            gsap.set(dot, { x: e.clientX - 4, y: e.clientY - 4, opacity: 1 })
        }

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('focus', onWindowFocus)
        window.addEventListener('blur', onWindowBlur)
        document.addEventListener('mouseenter', onMouseEnterWindow)
        animate()

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('focus', onWindowFocus)
            window.removeEventListener('blur', onWindowBlur)
            document.removeEventListener('mouseenter', onMouseEnterWindow)
            cancelAnimationFrame(animFrameId)
        }
    }, [])

    // Re-bind on route change
    useEffect(() => {
        bindInteractiveElements()
    }, [location.pathname, bindInteractiveElements])

    // Hide on mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    if (isMobile) return null

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(0, 0, 0, 0.35)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    mixBlendMode: 'normal',
                    transition: 'opacity 0.2s ease',
                }}
            />
            <div
                ref={cursorDotRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    mixBlendMode: 'normal',
                    transition: 'opacity 0.2s ease',
                }}
            />
        </>
    )
}
