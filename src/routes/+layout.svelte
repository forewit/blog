<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
  />
</svelte:head>

<div class="container">
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .container {
    background-size: cover;
    /* make fullscreen */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    /* fill container */
    position: absolute;
    width: 100%;
    height: 100%;
  }

  /* global CSS variables */
  :global(:root) {
    --global-background: whitesmoke;
    --global-color: whitesmoke;
    --global-transition: 80ms;
  }
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(html, body) {
    background: var(--global-background);
    color: var(--global-color);
  }
</style>
