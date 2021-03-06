import { useState } from 'react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
 
export default function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity
            }
        }
    }));

    return (
        <QueryClientProvider client={ queryClient }>
            <Hydrate state={ pageProps.dehydratedState }>
            <Component { ...pageProps } />
            </Hydrate>
        </QueryClientProvider>
    )
}