import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardAsset,
  CardContent,
  CardTitle,
  CardSubtitle,
} from '@strapi/design-system';

const AssetItem = ({ asset }) => {
  // const { asset, onClick = () => {} } = asset;
  const assetDate = new Date(asset?.uploaded);
  const formattedDate = assetDate.toLocaleString();

  const handleAssetClick = () => {
    onClick(asset);
  };

  return (
      <Card onClick={handleAssetClick}>
        <CardHeader>
          <CardAsset src={asset?.thumbnail?.url} />
        </CardHeader>
        <CardBody>
          <CardContent>
            <CardTitle>{asset.caption || asset.filename}</CardTitle>
            <CardSubtitle>Uploaded: {formattedDate}</CardSubtitle>
          </CardContent>
        </CardBody>
      </Card>
  );
};

export default AssetItem;
