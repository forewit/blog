
<script lang="ts">
    import Post from "$lib/Components/Post.svelte";
  
    export let data: { title: string, url: string };
  </script>
  
  <svelte:head>
    <title>{data.title}</title>
  </svelte:head>
  
  <Post markdownURL={data.url} />