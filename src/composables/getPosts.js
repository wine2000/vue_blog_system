import { ref } from "vue";
import { db,timestamp} from "../firebase/config"
let getPosts = () => {
   let posts = ref([]);
   let error = ref("");
   let load = async () => {
      try {
         let res = await db.collection("posts").orderBy('created_at','desc').get()
         posts.value = res.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
            // console.log(doc.id);
         })
         // console.log(res.docs)               

      } catch (err) {
         error.value = err.message;
      }
   };

   return { posts, error, load };
};

export default getPosts;
