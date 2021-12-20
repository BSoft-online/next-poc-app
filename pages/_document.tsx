import BaseDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends BaseDocument {
    render(): JSX.Element {
        return (
            <Html lang="pl">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;