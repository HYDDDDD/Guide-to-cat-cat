import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase-config";

export const collectionMessagesRef1 = collection(db, "messagesRoom1");
export const collectionTotalUser = collection(db, "users");
export const currentMessageQuery = query(
  collectionMessagesRef1,
  orderBy("timestamp", "asc"),
  limit(12)
);
