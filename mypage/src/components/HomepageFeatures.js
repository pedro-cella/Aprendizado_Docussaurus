import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Café da Manhã',
    Svg: require('../../static/img/breakfast.svg').default,
    description: (
      <>
        Esse guia visa em receitas de cafés da manhã de todo tipos, como doces e salgados.
      </>
    ),
  },
  {
    title: 'Refeições',
    Svg: require('../../static/img/lunch.svg').default,
    description: (
      <>
        Esse guia trás o focos nas refeições como almoço e jantar.
      </>
    ),
  },
  {
    title: <a href=''>Sobremesas</a>,
    Svg: require('../../static/img/dessert.svg').default,
    description: (
      <>
        Guia voltado para doces e outras sobremesas que podem ser servidas após o almoço ou jantar.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
