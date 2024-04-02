<script>
  import { goto } from "$app/navigation";

  export let title = "Title";
  export let subtitle = "Subtitle";
  export let link = "";
  export let image = "";
</script>

<a class="container" href={link}>
  <img src="{image}" alt="">
  <div class="grid">
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
</a>

<style>
  .container {
    /* sizing */
    display: block;
    height: min-content;
    min-height: 200px;

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
    gap: 10px;
  }

  img {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.3;
    object-fit: cover;
  }
</style>
