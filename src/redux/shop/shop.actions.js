import ShopActionTypes from "./shop.types";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collections");

//     dispatch(fetchCollectionsStart());

//     // Observable Pattern
//     // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
//     //   async (snapshot) => {
//     //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//     //     this.props.dispatch(updateCollections(collectionsMap));
//     //     this.setState({ loading: false });
//     //   }
//     // );

//     collectionRef
//       .get()
//       .then((snapshot) => {
//         const collectionsMap = convertCollectionSnapshotToMap(snapshot);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((err) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
