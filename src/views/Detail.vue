<template>
  <div class="all">
    <div v-if="post" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <div v-for="tag in post.tags" :key="tag" class="pill">
        {{ tag }}
      </div>
      <button class="delete" @click="deleteClick">delete</button>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import getPost from "../composables/getPost";
import { useRoute, useRouter } from "vue-router";
import { db } from "../firebase/config";
export default {
  components: { Spinner },
  props: ["id"], //this.$route.parmas.id
  setup(props) {
    let route = useRoute(); // this.$route
    // console.log(route.params.id);
    let { post, error, load } = getPost(route.params.id); //{post,error,load}
    load();
    let router = useRouter();
    let deleteClick = async () => {
      let id = props.id;
      let res = await db.collection("posts").doc(id).delete();
      router.push("/");
    };
    return { post, error, deleteClick };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h2 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h2::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
.delete {
  margin: 30px auto;
}
</style>