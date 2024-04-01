<script>
  export let title = "Title"
  export let subtitle = "Subtitle"
  export let img = "images/icon.svg"
</script>

<div class="container">
  <h1>{title}</h1>
  <p>{subtitle}</p>
</div>

<style>
  .container {
    background: rgba(200, 220, 245, 0.1);
    backdrop-filter: blur(4px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    padding: 12px;
    transition: all 0.2s;
    user-select: none;
    cursor: pointer;
    height: 100%;
  }
</style>
