import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'New Student?',
    Svg: require('@site/static/img/e-learning-icon.svg').default,
    description: (
      <>
        Visit the New Student guide to log in and enroll for classes.
        <br/>
        <br/>
        <Link className="button button--secondary" to="/docs/category/getting-started">Get started</Link>
      </>
    ),
  },
  {
    title: 'Looking for something?',
    Svg: require('@site/static/img/road-route-map-icon.svg').default,
    description: (
      <>
        Visit the MyLFBI guide to navigating our learning platform.
        <br/>
        <br/>
        <Link className="button button--secondary" to="/docs/category/mylfbi">Explore MyLFBI</Link>  
      </>
    ),
  },
  {
    title: 'Got questions?',
    Svg: require('@site/static/img/question-mark-circle-outline-icon.svg').default,
    description: (
      <>
        Fill out the Help Desk form below for assistance, and we will respond as soon as possible.
        <br/>
        <br/>
        <a class="button button--secondary" href="https://www.cognitoforms.com/mbt3/lfbihelpdesk" target='_blank'>Get Help</a>  
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}