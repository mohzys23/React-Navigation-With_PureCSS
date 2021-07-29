import React, { useState } from "react";
import Button from "../button";
import { MenuItems } from "../menu";
import "./navbar.css";

export default function Navbar() {
	const [clicked, setClicked] = useState(false);
	const handleToggle = () => {
		setClicked(!clicked);
	};
	return (
		<nav className="MenuItems">
			<h1 className="menu-logo">
				Moses <i className="fab fa-adn"></i>
			</h1>
			<div className="menu-icon" onClick={handleToggle}>
				<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={!clicked ? "nav-li" : "nav-li active"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.cName} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
				<button className="btn-mobile">Sign up</button>
			</ul>
			<Button className="btn-active">Sign up</Button>
		</nav>
	);
}
