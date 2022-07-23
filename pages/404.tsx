import Head from 'next/head';

const NotFound = ():JSX.Element => {
    return(
        <>
       <Head>
        <title>404 page</title>
        <meta name="description" content={`This 404 page. Check details below`}/>
       </Head>
        <h1>This page is not alialable</h1>
        </>
    )
}

export default NotFound;