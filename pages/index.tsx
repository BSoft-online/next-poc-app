import { NextPage } from 'next';
import Head from 'next/head';
import { QueryClient, dehydrate } from 'react-query';

import PageContainer from 'components/atoms/PageContainer';
import SearchBar from 'components/orgamisms/SearchBar';
import PeopleList from 'components/orgamisms/PeopleList';
import FeminativeName from 'types/FeminativeName';
import initNames from 'constants/names';
import fetchMultipleAges from 'api/fetchMultipleAges';

type InitProps = {
    names: FeminativeName[];
};

const Home: NextPage<InitProps> = ({ names }) => (
    <>
        <Head>
            <title>Age Matching</title>
        </Head>
        <PageContainer>
            <SearchBar />
            <PeopleList names={ names } />
        </PageContainer>
    </>
);

export async function getStaticProps() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity
            }
        }
    });
    await fetchMultipleAges(initNames.map(({ name }) => name), queryClient);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            names: initNames
        }
    }
}

export default Home;