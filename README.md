# Next.js Meta Example

Check the [Pages Folder](https://github.com/firmnardians/next-js-meta-example/tree/main/pages) for more details.

## Usage/Examples

```javascript
import Head from 'next/head';

function MetaPost({ title, description }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={`${description} `} />

			<meta property='og:title' content={`${title} - ${description} - Example.com`} />
			<meta property='og:description' content={`${title} - ${description} - Example.com`} />

			<meta name='twitter:title' content={`${title} - ${description} - Example.com`} />
			<meta name='twitter:description' content={`${title} - ${description} - Example.com`} />
		</Head>
	);
}

export default function Post({ data }) {
	const { title, body, id } = data;
	return (
		<div>
			<MetaPost title={title} description={body} />
			<p>Id: {id}</p>
			<p>Title: {title}</p>
			<p>Description: {body}</p>
		</div>
	);
}

// Get Meta
Post.getInitialProps = async ({ query }) => {
	try {
		const { post } = query; // get dynamic requests
		const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}posts/${post}`;

		const res = await fetch(url);
		const json = await res.json();
		return { data: json };
	} catch (e) {
		return { data: null };
	}
};
```

## Authors

-   [@firmnardians](https://github.com/firmnardians)
