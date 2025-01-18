
<template>
  <div class="home">
          <div v-if="error">
              {{error}}
          </div>
          <div v-if="posts.length>0" class='layout'>
           <div>  <PostLists :posts="posts"></PostLists></div>
            <div> <TagCloud  :posts="posts"></TagCloud></div>
          </div>
          <div v-else>
              <Spinner></Spinner>
          </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostLists from '../components/PostLists'
import getPosts from "../composables/getPosts"
import TagCloud from '@/components/TagCloud.vue'

export default {
  components: {
    Spinner, PostLists,
    TagCloud },
    setup(){
      // composable function
      let {posts,error,load}=getPosts()//{posts,error,load}
      
      load();

      return {posts,error};
    }
}
</script>
<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap:20px
  }
</style>
