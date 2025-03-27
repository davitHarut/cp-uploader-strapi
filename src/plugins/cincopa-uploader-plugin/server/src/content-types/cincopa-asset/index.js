export default {
  kind: 'collectionType',
  collectionName: 'cincopaAssets',
  info: {
    description: 'Cincopa assets collection type',
    displayName: 'Cincopa Asset',
    singularName: 'cincopa-asset',
    pluralName: 'cincopa-assets',
  },
  pluginOptions: {
    'content-manager': {
      visible: true,
    },
    'content-type-builder': {
      visible: true,
    },
  },
  options: {
    draftAndPublish: false,
  },
  attributes: {
    asset_rid: {
      label: "Asset RID",
      type: 'string',
      required: true,
      configurable: false,
    },
    title: {
      label: "Asset Title",
      type: 'string',
      private: false,
      maxLength: 250,
      configurable: true,
    },
    descriptoion: {
      label: "Asset Description",
      type: 'string',
      private: false,
      maxLength: 400,
      configurable: true,
    },
    notes: {
      label: "Notes",
      type: 'string',
      private: false,
      maxLength: 5000,
      configurable: true,
    },
    related_link_text: {
      label: "Related Link Text",
      type: 'string',
      maxLength: 1000,
      private: false,
      configurable: true,
    },
    related_link_url: {
      label: "Related Link URL",
      type: 'string',
      private: false,
      configurable: true,
    },
    reference_id: {
      label: "Reference ID",
      type: 'string',
      configurable: true,
    },
    uploaded: {
      label: "uploaded",
      type: 'date',
      configurable: true,
    },
  },
};
