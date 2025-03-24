import React from 'react';
import { Box, Grid, Typography, Flex } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { getTranslation } from '../../utils/getTranslation';
import AssetItem from '../assets-list/asset-item.jsx';

const AssetsList = ({ userAssets }) => {
  const { formatMessage } = useIntl();

  console.log(userAssets, 'userAssets'); // Debugging log to inspect data

  // Check if there are no assets and handle that case
  if (!userAssets || userAssets.length === 0) {
    return (
      <Flex justifyContent="center" padding={5}>
        <Typography variant="omega" textColor="neutral700">
          {formatMessage({
            id: getTranslation('AssetsList.no-assets'), // Add the appropriate translation key for no assets
            defaultMessage: 'No assets found',
          })}
        </Typography>
      </Flex>
    );
  }

  const assets = userAssets?.map((asset) => (
    <Grid.Item col={3} m={4} xs={12} s={6} key={asset.rid}>
      <Box width="100%">
        <AssetItem asset={asset} />
      </Box>
    </Grid.Item>
  ));

  return (
    <Box paddingTop={6} paddingBottom={8}>
      <Grid.Root gap={4}>{assets}</Grid.Root>
    </Box>
  );
};

export default AssetsList;
