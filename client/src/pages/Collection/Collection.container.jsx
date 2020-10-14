import { connect } from "react-redux";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import { compose } from "redux";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
