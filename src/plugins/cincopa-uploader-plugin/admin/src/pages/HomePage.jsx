import { Layouts, Page } from '@strapi/strapi/admin';
import React, { useEffect, useState } from 'react';
import Header from '../components/header/index';
// import { useIntl } from 'react-intl';
import { Flex, Button } from '@strapi/design-system';
import AssetsList from '../components/assets-list/index';


const HomePage = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  // const [error, setError] = useState(null);
  // const { formatMessage } = useIntl();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.cincopa.com/v2/asset.list.json?api_token=230692iojeswdxdgkmnxklh25rivovgmpc&page=' + page);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      setData((prevData) => {
        return prevData
          ? { ...result, items: [...prevData.items, ...result.items] }
          : result;
      });
      setPage(prevPage => prevPage + 1);
      setPages(result?.items_data.pages_count);
      // console.log(data, 'resssssult');
    } catch (err) {
      // setError(err.message);
    }
  };

  const loadMoreAssets = () => {
    fetchData();
  }
  return (
    <Layouts.Root>
      <Page.Main>
      <Header />
      <Layouts.Content>
        <AssetsList userAssets={data?.items}/>
        <Flex justifyContent="center">
          <Button onClick={loadMoreAssets}>Load More</Button>
        </Flex>
      </Layouts.Content>
      </Page.Main>
    </Layouts.Root>
  );
};

export { HomePage };
