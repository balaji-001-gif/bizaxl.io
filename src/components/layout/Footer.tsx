import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoText}>Bizaxl</span>
                            <span className={styles.logoDot}>.io</span>
                        </Link>
                        <p className={styles.tagline}>
                            Open, Modular, Scalable ERP for Everyone.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                            <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialLink}><Github size={20} /></a>
                            <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>Product</h4>
                            <Link href="/products" className={styles.link}>Accounting</Link>
                            <Link href="/products" className={styles.link}>HRMS</Link>
                            <Link href="/products" className={styles.link}>CRM</Link>
                            <Link href="/products" className={styles.link}>Manufacturing</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>Resources</h4>
                            <Link href="/docs" className={styles.link}>Documentation</Link>
                            <Link href="/api" className={styles.link}>API Reference</Link>
                            <Link href="/blog" className={styles.link}>Blog</Link>
                            <Link href="/community" className={styles.link}>Community</Link>
                        </div>
                        <div className={styles.column}>
                            <h4 className={styles.heading}>Company</h4>
                            <Link href="/about" className={styles.link}>About Us</Link>
                            <Link href="/careers" className={styles.link}>Careers</Link>
                            <Link href="/contact" className={styles.link}>Contact</Link>
                            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Bizaxl.io. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
