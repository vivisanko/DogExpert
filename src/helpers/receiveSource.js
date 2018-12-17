import store from "../index";

export default function receiveStoreField(field) {
  console.log("store", store);
  const allStore = store.getState();
  return { ...allStore[field] };
}
