import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinksCol1 = [
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Company', path: '/about' },
]

const footerLinksCol2 = [
    { label: 'Contact', path: '/contact' },
]

const socialLinks = [
    { label: 'Instagram', url: '#', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg> },
    { label: 'YouTube', url: '#', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="4" /><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" /></svg> },
    { label: 'LinkedIn', url: '#', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5c0-1.5 1-2 2-2s2 .5 2 2v5" strokeLinecap="round" /></svg> },
    { label: 'Behance', url: '#', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><text x="2" y="17" fontSize="14" fontWeight="700" fontFamily="sans-serif">Bē</text></svg> },
    { label: 'Dribbble', url: '#', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /></svg> },
]

export default function Footer() {
    return (
        <footer className="footer">
            {/* Top Section */}
            <div className="footer__top">
                <div className="footer__left">
                    {/* Contact Pills */}
                    <div className="footer__pills">
                        <a href="mailto:hello@realtecvirtual.com" className="footer__pill">
                            hello@realtecvirtual.com
                        </a>
                        <a href="tel:+919876543210" className="footer__pill">
                            +91 98765 43210
                        </a>
                    </div>

                    {/* Addresses side by side */}
                    <div className="footer__addresses">
                        <div className="footer__address">
                            <span className="footer__address-label">MAIN OFFICE</span>
                            <p>123 Creative Lane<br />Koramangala, Bengaluru 560095</p>
                        </div>
                        <div className="footer__address">
                            <span className="footer__address-label">SECOND OFFICE</span>
                            <p>45 Innovation Hub<br />Indiranagar, Bengaluru 560038</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="footer__nav">
                    <div className="footer__nav-col">
                        {footerLinksCol1.map((link) => (
                            <Link key={link.path} to={link.path} className="footer__nav-link">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="footer__nav-col">
                        {footerLinksCol2.map((link) => (
                            <Link key={link.path} to={link.path} className="footer__nav-link">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <a href="#" className="footer__privacy">Privacy Policy</a>
                    <span className="footer__copyright">2026, Realtec Virtual</span>
                </div>
                <div className="footer__socials">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            className="footer__social-icon"
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {social.svg}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
