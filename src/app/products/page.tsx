import React from 'react';
import { BarChart3, Users, Box, Globe, GraduationCap, Stethoscope, ShoppingCart, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

const products = [
    {
        title: 'Accounting',
        description: 'Manage your finances with ease. Invoicing, payments, and reports.',
        icon: BarChart3,
        color: '#3F8CFF',
    },
    {
        title: 'HR & Payroll',
        description: 'Complete human resource management from hiring to retiring.',
        icon: Users,
        color: '#4ED3A9',
    },
    {
        title: 'Inventory',
        description: 'Track stock levels, manage warehouses, and automate replenishment.',
        icon: Box,
        color: '#F59E0B',
    },
    {
        title: 'Website',
        description: 'Build a beautiful website and manage content without code.',
        icon: Globe,
        color: '#8B5CF6',
    },
    {
        title: 'LMS',
        description: 'Learning Management System for schools and corporate training.',
        icon: GraduationCap,
        color: '#EC4899',
    },
    {
        title: 'Healthcare',
        description: 'Manage clinics, patients, appointments, and billing.',
        icon: Stethoscope,
        color: '#EF4444',
    },
    {
        title: 'E-commerce',
        description: 'Sell online with a fully integrated shopping cart and payments.',
        icon: ShoppingCart,
        color: '#10B981',
    },
    {
        title: 'Projects',
        description: 'Track tasks, timesheets, and project profitability.',
        icon: Briefcase,
        color: '#6366F1',
    },
];

export default function ProductsPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container text-center">
                    <h1 className={styles.title}>All Products</h1>
                    <p className={styles.subtitle}>
                        Explore the comprehensive suite of modules designed to run your business.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {products.map((product) => (
                            <Card key={product.title} hoverable className={styles.card}>
                                <div className={styles.iconWrapper} style={{ backgroundColor: `${product.color}15`, color: product.color }}>
                                    <product.icon size={32} />
                                </div>
                                <h3 className={styles.cardTitle}>{product.title}</h3>
                                <p className={styles.cardDesc}>{product.description}</p>
                                <Button variant="ghost" size="sm" className={styles.learnMore}>Learn More</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
