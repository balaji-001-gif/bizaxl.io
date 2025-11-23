import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container text-center">
                    <h1 className={styles.title}>Get in Touch</h1>
                    <p className={styles.subtitle}>
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.container}`}>
                    <div className={styles.grid}>
                        {/* Contact Info */}
                        <div className={styles.info}>
                            <Card className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>Contact Information</h3>
                                <div className={styles.infoItem}>
                                    <Mail className={styles.icon} size={20} />
                                    <span>hello@bizaxl.io</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <Phone className={styles.icon} size={20} />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <MapPin className={styles.icon} size={20} />
                                    <span>
                                        123 Innovation Dr,<br />
                                        Tech City, TC 90210
                                    </span>
                                </div>
                            </Card>

                            <div className={styles.mapWrapper}>
                                {/* Map Placeholder */}
                                <div className={styles.map}>
                                    <MapPin size={48} className="text-primary" />
                                    <span>Map Integration</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card className={styles.formCard}>
                            <h3 className={styles.formTitle}>Send us a message</h3>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input type="text" id="name" className={styles.input} placeholder="Your name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input type="email" id="email" className={styles.input} placeholder="you@company.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject" className={styles.label}>Subject</label>
                                    <select id="subject" className={styles.select}>
                                        <option value="">Select a topic</option>
                                        <option value="sales">Sales Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea id="message" className={styles.textarea} rows={5} placeholder="How can we help?"></textarea>
                                </div>
                                <Button type="submit" className="w-full" icon={Send}>Send Message</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
