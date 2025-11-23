import React from 'react';
import Link from 'next/link';
import { ChevronRight, Book, FileText, Code } from 'lucide-react';
import styles from './page.module.css';

export default function DocsPage() {
    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarGroup}>
                        <h4 className={styles.sidebarTitle}>Getting Started</h4>
                        <Link href="#" className={`${styles.sidebarLink} ${styles.active}`}>Introduction</Link>
                        <Link href="#" className={styles.sidebarLink}>Installation</Link>
                        <Link href="#" className={styles.sidebarLink}>Configuration</Link>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <h4 className={styles.sidebarTitle}>Core Modules</h4>
                        <Link href="#" className={styles.sidebarLink}>Accounting</Link>
                        <Link href="#" className={styles.sidebarLink}>HR & Payroll</Link>
                        <Link href="#" className={styles.sidebarLink}>Inventory</Link>
                        <Link href="#" className={styles.sidebarLink}>CRM</Link>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <h4 className={styles.sidebarTitle}>Development</h4>
                        <Link href="#" className={styles.sidebarLink}>API Reference</Link>
                        <Link href="#" className={styles.sidebarLink}>Custom Apps</Link>
                        <Link href="#" className={styles.sidebarLink}>Contributing</Link>
                    </div>
                </aside>

                {/* Content */}
                <main className={styles.content}>
                    <div className={styles.breadcrumb}>
                        <span>Docs</span>
                        <ChevronRight size={14} />
                        <span>Getting Started</span>
                        <ChevronRight size={14} />
                        <span className="text-primary">Introduction</span>
                    </div>

                    <h1 className={styles.title}>Introduction to Bizaxl</h1>
                    <p className={styles.lead}>
                        Bizaxl is an open-source, modular ERP system designed for simplicity and scalability.
                    </p>

                    <div className={styles.prose}>
                        <p>
                            Whether you are a small business looking for a simple accounting tool or a large enterprise needing a full-fledged ERP, Bizaxl adapts to your needs.
                        </p>

                        <h2>Why Bizaxl?</h2>
                        <ul>
                            <li><strong>Modular:</strong> Install only what you need.</li>
                            <li><strong>Open Source:</strong> 100% free and open source.</li>
                            <li><strong>Scalable:</strong> Built for high performance.</li>
                        </ul>

                        <h2>Quick Links</h2>
                        <div className={styles.quickLinks}>
                            <Link href="#" className={styles.quickLink}>
                                <Book size={24} />
                                <div>
                                    <h3>User Guide</h3>
                                    <p>Learn how to use Bizaxl modules.</p>
                                </div>
                            </Link>
                            <Link href="#" className={styles.quickLink}>
                                <FileText size={24} />
                                <div>
                                    <h3>Developer Docs</h3>
                                    <p>Build custom apps and integrations.</p>
                                </div>
                            </Link>
                            <Link href="#" className={styles.quickLink}>
                                <Code size={24} />
                                <div>
                                    <h3>API Reference</h3>
                                    <p>Complete API documentation.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
