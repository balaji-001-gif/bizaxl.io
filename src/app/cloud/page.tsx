import React from 'react';
import { Cloud, Shield, Zap, Server, Database, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

const features = [
    {
        title: 'Managed Hosting',
        description: 'We handle the servers, updates, and backups.',
        icon: Server,
    },
    {
        title: 'High Performance',
        description: 'Optimized for speed with global CDN.',
        icon: Zap,
    },
    {
        title: 'Secure by Default',
        description: 'Enterprise-grade security and compliance.',
        icon: Shield,
    },
    {
        title: 'Automated Backups',
        description: 'Daily backups with one-click restore.',
        icon: Database,
    },
];

export default function CloudPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className="container text-center">
                    <div className={styles.heroIcon}>
                        <Cloud size={64} />
                    </div>
                    <h1 className={styles.title}>Bizaxl Cloud</h1>
                    <p className={styles.subtitle}>
                        The best place to host your Bizaxl sites. Simple, fast, and secure.
                    </p>
                    <div className={styles.heroActions}>
                        <Button size="lg">Start Free Trial</Button>
                        <Button variant="outline" size="lg">View Pricing</Button>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.featuresGrid}>
                        {features.map((feature) => (
                            <Card key={feature.title} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <feature.icon size={32} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-muted">
                <div className="container">
                    <div className={styles.pricingBox}>
                        <div className={styles.pricingHeader}>
                            <h2 className={styles.pricingTitle}>Simple Pricing</h2>
                            <p className={styles.pricingSubtitle}>Pay only for what you use.</p>
                        </div>
                        <div className={styles.pricingGrid}>
                            <Card className={styles.pricingCard}>
                                <h3 className={styles.planName}>Hobby</h3>
                                <div className={styles.price}>$10<span className={styles.period}>/mo</span></div>
                                <p className={styles.planDesc}>For personal projects.</p>
                                <Button variant="outline" className="w-full">Deploy Now</Button>
                            </Card>
                            <Card className={`${styles.pricingCard} ${styles.featured}`}>
                                <div className={styles.badge}>Recommended</div>
                                <h3 className={styles.planName}>Pro</h3>
                                <div className={styles.price}>$25<span className={styles.period}>/mo</span></div>
                                <p className={styles.planDesc}>For growing businesses.</p>
                                <Button variant="primary" className="w-full">Deploy Now</Button>
                            </Card>
                            <Card className={styles.pricingCard}>
                                <h3 className={styles.planName}>Business</h3>
                                <div className={styles.price}>$50<span className={styles.period}>/mo</span></div>
                                <p className={styles.planDesc}>For high-traffic sites.</p>
                                <Button variant="outline" className="w-full">Deploy Now</Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
