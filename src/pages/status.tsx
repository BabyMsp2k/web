import { useEffect } from 'react';

export default function StatusPage(): JSX.Element {
	useEffect(() => {
		window.location.href = 'https://status.babymsp2k.wtf';
	}, []);

	return null;
}
