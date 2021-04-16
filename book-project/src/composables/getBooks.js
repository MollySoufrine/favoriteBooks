import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getBooks = () => {
  const books = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("books").get();
      console.log(res);

      //   books.value = res.docs.map((doc) => {
      //     console.log(doc.data());
      //     return { ...doc.data(), id: doc.id };
      //   });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { books, error, load };
};

export default getBooks;
