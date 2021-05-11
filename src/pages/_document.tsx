import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                    < link
                        rel=" stylesheet "
                        href=" https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css "
                        integrity=" sha384-B0vP5xmATw1 + K9KRQjQERJvTumQW0nPEUqvOUF6Lp + JQqqvF6Lp3Jouq2FUF6Lp / ZnPqUq2F6Lp / ZnPqUq2F6lC "
                        crossOrigin=" anônimo "
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}