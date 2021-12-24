import {
  Ad_Create_Fail,
  Ad_Create_Request,
  Ad_Create_Reset,
  Ad_Create_Success,
  Ad_Delete_Fail,
  Ad_Delete_Request,
  Ad_Delete_Success,
  Ad_Detail_Fail,
  Ad_Detail_Request,
  Ad_Detail_Success,
  Ad_Filter_Fail,
  Ad_Filter_Request,
  Ad_Filter_Reset,
  Ad_Filter_Success,
  Ad_List_Fail,
  Ad_List_Request,
  Ad_List_Success,
  Ad_Search_Fail,
  Ad_Search_Request,
  Ad_Search_Reset,
  Ad_Search_Success,
  Ad_Update_Fail,
  Ad_Update_Request,
  Ad_Update_Reset,
  Ad_Update_Success,
} from "../constants/adConstants";
import { db } from "../../config/firebase";
export const listAds = () => async (dispatch, getState) => {

  try {
    dispatch({ type: Ad_List_Request });

    const store = getState()
    // console.log("store value current", store)
    const currentUser = store.userLogin?.userInfo?.uid
    // console.log("userId", currentUser)
    let ads = []


    let query = db
      .collection("adds")
      .orderBy("uid")
      .limit(10)


    if (currentUser) {
      query = db
        .collection("adds")
        .where('uid', '!=', currentUser)
        .orderBy("uid")
        .limit(3)
    }

    const data = await query.get();

    // ads = data.docs
    //   .filter((add) => add.data.uid !== ads.uid)
    //   .map((add) => add.data());
    // return ads

    data.forEach((doc) => {
      let ad = doc.data();
      ad = { ...ad, id: doc.id };
      ads.push(ad);
    });

    dispatch({ type: Ad_List_Success, payload: ads });
  } catch (error) {
    console.log(error)
    dispatch({
      type: Ad_List_Fail,
      payload: error.code && error.message ? error.message : error.code,
    });
  }
};



export const listAdsNext = () => async (dispatch) => {
  try {
    dispatch({ type: Ad_List_Request });
    const snapshot = await db.collection("adds").orderBy("date").limit(10).get();
    const last = snapshot.docs[snapshot.docs.length - 1];
    const data = await db.collection('adds')
      .orderBy('date')
      .startAfter(last.data().date)
      .limit(10).get();
    let ads = [];
    data.forEach((doc) => {
      let ad = doc.data();
      ad = { ...ad, id: doc.id };
      ads.push(ad);
    });
    console.log({ data })
    dispatch({ type: Ad_List_Success, payload: ads });
  } catch (error) {
    console.log(error)
    dispatch({
      type: Ad_List_Fail,
      payload: error.code && error.message ? error.message : error.code,
    });
  }
};


export const listAdDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: Ad_Detail_Request });
    const doc = await db.collection("adds").doc(id).get();
    dispatch({ type: Ad_Detail_Success, payload: doc.data() });
  } catch (error) {
    dispatch({
      type: Ad_Detail_Fail,
      payload: error,
    });
  }
};
export const listSearchAds = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: Ad_Search_Reset });
    dispatch({ type: Ad_Search_Request });
    const data = await db.collection("adds").orderBy("name").get();
    let ads = [];
    data.forEach((doc) => {
      let ad = doc.data();
      ad = { ...ad, id: doc.id };
      ads.push(ad);
    });
    let tr = ads;
    let fa = [];

    let re = new RegExp(`${keyword}`);
    tr.map((fad) => fad.name.search(re) > -1 && fa.push(fad));

    dispatch({ type: Ad_Search_Success, payload: fa });
  } catch (error) {
    dispatch({
      type: Ad_Search_Fail,
      payload: error.code && error.message ? error.message : error.code,
    });
  }
};
export const listFilterAds = (filter) => async (dispatch) => {
  try {
    dispatch({ type: Ad_Filter_Reset });
    dispatch({ type: Ad_Filter_Request });
    const ftype = filter.split("=")[0];
    const fvalue = filter.split("=")[1];
    let data = null;
    if (ftype === "cat") {
      data = await db
        .collection("adds")

        .where("category", "==", fvalue)

        .get();
    } else {
      data = await db
        .collection("adds")
        .where("uid", "==", fvalue)
        .get();
    }
    let ads = [];
    data.forEach((doc) => {
      let ad = doc.data();
      ad = { ...ad, id: doc.id };
      ads.push(ad);
    });

    dispatch({ type: Ad_Filter_Success, payload: ads });
  } catch (error) {
    dispatch({
      type: Ad_Filter_Fail,
      payload: error.code && error.message ? error.message : error.code,
    });
  }
};
export const deleteAd = (id) => async (dispatch) => {
  try {
    dispatch({ type: Ad_Delete_Request });
    await db.collection("adds").doc(id).delete();

    dispatch({ type: Ad_Delete_Success });
  } catch (error) {
    dispatch({
      type: Ad_Delete_Fail,
      payload: error,
    });
  }
};
export const createAd = (data) => async (dispatch) => {
  try {
    dispatch({ type: Ad_Create_Reset });
    dispatch({ type: Ad_Create_Request });
    // console.log("data received", data);
    const { uid, name, category, price, city, images, description, condition } =
      data;
    await db.collection("adds").add({
      name,
      category,
      price,
      city,
      description,
      images,
      condition,
      uid,
      date: new Date()
    });

    dispatch({ type: Ad_Create_Success });
  } catch (error) {
    dispatch({
      type: Ad_Create_Fail,
      payload: error,
    });
  }
};
export const updateAd = (data) => async (dispatch) => {
  try {
    dispatch({ type: Ad_Update_Reset });
    dispatch({ type: Ad_Update_Request });
    console.log("data received", data);
    const {
      id,
      uid,
      name,
      category,
      price,
      city,
      images,
      description,
      condition,
    } = data;
    console.log(id, "id for doc");
    await db.collection("adds").doc(id).set({
      name: name,
      category: category,
      price: price,
      city: city,
      description: description,
      images: images,
      condition: condition,
      uid: uid,
    });

    dispatch({ type: Ad_Update_Success });
  } catch (error) {
    dispatch({
      type: Ad_Update_Fail,
      payload: error,
    });
  }
};
