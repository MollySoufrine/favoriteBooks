import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getBook = (id) => {
  const book = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore
        .collection("books")
        .doc(id)
        .get();
      if (!res.exists) {
        throw Error("That book does not exist");
      }
      postMessage.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { book, error, load };
};

export default getBook;
