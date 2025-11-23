import React from 'react';
import { Search, Filter, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

const apps = [
    {
        name: 'Payment Gateway',
        category: 'Integrations',
        downloads: '10k+',
        rating: 4.8,
        description: 'Accept payments from Stripe, PayPal, and Razorpay.',
    },
    {
        name: 'Slack Integration',
        category: 'Communication',
        downloads: '5k+',
        rating: 4.9,
        description: 'Get notifications and updates directly in Slack.',
    },
    {
        name: 'Shopify Connector',
        category: 'E-commerce',
        downloads: '8k+',
        rating: 4.7,
        description: 'Sync products, orders, and inventory with Shopify.',
    },
    {
        name: 'Custom Reports',
        category: 'Reporting',
        downloads: '3k+',
        rating: 4.5,
        description: 'Build custom reports and dashboards with ease.',
    },
    {
        name: 'Attendance Bot',
        category: 'HR',
        downloads: '2k+',
        rating: 4.6,
        description: 'Automated attendance tracking via chat.',
    },
    {
        name: 'Google Drive',
        category: 'Integrations',
        downloads: '15k+',
        rating: 4.9,
        description: 'Backup and sync files with Google Drive.',
    },
];

const categories = ['All', 'Integrations', 'HR', 'Finance', 'E-commerce', 'Reporting'];

export default function MarketplacePage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Apps Marketplace</h1>
                    <p className={styles.subtitle}>
                        Extend Bizaxl with powerful apps and integrations.
                    </p>

                    <div className={styles.searchBar}>
                        <Search className={styles.searchIcon} size={20} />
                        <input
                            type="text"
                            placeholder="Search for apps..."
                            className={styles.searchInput}
                        />
                        <Button>Search</Button>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.contentContainer}`}>
                    {/* Sidebar Filters */}
                    <aside className={styles.sidebar}>
                        <div className={styles.filterHeader}>
                            <Filter size={18} />
                            <span>Categories</span>
                        </div>
                        <div className={styles.categories}>
                            {categories.map((cat, index) => (
                                <button
                                    key={cat}
                                    className={`${styles.categoryBtn} ${index === 0 ? styles.activeCategory : ''}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Apps Grid */}
                    <div className={styles.appsGrid}>
                        {apps.map((app) => (
                            <Card key={app.name} hoverable className={styles.appCard}>
                                <div className={styles.appHeader}>
                                    <div className={styles.appIcon} />
                                    <div className={styles.appInfo}>
                                        <h3 className={styles.appName}>{app.name}</h3>
                                        <span className={styles.appCategory}>{app.category}</span>
                                    </div>
                                </div>
                                <p className={styles.appDesc}>{app.description}</p>
                                <div className={styles.appStats}>
                                    <div className={styles.stat}>
                                        <Download size={14} />
                                        <span>{app.downloads}</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <Star size={14} className="text-warning" fill="currentColor" />
                                        <span>{app.rating}</span>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" className="w-full mt-4">Install</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
