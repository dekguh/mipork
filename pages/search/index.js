import SearchResultSection from "../../comps/organisms/SearchResultSection"
import Head from 'next/head';

const SearchPage = () => {
    return (
    <>
        <Head>
            <title>Mipork - Pencarian</title>
        </Head>
        <div className='container margin-top-20 margin-bottom-80'>
            <SearchResultSection />
        </div>
    </>
    )
}

export default SearchPage