import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
        Visit the New Student guide to get started with logging in and enrolling.
      </>
    ),
  },
  {
    title: 'Looking for something?',
    Svg: require('@site/static/img/road-route-map-icon.svg').default,
    description: (
      <>
        Visit the Navigation docs to let us help you find what you're looking for.
      </>
    ),
  },
  {
    title: 'Got questions?',
    Svg: require('@site/static/img/question-mark-circle-outline-icon.svg').default,
    description: (
      <>
        See the contact information at the bottom of this page to reach out to our team.
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