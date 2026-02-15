import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const featuredProjects = [
    {
        id: 1,
        title: 'Skyline Residences',
        subtitle: 'A luxury apartment complex brought to life through immersive 3D architectural walkthrough.',
        category: '3D Visualization',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 2,
        title: 'Brand Elevate',
        subtitle: 'High-impact commercial video campaign for a leading tech company product launch.',
        category: 'Video Production',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 3,
        title: 'Motion Stories',
        subtitle: 'A series of dynamic 2D animated explainer videos crafted for SaaS startups.',
        category: '2D Animation',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&q=80',
    },
    {
        id: 4,
        title: 'Realm VFX',
        subtitle: 'Cinematic VFX showreel featuring compositing, CGI creatures, and environment design.',
        category: 'VFX',
        image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=600&fit=crop&q=80',
    },
]

const services = [
    {
        title: 'Video Production',
        desc: 'We produce cinematic ad films, explainer videos, and branded content that captivates audiences and drives conversions. From concept to final edit, every frame tells your story.',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop&q=80',
    },
    {
        title: '2D & 3D Animation',
        desc: 'Our animation team creates everything from motion graphics and product visualizations to full architectural walkthroughs. We make the complex simple and the ordinary extraordinary.',
        image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=500&fit=crop&q=80',
    },
    {
        title: 'Visual Effects',
        desc: 'Hollywood-grade VFX for your projects — green screen compositing, CGI integration, rotoscopy, and post-production wizardry that pushes creative boundaries.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop&q=80',
    },
    {
        title: 'Creative Direction',
        desc: 'End-to-end creative strategy from concept development to final delivery. We help brands define their visual identity and craft stories that connect with audiences on a deeper level.',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop&q=80',
    },
]

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

export default function Home() {
    const heroRef = useRef(null)
    const featuredRef = useRef(null)
    const aboutRef = useRef(null)
    const servicesRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero text reveal
            gsap.from('.hero__title .word', {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: 'power4.out',
                stagger: 0.06,
                delay: 0.3,
            })

            gsap.from('.hero__subtitle', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                delay: 0.7,
            })

            gsap.from('.hero__buttons', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                delay: 0.9,
            })

            // Image parallax on ALL images
            document.querySelectorAll('.parallax-img').forEach((img) => {
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

            // Featured section
            gsap.from('.featured__heading', {
                scrollTrigger: { trigger: '.featured', start: 'top 80%' },
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from('.project-card', {
                scrollTrigger: { trigger: '.featured__grid', start: 'top 80%' },
                y: 80,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
            })

            // About preview
            gsap.from('.about-preview__visual', {
                scrollTrigger: { trigger: '.about-preview', start: 'top 75%' },
                x: -60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from('.about-preview__content', {
                scrollTrigger: { trigger: '.about-preview', start: 'top 75%' },
                x: 60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.15,
            })

            // Services
            gsap.from('.services__heading', {
                scrollTrigger: { trigger: '.services-overview', start: 'top 80%' },
                y: 50,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
            })

            gsap.from('.service-card', {
                scrollTrigger: { trigger: '.services__grid', start: 'top 80%' },
                y: 50,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.1,
            })

            // CTA
            gsap.from('.cta__text', {
                scrollTrigger: { trigger: '.cta', start: 'top 80%' },
                y: 50,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <motion.div
            className="page-wrapper"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* ===== HERO ===== */}
            <section className="hero section-warm" ref={heroRef}>
                <div className="hero__bg-pattern" />
                <div className="hero__content">
                    <p className="hero__overline">CREATIVE STUDIO — BENGALURU</p>
                    <h1 className="hero__title">
                        <span className="word">Creating</span>{' '}
                        <span className="word">visuals</span>{' '}
                        <span className="word">that</span>{' '}
                        <span className="word">build</span>{' '}
                        <span className="word">trust</span>
                    </h1>
                    <p className="hero__subtitle">
                        We're a full-service digital and creative agency helping brands
                        connect with people through fresh, meaningful visual storytelling.
                        From cinematic video to immersive 3D — we bring your vision to life.
                    </p>
                    <div className="hero__buttons">
                        <Link to="/contact" className="btn btn-primary">
                            Get Started
                        </Link>
                        <Link to="/about" className="btn btn-outline">
                            About Us
                        </Link>
                    </div>
                </div>
                <div className="hero__scroll-indicator">
                    <span>Scroll</span>
                    <div className="hero__scroll-line" />
                </div>
            </section>

            {/* ===== FEATURED WORK ===== */}
            <section className="featured section-white" ref={featuredRef}>
                <div className="container">
                    <div className="featured__header">
                        <h2 className="featured__heading">Featured projects</h2>
                        <p className="featured__desc">
                            Explore a selection of our most impactful work across video production,
                            3D visualization, animation, and visual effects.
                        </p>
                    </div>
                    <div className="featured__grid">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="project-card">
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
                                    <span className="card-category">{project.category}</span>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-subtitle">{project.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ABOUT PREVIEW ===== */}
            <section className="about-preview section-warm" ref={aboutRef}>
                <div className="container about-preview__inner">
                    <div className="about-preview__visual parallax-img-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=700&fit=crop&q=80"
                            alt="Creative team collaboration"
                            className="about-preview__image parallax-img"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-preview__content">
                        <span className="overline">WHO WE ARE</span>
                        <h2 className="about-preview__title">
                            Where creativity meets precision
                        </h2>
                        <p className="text-large">
                            We are a creative video and animation studio based in Bengaluru,
                            specializing in impactful visual storytelling that connects brands
                            with their audiences. Our team brings together filmmakers, animators,
                            and VFX artists under one roof.
                        </p>
                        <p>
                            Realtec Virtual doesn't do cookie-cutter solutions. We craft each
                            project with precision, creativity, and cinematic quality — no
                            shortcuts, no compromise. From concept to final render, every
                            detail matters.
                        </p>
                        <Link to="/about" className="btn btn-outline-dark">
                            Learn more about us
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES OVERVIEW ===== */}
            <section className="services-overview section-white" ref={servicesRef}>
                <div className="container">
                    <div className="services__header">
                        <h2 className="services__heading">What we do best</h2>
                        <p className="services__desc">
                            From video production to visual effects — we create and deliver
                            visual experiences that define brands and drive real results.
                        </p>
                    </div>
                    <div className="services__grid grid-2">
                        {services.map((service, i) => (
                            <div key={i} className="service-card">
                                <div className="service-card__image parallax-img-wrap">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="parallax-img"
                                    />
                                </div>
                                <h3 className="service-card__title">{service.title}</h3>
                                <p className="service-card__desc">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="services__cta">
                        <Link to="/services" className="btn btn-outline-dark">
                            View all services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="cta section-dark" ref={ctaRef}>
                <div className="cta__bg" />
                <div className="cta__content">
                    <p className="cta__overline">READY TO CREATE?</p>
                    <h2 className="cta__text">
                        Have<br />an idea?
                    </h2>
                    <p className="cta__desc">
                        Let's turn your vision into a visual masterpiece. Whether it's a
                        brand film, architectural walkthrough, or full VFX production — we're ready.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-large cta__button">
                        TELL US
                    </Link>
                </div>
            </section>
        </motion.div>
    )
}
