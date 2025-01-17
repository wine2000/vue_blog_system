<template>
  <div class="home">
  
  
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let posts = ref([]);
    let errors=ref("")
    let load = async () => {
      try {
        let response = await fetch("http://localhost:3000/postsmm");
        if (response.status === 404) {
          throw new Error("Not Found URL.");
        }
        let datas=await response.json()
        posts.value=datas
       
      } catch (err) {
        err.value=err.message
      }
    };
    load();
    return { posts,errors };
  },
};
</script>
