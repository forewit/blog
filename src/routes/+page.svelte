<script>
  import Card from "$lib/Components/Card.svelte";
</script>

<div id="container">
  <h1 class="title">Jessica Helen Anderson</h1>
  <div class="carousell">
    <input type="radio" name="slider" id="item-1" checked />
    <input type="radio" name="slider" id="item-2" />
    <input type="radio" name="slider" id="item-3" />
    <div class="cards">
      <label class="card" for="item-1" id="post-1">
        <img src="images/flowers.jpg" alt="post" />
      </label>
      <label class="card" for="item-2" id="post-2">
        <img src="images/baby.jpg" alt="post" />
      </label>
      <label class="card" for="item-3" id="post-3">
        <img src="images/road.jpg" alt="post" />
      </label>
    </div>
  </div>
  <div class="info">
    <Card></Card>
  </div>
</div>

<style>
  #container {
    width: 100%;
    height: 100%;

    background-image: url("images/field-background.jpg");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 10px;
  }
  .title {
    padding: 20px;
    padding-bottom: 30px;
    text-align: center;
  }

  input[type="radio"] {
    display: none;
  }

  .card {
    position: absolute;
    width: 70%;

    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform 0.4s ease;
    cursor: pointer;

    
  }

  .carousell {
    width: 100%;
    max-width: 800px;
    max-height: 600px;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .cards {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    opacity: 0.9;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    -o-object-fit: cover;
    object-fit: cover;
  }

  #item-1:checked ~ .cards #post-3,
  #item-2:checked ~ .cards #post-1,
  #item-3:checked ~ .cards #post-2 {
    transform: translatex(-30%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
  }

  #item-1:checked ~ .cards #post-2,
  #item-2:checked ~ .cards #post-3,
  #item-3:checked ~ .cards #post-1 {
    transform: translatex(30%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
  }

  #item-1:checked ~ .cards #post-1,
  #item-2:checked ~ .cards #post-2,
  #item-3:checked ~ .cards #post-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;
  }
  #item-1:checked ~ .cards #post-1 img,
  #item-2:checked ~ .cards #post-2 img,
  #item-3:checked ~ .cards #post-3 img {
    box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
  }

  .info {
    height: 150px;
    padding-bottom: 30px;
    border-radius: 8px;
    min-width: 320px;
  }
</style>
