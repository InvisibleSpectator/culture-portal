import React from 'react';

import { Logo } from './logo';
import { LngSwitch } from './lngSwitch'
import { Link } from 'react-router-dom';
import { NavPoint } from './navPoint';
import { withTranslation } from 'react-i18next';
import { Button } from '@core/button';

import './header.scss';


const Header = ({ t }) => {
	return (
		<header className="header">
			<div className="container-fluid">
				<nav className="nav justify-content-between">
					<Link className="logo-link" to="/">
						<Logo />
					</Link>
					<Link className="header-link" to="/">
						<NavPoint text={t('controls:mainPage')} />
					</Link>
					<Link className="header-link" to="/search">
						<NavPoint text={t('controls:search')} />
					</Link>
					<Link className="header-link" to="/team">
						<NavPoint text={t('controls:team')} />
					</Link>
					<Link className="header-link" to="/styleguide">
						<NavPoint text={t('controls:styleguide')} />
					</Link>
					<Link className="header-link" to="/worklog">
						<NavPoint text={t('controls:worklog')} />
					</Link>
					<LngSwitch />
					<Button className="header-btn" />
				</nav>
			</div>
		</header>
	)
};

export default withTranslation()(Header);