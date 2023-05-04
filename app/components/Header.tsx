import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
	// const pathname = usePathname();
	const links = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Login',
			href: '/site/login',
		},
		{
			name: 'Register',
			href: '/site/register',
		},
	];
	return (
		<div className='bg-slate-300 h-heightHeader text-black justify-center flex items-center'>
			<div className='container'>
				{links.map((link) => {
					// const isActive = pathname.startsWith(link.href);
					return (
						<Link
							className=' px-4 py-2 '
							// className={isActive ? 'text-blue' : 'text-black'}
							href={link.href}
							key={link.name}
						>
							{link.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
