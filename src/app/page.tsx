import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BarChart3, Users, Box, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Open, Modular, <span className="text-primary">Scalable ERP</span> for Everyone.
            </h1>
            <p className={styles.heroSubtitle}>
              Run your entire business with one platform. Accounting, HR, CRM, Manufacturing, and more—all in one place.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact">
                <Button size="lg" icon={ArrowRight}>Get Started Free</Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg">Read Documentation</Button>
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>10k+</span>
                <span className={styles.statLabel}>Companies</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Open Source</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>50+</span>
                <span className={styles.statLabel}>Modules</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImage}>
              {/* Placeholder for Dashboard Illustration */}
              <div className={styles.dashboardMockup}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDot} />
                  <div className={styles.mockupDot} />
                  <div className={styles.mockupDot} />
                </div>
                <div className={styles.mockupBody}>
                  <div className={styles.mockupSidebar} />
                  <div className={styles.mockupContent}>
                    <div className={styles.mockupChart} />
                    <div className={styles.mockupRow}>
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                      <div className={styles.mockupCard} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className={styles.sectionTitle}>Everything you need to run your business</h2>
            <p className={styles.sectionSubtitle}>
              Bizaxl comes with batteries included. Enable modules as you grow.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <Card hoverable className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <BarChart3 className={styles.featureIcon} size={32} />
              </div>
              <h3 className={styles.featureTitle}>Accounting</h3>
              <p className={styles.featureDesc}>
                Real-time financial reporting, invoicing, and payments.
              </p>
            </Card>

            <Card hoverable className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Users className={styles.featureIcon} size={32} />
              </div>
              <h3 className={styles.featureTitle}>HR & Payroll</h3>
              <p className={styles.featureDesc}>
                Manage lifecycle from onboarding to separation.
              </p>
            </Card>

            <Card hoverable className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Box className={styles.featureIcon} size={32} />
              </div>
              <h3 className={styles.featureTitle}>Inventory</h3>
              <p className={styles.featureDesc}>
                Track stock, manage warehouses, and automate replenishment.
              </p>
            </Card>

            <Card hoverable className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <Globe className={styles.featureIcon} size={32} />
              </div>
              <h3 className={styles.featureTitle}>Website</h3>
              <p className={styles.featureDesc}>
                Build your online presence with a fully integrated website builder.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Ready to transform your business?</h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of companies using Bizaxl to streamline operations.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact">
                <Button size="lg" variant="secondary">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
