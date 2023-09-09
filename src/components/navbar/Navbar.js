import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { useWeb3React } from '@web3-react/core';


import './style.css';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	//connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React(); 
	

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>Levkepp</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul>
				
				<li>
				<NavLink
								to="/crypto"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								{web3reactContext.account ? <p>&#127758; {web3reactContext.account.substring(0, 6)}....{web3reactContext.account.substring(web3reactContext.account.length - 5)}</p> : <p>🔴Not connected</p>}
							</NavLink>
							
					</li>
          		</ul>

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Home
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/projects"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Projects
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/crypto"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Crypto
							</NavLink>
						</li>		

						<li className="nav-list__item">
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
