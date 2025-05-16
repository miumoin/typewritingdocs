import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Backend for Frontend only apps',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Platform independent API supports frontend-only applications across web, mobile, and desktop. Unify your data access layer with a single, consistent interface regardless of your chosen framework or environment.
      </>
    ),
  },
  {
    title: 'Functional approach for API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Leveraging functional programming principles, we've designed a clean API for CRUD operations and common database actions. Each operation is a pure function, making your code more predictable, testable, and maintainable.
      </>
    ),
    },
    {
    title: 'AI-Ready Business Workflows',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Typewriting AI is designed to be the backbone of your AI-powered applications. With our API, you can easily integrate AI capabilities into your business workflows, enabling you to build intelligent applications that learn and adapt over time.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
