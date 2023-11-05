import clsx from 'clsx';
import { memo, type FC } from 'react';
import styles from './Feature.module.css';
import type { FeatureItem } from './Types';

const Feature: FC<FeatureItem> = ({ title, description }) => (
	<div className={clsx('col', 'col--4', styles.feature)}>
		<div className="text--left padding-horiz--md">
			<h3>{title}</h3>
			<div>{description}</div>
		</div>
	</div>
);

export default memo(Feature);
