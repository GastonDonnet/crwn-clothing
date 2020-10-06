import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../../components/CollectionPreview/CollectionPreview";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./CollectionsOverview.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const setStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
});

export default connect(setStateToProps)(CollectionsOverview);
