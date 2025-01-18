<template>
  <h1>Real Time Testing</h1>
  <div v-for='post in posts' :key='post'>
  <h2>{{post.title}}</h2>
  <div>{{post.body}}</div>
  <hr>
  </div>
</template>

<script>
import { ref } from "vue";
import { db } from "../firebase/config";
export default {
  setup() {
    let posts = ref([]);
    db.collection("posts").orderBy('created_at','desc').onSnapshot((snap) => {
      posts.value = snap.docs.map((doc)=>{
            return {...doc.data(),id:doc.id}
      })
    });
    return{posts}
  },
};
</script>

<style>
</style>