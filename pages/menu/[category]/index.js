import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CategoryMenuListSection from '../../../comps/organisms/CategoryMenuListSection'
import { JsonDataCategory, JsonDataMenu } from '../../../comps/utils/data/fake';

const CategoryPage = ({ dataMenu, titleCat }) => {
    return (
        <div className='container margin-bottom-80'>
            {<CategoryMenuListSection
                titleSection={titleCat}
                classes='margin-bottom-16 margin-top-16'
                dataMenu={dataMenu}
            />}
        </div>
    )
}

export async function getStaticPaths() {
    const paths = JsonDataCategory.map((data) => ({
        params: { category: data.name }
    }));

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const dataMenu = JsonDataMenu.filter(data => data.typeMenu == params.category);
    const findTitle = JsonDataCategory.find(data => data.name == params.category);

    return {
        props: {
            dataMenu,
            titleCat: findTitle.title
        }
    }
}

export default CategoryPage
