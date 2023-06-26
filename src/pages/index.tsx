import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return(
        <Layout title='Home'>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Living Faith Bible Institute</h1>
                <p className="hero__subtitle">Student Guidebook</p>
            </div>
            </header>
            {/* <Link
            className="button button--secondary button--lg"
            to="/docs/category/new-students">
                    New Student Guide
            </Link> */}
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}