import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'BabyMsp2k ─ developer';
	const description = "Ahoj 👋 já jsem BabyMsp2k, developer";

	return {
		title,
		description,
		canonical: `https://babymsp2k.wtf/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'babymsp2k',
			url: `https://babymsp2k.wtf/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://babymsp2k.wtf/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@babymsp2k',
			site: '@babymsp2k',
		},
		...props,
	};
}
