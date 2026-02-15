import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const allProjects = [
    {
        id: 1,
        title: 'Skyline Residences',
        desc: 'A luxury apartment complex brought to life through immersive 3D architectural walkthrough, showcasing every design detail in photorealistic quality.',
        category: 'Walkthrough',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 2,
        title: 'Brand Elevate',
        desc: 'High-impact corporate commercial video campaign designed to boost brand awareness and engage stakeholders across digital platforms.',
        category: 'Video',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 3,
        title: 'Motion Stories',
        desc: 'A series of dynamic 2D animated explainer videos crafted for SaaS startups to simplify complex product features.',
        category: 'Animation',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 4,
        title: 'Realm VFX',
        desc: 'Cinematic VFX showreel featuring advanced green screen compositing, CGI creatures, and full environment design.',
        category: 'VFX',
        image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 5,
        title: 'Urban Horizon',
        desc: 'Modern city tower architectural visualization with detailed interior walkthroughs and exterior aerial views.',
        category: 'Walkthrough',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 6,
        title: 'Pulse Digital',
        desc: 'Social media branded documentary exploring the story behind a digital-first company and its rapid growth.',
        category: 'Video',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 7,
        title: 'Neon Drift',
        desc: 'Motion graphics title sequence for an independent sci-fi film, blending retro aesthetics with cutting-edge animation.',
        category: 'Animation',
        image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 8,
        title: 'Phantom Frame',
        desc: 'Full CGI environment and creature design for a fantasy game cinematic trailer with photorealistic rendering.',
        category: 'VFX',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop&q=80',
    },
]

const filters = ['All Projects', 'Video', 'Animation', 'VFX', 'Walkthrough']

const pageVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
    },
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All Projects')

    const filteredProjects = activeFilter === 'All Projects'
        ? allProjects
        : allProjects.filter(p => p.category === activeFilter)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.projects-hero__title .word', {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: 'power4.out',
                stagger: 0.06,
                delay: 0.3,
            })

            // Image parallax
            document.querySelectorAll('.projects-grid-section .parallax-img').forEach((img) => {
                gsap.to(img, {
                    yPercent: -8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.closest('.parallax-img-wrap') || img.parentElement,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                })
            })
        })
        return () => ctx.revert()
    }, [filteredProjects])

    return (
        <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Hero — dark background */}
            <section className="projects-hero section-warm">
                <div className="container projects-hero__inner">
                    <h1 className="projects-hero__title">
                        <span className="word">Our</span>{' '}
                        <span className="word">projects</span>
                    </h1>
                    <p className="projects-hero__desc">
                        A curated collection of our finest work across video production,
                        animation, VFX, and architectural visualization. Each project
                        represents our commitment to cinematic quality.
                    </p>
                </div>
            </section>

            {/* Filters — always visible, scrollable on mobile */}
            <section className="projects-filters">
                <div className="container">
                    <div className="projects-filters__tabs">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`btn-pill ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid — uniform image sizes */}
            <section className="projects-grid-section">
                <div className="container">
                    <motion.div
                        className="projects-uniform-grid"
                        initial="hidden"
                        animate="visible"
                        key={activeFilter}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.07 } },
                        }}
                    >
                        {filteredProjects.map(project => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                variants={{
                                    hidden: { y: 40, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                                }}
                                layout
                            >
                                <div className="card-image parallax-img-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="parallax-img"
                                    />
                                    <div className="card-hover-overlay">
                                        <span className="card-hover-overlay__text">View project</span>
                                        <span className="card-hover-overlay__arrow">↗</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-subtitle">{project.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}
