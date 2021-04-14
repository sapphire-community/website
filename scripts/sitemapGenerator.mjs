import sitemapGenerator from 'nextjs-sitemap-generator';
import { fileURLToPath } from 'url';

const srcDir = new URL('../src/', import.meta.url);

void sitemapGenerator({
	baseUrl: 'https://sapphirejs.com',
	pagesDirectory: fileURLToPath(new URL('pages/', srcDir)),
	targetDirectory: fileURLToPath(new URL('public/', srcDir)),
	nextConfigPath: fileURLToPath(new URL('next.config.js', srcDir)),
	ignoredPaths: ['[[...page]]']
});
