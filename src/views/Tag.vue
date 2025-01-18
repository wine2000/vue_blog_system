<template>
  <div class='all'>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="layout">
    <div><PostLists :posts="filteredPosts"></PostLists></div>
    <div><TagCloud :posts="posts"></TagCloud></div>
  </div>
  <div v-else>Loading...</div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
import PostLists from "@/components/PostLists.vue";
import TagCloud from "@/components/TagCloud.vue";

export default {
  components: { PostLists, TagCloud },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let filteredPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });
    return { posts, error, filteredPosts };
  },
};
</script>

<style>
.all{
  max-width: 1200px;
  margin:0 auto
}
</style>