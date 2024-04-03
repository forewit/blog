
<script lang="ts">
    import Post from "$lib/Components/Post.svelte";
    import { base } from "$app/paths";
  
    export let data: { title: string, url: string };
  </script>
  
  <svelte:head>
    <title>{data.title}</title>
  </svelte:head>
  
  <Post markdownURL={data.url} />
   
<a class="backButton" href="{base}/"><img src="{base}/images/icon.svg" alt="home"></a>

<style>
  .backButton {
    position: absolute;
    bottom: 30px;
    left: 20px;

    width: 70px;
    height: 70px;

    backdrop-filter: blur(4px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
    padding: 5px;

    transition: all var(--global-transition);
  }
  .backButton img {
    width: 100%;
    height: 100%;
  }
  .backButton:hover {
    scale: 1.1;
  }
</style>