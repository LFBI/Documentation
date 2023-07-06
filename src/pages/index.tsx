import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return(
        <Layout title='Home'>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>

                        <img 
                        className="d-block img-fluid"
                        src={require('@site/static/img/lfbi-crest.png').default}
                        />
                        <div>
                        <h1 className="hero__title">Living Faith Bible Institute</h1>
                        <p className="hero__subtitle">Student Guidebook</p>
                        </div>
            </header>
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}