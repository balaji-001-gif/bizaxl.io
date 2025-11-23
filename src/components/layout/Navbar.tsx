"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>Bizaxl</span>
                    <span className={styles.logoDot}>.io</span>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    <Link href="/products" className={styles.navLink}>Products</Link>
                    <Link href="/solutions" className={styles.navLink}>Solutions</Link>
                    <Link href="/pricing" className={styles.navLink}>Pricing</Link>
                    <Link href="/docs" className={styles.navLink}>Docs</Link>
                    <Link href="/marketplace" className={styles.navLink}>Marketplace</Link>
                </div>

                <div className={styles.desktopActions}>
                    <Link href="/login">
                        <Button variant="ghost" size="sm">Login</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="primary" size="sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileNav}>
                        <Link href="/products" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Products</Link>
                        <Link href="/solutions" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Solutions</Link>
                        <Link href="/pricing" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Pricing</Link>
                        <Link href="/docs" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Docs</Link>
                        <Link href="/marketplace" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Marketplace</Link>
                        <div className={styles.mobileActions}>
                            <Link href="/login" onClick={toggleMobileMenu}>
                                <Button variant="ghost" className="w-full">Login</Button>
                            </Link>
                            <Link href="/contact" onClick={toggleMobileMenu}>
                                <Button variant="primary" className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
