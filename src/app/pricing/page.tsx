import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

const plans = [
    {
        name: 'Basic',
        price: '$0',
        period: '/forever',
        description: 'Perfect for small teams and startups.',
        features: [
            'Up to 5 users',
            'Basic Accounting',
            'CRM & Sales',
            'Community Support',
        ],
        cta: 'Start Free',
        variant: 'outline' as const,
    },
    {
        name: 'Pro',
        price: '$29',
        period: '/user/month',
        description: 'For growing businesses that need more power.',
        features: [
            'Unlimited users',
            'Advanced Accounting',
            'HR & Payroll',
            'Inventory Management',
            'Priority Support',
        ],
        cta: 'Start Trial',
        variant: 'primary' as const,
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations.',
        features: [
            'Dedicated Hosting',
            'Custom Development',
            'SLA Support',
            'On-premise Option',
            'Account Manager',
        ],
        cta: 'Contact Sales',
        variant: 'outline' as const,
    },
];

export default function PricingPage() {
    return (
        <div className={styles.page}>
            <section className={styles.header}>
                <div className="container text-center">
                    <h1 className={styles.title}>Simple, Transparent Pricing</h1>
                    <p className={styles.subtitle}>
                        Start for free, upgrade as you grow. No hidden fees.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {plans.map((plan) => (
                            <Card key={plan.name} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
                                {plan.popular && <div className={styles.badge}>Most Popular</div>}
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.planName}>{plan.name}</h3>
                                    <div className={styles.priceWrapper}>
                                        <span className={styles.price}>{plan.price}</span>
                                        <span className={styles.period}>{plan.period}</span>
                                    </div>
                                    <p className={styles.description}>{plan.description}</p>
                                </div>

                                <div className={styles.features}>
                                    {plan.features.map((feature) => (
                                        <div key={feature} className={styles.feature}>
                                            <Check size={18} className={styles.check} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant={plan.variant} className="w-full">{plan.cta}</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
