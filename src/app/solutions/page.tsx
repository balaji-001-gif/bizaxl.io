import React from 'react';
import { Factory, Building2, GraduationCap, Stethoscope, ShoppingBag } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

const solutions = [
    {
        title: 'Manufacturing',
        description: 'Streamline production, manage BOMs, and track shop floor operations.',
        icon: Factory,
    },
    {
        title: 'Retail',
        description: 'Manage POS, inventory, and customer loyalty across multiple stores.',
        icon: ShoppingBag,
    },
    {
        title: 'Education',
        description: 'Manage students, courses, fees, and academic records.',
        icon: GraduationCap,
    },
    {
        title: 'Healthcare',
        description: 'Patient management, appointments, and lab results.',
        icon: Stethoscope,
    },
    {
        title: 'Services',
        description: 'Project management, timesheets, and billing for service businesses.',
        icon: Building2,
    },
];

export default function SolutionsPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container text-center">
                    <h1 className={styles.title}>Solutions by Industry</h1>
                    <p className={styles.subtitle}>
                        Tailored workflows for your specific business needs.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {solutions.map((solution) => (
                            <Card key={solution.title} hoverable className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <solution.icon size={40} />
                                </div>
                                <h3 className={styles.cardTitle}>{solution.title}</h3>
                                <p className={styles.cardDesc}>{solution.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
