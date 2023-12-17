import {NavLink} from "react-router-dom";
import style from "./Nav.module.css"

const navItems = [
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'Project',
		path: '/AboutProject'
	},
	{
		label: 'Author',
		path: '/AboutAuthor'
	}
]

const Nav = () => {
	return (
			<section className={style.navSection}>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className={style.nav}>
								{navItems.map(({path, label}) => (
										<NavLink
												key={path}
												to={path}
												className={({ isActive }) => {
											return `${style.navItem} ${isActive ? style.active : ''}`
										}}
										>
											{label}
										</NavLink>
								))}
							</nav>
						</div>
					</div>
				</div>
			</section>
	);
};

export default Nav;