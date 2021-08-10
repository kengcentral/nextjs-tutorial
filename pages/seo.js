import Head from 'next/head'

const SeoPage = () => {
    return (<div>
        <Head>
            <title>SEO</title>
            <meta property="og:title" content="My page SEO" key="SEO" />
        </Head>
        SEO
    </div>)
}

export default SeoPage