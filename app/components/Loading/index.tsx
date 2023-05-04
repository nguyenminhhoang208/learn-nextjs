import React from 'react';
import './style.css';
export interface ILoadingProps {}

export default function Loading(props: ILoadingProps) {
	return (
		<div className='w-full min-h-screen flex justify-center items-center bg-black'>
			<span className='loader '></span>
		</div>
	);
}
