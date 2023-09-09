import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./styles/main.css";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Crypto from "./pages/Crypto";

import ScrollToTop from "./utils/scrollToTop"

function App() {

	const getLibrary = (provider) => {
		const library = new Web3Provider(provider, 'any');
		library.pollingInterval = 15000;
		return library;
	};

  return (
	<Web3ReactProvider getLibrary={getLibrary}>
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/crypto" element={<Crypto />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	</Web3ReactProvider>	
  );
}

export default App;
