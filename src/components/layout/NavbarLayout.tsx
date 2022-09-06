import { Outlet } from 'react-router-dom';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const classes = {
	dashboard: 'lg:grid lg:grid-cols-[224px_minmax(700px,_1fr)] w-full lg:min-h-screen',
	container: 'w-full h-full lg:p-8',
	content: 'flex flex-col w-full h-full bg-[#1B1D1F] lg:rounded-2xl px-7 py-5',
};

const NavbarLayout = () => {
	return (
		<div className={classes.dashboard}>
			<div className='block lg:hidden'>
				<NavbarMobile />
			</div>
			<div className='hidden lg:block'>
				<NavbarDesktop />
			</div>
			<main className={classes.container}>
				<div className={classes.content}>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default NavbarLayout;