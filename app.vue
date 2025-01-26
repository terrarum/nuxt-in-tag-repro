<script setup>
const { data: allPosts } = await useAsyncData('all-posts', () => {
  return queryCollection('blog').all()
})

const { data: postsInTagShow } = await useAsyncData('posts-in-tags-show', () => {
  return queryCollection('blog')
      .where('tags', 'IN', 'show')
      .all()
})

const { data: postsLikeTagShow } = await useAsyncData('posts-like-tags-show', () => {
  return queryCollection('blog')
      .where('tags', 'LIKE', '%show%')
      .all()
})
</script>

<template>
  <div>
    <div>
      <h1>All Posts</h1>
      <div v-for="post in allPosts">
        <div>Title: {{ post.title }}</div>
        <div>Tags: {{ post.tags }}</div>
      </div>
    </div>

    <div>
      <h1>Posts IN tags show</h1>
      <div v-for="post in postsInTagShow">
        <div>Title: {{ post.title }}</div>
        <div>Tags: {{ post.tags }}</div>
      </div>
    </div>

    <div>
      <h1>Posts LIKE tags %show%</h1>
      <div v-for="post in postsLikeTagShow">
        <div>Title: {{ post.title }}</div>
        <div>Tags: {{ post.tags }}</div>
      </div>
    </div>
  </div>
</template>
