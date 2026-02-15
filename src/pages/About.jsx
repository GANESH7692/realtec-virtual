import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const clientRows = [
    ['TechVista', 'BuildCraft', 'NeoMedia', 'SkyBridge', 'Artisan Co', 'Pixel Labs'],
    ['Vertex AI', 'CloudNine', 'Zenith Corp', 'Lumina Studios', 'Apex Digital', 'FuturEdge'],
    ['Nova Systems', 'Emerald Bay', 'Titan Works', 'CrestLine', 'VividArch', 'PulseMedia'],
    ['Skyward Inc', 'BrightPath', 'Nexus Group', 'Ironclad Co', 'Starview Labs', 'Mango Creative'],
]

const testimonials = [
    {
        quote: 'We entrusted Realtec Virtual with our architectural walkthrough project and were blown away by the cinematic quality. Their team understood our vision instantly and delivered beyond expectations.',
        name: 'Lakshmi Karanth',
        role: 'Director, BuildCraft Studios',
    },
    {
        quote: 'Their VFX team transformed our corporate video into something that looks like a Hollywood production. The attention to detail and creative direction were absolutely world-class.',
        name: 'Arjun Mehta',
        role: 'Marketing Head, TechVista',
    },
    {
        quote: 'From storyboarding to final delivery, Realtec Virtual was professional, creative, and incredibly fast. They turned around a complete brand film in under three weeks.',
        name: 'Priya Sharma',
        role: 'CEO, NeoMedia Digital',
    },
    {
        quote: 'Working with Realtec Virtual felt like having an in-house creative team. They were always available, proactive with ideas, and truly invested in making our project a success.',
        name: 'Rahul Desai',
        role: 'Product Manager, Vertex AI',
    },
    {
        quote: 'The 3D product visualization they created for our launch campaign was stunning. Our conversion rates jumped 40% after we started using the assets they delivered.',
        name: 'Sneha Patil',
        role: 'Brand Director, Apex Digital',
    },
    {
        quote: 'What impressed me most was their ability to take a vague brief and turn it into something extraordinary. Their motion graphics work is on par with the best agencies globally.',
        name: 'Karthik Nair',
        role: 'Creative Head, Lumina Studios',
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

export default function About() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-hero__title .word', {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: 'power4.out',
                stagger: 0.06,
                delay: 0.3,
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

            gsap.from('.about-goal', {
                scrollTrigger: { trigger: '.about-goal', start: 'top 80%' },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            document.querySelectorAll('.about-photos__grid .parallax-img-wrap').forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 90%' },
                    y: 50,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                })
            })

            gsap.from('.about-statement', {
                scrollTrigger: { trigger: '.about-statement', start: 'top 80%' },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            // Testimonials — individual triggers per card
            document.querySelectorAll('.testimonial-card').forEach((card) => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 90%' },
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                })
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Hero — dark bg */}
            <section className="about-hero section-warm">
                <div className="container about-hero__inner">
                    <h1 className="about-hero__title">
                        <span className="word">Creativity</span>{' '}
                        <span className="word">meets</span>{' '}
                        <span className="word">technology</span>
                    </h1>
                    <p className="about-hero__desc">
                        We're a team of filmmakers, animators, and VFX artists on a mission
                        to create visual experiences that leave a lasting impact.
                    </p>
                </div>
            </section>

            {/* Photo Strip */}
            <section className="about-photo-strip parallax-img-wrap">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=500&fit=crop&q=80"
                    alt="Creative team at work"
                    className="about-photo-strip__image parallax-img"
                    loading="lazy"
                />
            </section>

            {/* Our Goal */}
            <section className="about-goal section-white">
                <div className="container about-goal__inner">
                    <div className="about-goal__label">
                        <span className="overline">Our Goal</span>
                    </div>
                    <div className="about-goal__content">
                        <p className="text-large">
                            We are a creative video and animation studio based in Bengaluru,
                            specializing in impactful visual storytelling that helps businesses
                            grow through high-quality visual solutions.
                        </p>
                        <p>
                            Our mission is to help businesses grow through cinema-grade video
                            production, immersive 3D visualization, captivating 2D animation,
                            and cutting-edge visual effects. We believe in creative excellence
                            with zero compromises. Every project we take on gets the same level
                            of dedication — whether it's a startup's first explainer or a
                            multinational's brand campaign.
                        </p>
                    </div>
                </div>
            </section>

            {/* Photo Grid */}
            <section className="about-photos section-white">
                <div className="container">
                    <div className="about-photos__grid">
                        <div className="parallax-img-wrap">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&q=80"
                                alt="Studio workspace"
                                loading="lazy"
                                className="parallax-img"
                            />
                        </div>
                        <div className="parallax-img-wrap about-photos__tall">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=800&fit=crop&q=80"
                                alt="Team collaboration"
                                loading="lazy"
                                className="parallax-img"
                            />
                        </div>
                        <div className="parallax-img-wrap">
                            <img
                                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&q=80"
                                alt="Creative workspace"
                                loading="lazy"
                                className="parallax-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bold Statement */}
            <section className="about-statement section-white">
                <div className="container">
                    <h2 className="about-statement__text">
                        Simply put, we dare what others don't
                    </h2>
                    <p className="about-statement__desc">
                        Our vision is to become a trusted creative partner for innovative
                        storytelling. We push boundaries, challenge norms, and create visuals
                        that leave lasting impressions. Every frame we craft is a testament to
                        our commitment to excellence — and our refusal to settle for "good enough."
                    </p>
                </div>
            </section>

            {/* Clients */}
            <section className="about-clients section-warm">
                <div className="container">
                    <p className="about-clients__heading overline">
                        Trusted by companies across the world
                    </p>
                </div>
                <div className="marquee-container">
                    {clientRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`marquee-row ${rowIndex % 2 === 0 ? 'marquee-row--left' : 'marquee-row--right'}`}
                        >
                            <div className="marquee-row__track">
                                {[...row, ...row].map((client, i) => (
                                    <div key={i} className="client-logo">
                                        {client}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="about-testimonials section-warm">
                <div className="container">
                    <h2 className="about-testimonials__heading">What our clients say</h2>
                    <p className="about-testimonials__desc">
                        Don&apos;t just take our word for it — hear from the brands and teams we&apos;ve worked with.
                    </p>
                    <div className="about-testimonials__grid grid-3">
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="testimonial-card__author">
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta section-dark">
                <div className="cta__bg" />
                <div className="cta__content">
                    <p className="cta__overline">LET'S COLLABORATE</p>
                    <h2 className="cta__text">Have<br />an idea?</h2>
                    <p className="cta__desc">
                        We'd love to hear about your project. Let's create something remarkable together.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-large cta__button">TELL US</Link>
                </div>
            </section>
        </motion.div>
    )
}
