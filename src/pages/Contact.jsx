import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import './Contact.css'

const interests = [
    'Video Production',
    '2D Animation',
    '3D Animation',
    'VFX',
    'Walkthrough',
    'Corporate Video',
]

const budgets = ['Under 1L', '1-3L', '3-5L', '5-10L', '10L+']

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

export default function Contact() {
    const [selectedInterests, setSelectedInterests] = useState([])
    const [selectedBudget, setSelectedBudget] = useState(null)

    const toggleInterest = (interest) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        )
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-hero__title .word', {
                y: 80,
                opacity: 0,
                duration: 0.9,
                ease: 'power4.out',
                stagger: 0.06,
                delay: 0.3,
            })

            gsap.from('.contact-hero__desc', {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                delay: 0.6,
            })

            gsap.from('.contact-form__section', {
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                delay: 0.5,
                ease: 'power3.out',
            })
        })
        return () => ctx.revert()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Hero — dark bg */}
            <section className="contact-hero section-warm">
                <div className="container contact-hero__inner">
                    <h1 className="contact-hero__title">
                        <span className="word">Hey!</span>{' '}
                        <span className="word">Tell</span>{' '}
                        <span className="word">us</span>{' '}
                        <span className="word">everything</span>
                    </h1>
                    <p className="contact-hero__desc">
                        Got a project in mind? We would love to hear about it. Fill out the form
                        below and our team will get back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* Form */}
            <section className="contact-form-section">
                <div className="container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Interests */}
                        <div className="contact-form__section">
                            <p className="contact-form__label">I am interested in...</p>
                            <div className="contact-form__chips">
                                {interests.map(interest => (
                                    <button
                                        key={interest}
                                        type="button"
                                        className={`chip ${selectedInterests.includes(interest) ? 'active' : ''}`}
                                        onClick={() => toggleInterest(interest)}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="contact-form__section">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-input"
                                    placeholder="Tell us about your project — what are your goals, timeline, and any references you like?"
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="contact-form__section">
                            <p className="contact-form__label">Project budget (INR)</p>
                            <div className="contact-form__chips">
                                {budgets.map(budget => (
                                    <button
                                        key={budget}
                                        type="button"
                                        className={`chip ${selectedBudget === budget ? 'active' : ''}`}
                                        onClick={() => setSelectedBudget(budget)}
                                    >
                                        {budget}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Attachment */}
                        <div className="contact-form__section">
                            <label className="contact-form__attachment">
                                <span className="contact-form__attachment-icon">📎</span>
                                <span className="contact-form__attachment-text">Add attachment (PDF, images, or reference files)</span>
                                <input type="file" hidden />
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="contact-form__section">
                            <button type="submit" className="btn btn-outline-dark btn-pill contact-form__submit">
                                Send request
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </motion.div>
    )
}
