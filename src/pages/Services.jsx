import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const servicesList = [
    {
        label: 'Video Production',
        desc: 'Commercials, explainer videos, ad films, corporate content, and cinematic storytelling that moves audiences to action. We handle scripting, direction, cinematography, and editing in-house.',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=500&fit=crop&q=80',
    },
    {
        label: '2D Animation',
        desc: 'Motion graphics, infographics, whiteboard animations, and dynamic visual narratives for brands and businesses. Every animation is crafted to simplify complex ideas and captivate your audience.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=500&fit=crop&q=80',
    },
    {
        label: '3D Animation',
        desc: 'Architectural visualization, interior design renders, real estate walkthroughs, product modeling, and machinery animation. Photorealistic quality that brings your ideas to life before they exist.',
        image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=900&h=500&fit=crop&q=80',
    },
    {
        label: 'Visual Effects',
        desc: 'Green screen compositing, rotoscopy, title animation, CGI integration, rope removal, and post-production magic. Hollywood-grade VFX tailored to your creative vision.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&h=500&fit=crop&q=80',
    },
]

const benefits = [
    {
        icon: '◆',
        title: 'Cinematic Quality',
        desc: 'Every project is treated like a feature film — premium quality with attention to every detail. We never cut corners. From color grading to sound design, every layer of production gets the same care and precision that defines world-class visual work.',
    },
    {
        icon: '◈',
        title: 'Creative Strategy',
        desc: 'We go beyond execution. Before a single frame is shot or rendered, our team dives deep into your brand, audience, and goals. We craft creative strategies that turn ideas into narratives that resonate and drive meaningful engagement.',
    },
    {
        icon: '◇',
        title: 'End-to-End Delivery',
        desc: 'From concept to final render — one team, one vision, zero compromises. Our in-house pipeline covers scripting, storyboarding, production, post-production, and delivery. No outsourcing, no communication gaps, just seamless results.',
    },
    {
        icon: '○',
        title: 'Fast Turnaround',
        desc: 'Our agile production pipeline delivers premium work within tight deadlines. We respect your time without sacrificing quality. Whether you need a quick product video or a full campaign rollout, we scale our process to match your pace.',
    },
    {
        icon: '◉',
        title: 'Dedicated Support',
        desc: 'Every client gets a dedicated project manager and direct access to the creative team. We believe in transparent communication, regular updates, and a collaborative process that keeps you in the loop at every stage.',
    },
    {
        icon: '⬡',
        title: 'Industry Expertise',
        desc: 'With 50+ projects delivered across real estate, tech, healthcare, and entertainment, our team brings deep industry knowledge to every brief. We understand what works for your audience because we have done it before.',
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

export default function Services() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.services-hero__title .word', {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: 'power4.out',
                stagger: 0.06,
                delay: 0.3,
            })

            gsap.from('.services-hero__desc', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                delay: 0.6,
            })

            // Service showcase rows
            document.querySelectorAll('.service-showcase').forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 85%' },
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                })
            })

            // Image parallax
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

            document.querySelectorAll('.benefit-card').forEach((card) => {
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
            {/* Hero — light warm background */}
            <section className="services-hero section-warm">
                <div className="container services-hero__inner">
                    <h1 className="services-hero__title">
                        <span className="word">Going</span>{' '}
                        <span className="word">beyond</span>{' '}
                        <span className="word">what is</span>{' '}
                        <span className="word">possible</span>
                    </h1>
                    <p className="services-hero__desc">
                        We combine strategy, design, and technology to deliver cinematic-quality
                        visuals that elevate your brand and move audiences. Every project is an
                        opportunity to break creative boundaries.
                    </p>
                </div>
            </section>

            {/* Services List — with images */}
            <section className="services-list section-white">
                <div className="container">
                    <h2 className="services-list__heading">Our solutions</h2>
                    <p className="services-list__desc">
                        Each service is tailored to your creative vision. We work closely with you
                        from ideation to final delivery — ensuring every frame matters.
                    </p>
                    <div className="services-list__items">
                        {servicesList.map((service, i) => (
                            <div key={i} className="service-showcase">
                                <div className="service-showcase__info">
                                    <span className="service-showcase__number">0{i + 1}</span>
                                    <h3 className="service-showcase__label">{service.label}</h3>
                                    <p className="service-showcase__desc">{service.desc}</p>
                                    <Link to="/contact" className="btn-pill">Get in touch</Link>
                                </div>
                                <div className="service-showcase__visual parallax-img-wrap">
                                    <img
                                        src={service.image}
                                        alt={service.label}
                                        loading="lazy"
                                        className="parallax-img"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits — warm background */}
            <section className="benefits section-warm">
                <div className="container">
                    <h2 className="benefits__heading">Why choose Realtec Virtual</h2>
                    <p className="benefits__desc">
                        We are not just another production house. Here is what makes working with us different.
                    </p>
                    <div className="benefits__stats">
                        <div className="stat-item">
                            <span className="stat-item__number">50+</span>
                            <span className="stat-item__label">Projects Delivered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-item__number">30+</span>
                            <span className="stat-item__label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-item__number">8+</span>
                            <span className="stat-item__label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-item__number">15+</span>
                            <span className="stat-item__label">Industry Awards</span>
                        </div>
                    </div>
                    <div className="benefits__grid grid-2">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="benefit-card">
                                <span className="benefit-card__icon">{benefit.icon}</span>
                                <h3 className="benefit-card__title">{benefit.title}</h3>
                                <p className="benefit-card__desc">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta section-dark">
                <div className="cta__bg" />
                <div className="cta__content">
                    <p className="cta__overline">LET US WORK TOGETHER</p>
                    <h2 className="cta__text">Have<br />an idea?</h2>
                    <p className="cta__desc">
                        Share your project vision and let us create something extraordinary together.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-large cta__button">TELL US</Link>
                </div>
            </section>
        </motion.div>
    )
}
