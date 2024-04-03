<script>
  export let title = "Title";
  export let subtitle = "Subtitle";
  export let link = "";
  export let image = "";
</script>

<a class="container" href={link}>
  <div class="grid">
    <img class="image" src="{image}" alt="">
    <h2 class="title">{title}</h2>
    <p class="subtitle">{subtitle}</p>
  </div>
</a>

<style>
  .container {
    position: relative;
    display: block;
    min-height: 120px;

    /* glass */
    backdrop-filter: blur(4px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    padding: 12px;

    /* text */
    user-select: none;
    text-decoration: none;
    color: var(--global-color);
  }
  .grid {
    display: grid;
    grid-template-columns: 30% 1fr; 
  grid-template-rows: 1fr 1fr; 
  grid-template-areas: 
    "image title"
    "image subtitle"; 
    gap: 10px;
  }

  .image {
    grid-area: image;
    
    pointer-events: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    grid-area: title;
  }
  .subtitle {
    grid-area: subtitle;
  }
</style>
