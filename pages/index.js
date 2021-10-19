import React from 'react';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<p>Welcome</p>
			<Link href='/post/1' passHref={true}>
				<p style={{ color: 'blue', cursor: 'pointer' }}>Check Detail Post</p>
			</Link>
		</div>
	);
}
