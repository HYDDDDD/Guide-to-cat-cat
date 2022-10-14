import { collection, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase-config";

export const collectionMessagesRef1 = collection(db, "messagesRoom1");
export const currentMessageQuery = query(
  collectionMessagesRef1,
  orderBy("timestamp", "asc"),
  limit(12)
);

export const collectionTotalUser = collection(db, "users");

export const collectionPosts = collection(db, "posts");
export const postsQuery = query(collectionPosts, orderBy("timestamp", "desc"));

export const collectionComments = collection(db, "comments");
export const commentQuery = query(
  collectionComments,
  orderBy("timestamp", "asc"),
  limit(12)
);

export const collectionLike = collection(db, "likes");

export const collectionProducts = collection(db, "products");

export const collectionCart = collection(db, "cart");
