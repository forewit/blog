<script lang="ts">
  import Card from "$lib/Components/Card.svelte";
  import { base } from "$app/paths";

  let posts = [
    {
    title: "Floral Photography: Capturing Nature's Splendor",
    subtitle: "Learning techniques to capture the beauty of flowers through photography.",
    image: "https://source.unsplash.com/featured/?flowers,photography",
    link: `${base}/the-seasons`,
  },
  {
    title: "The Healing Power of Flowers",
    subtitle: "Exploring the therapeutic benefits of floral essences and aromatherapy.",
    image: "https://source.unsplash.com/featured/?flowers,therapy",
    link: `${base}/the-seasons`,
  },
  {
    title: "Floral Fashion: Trends and Inspirations",
    subtitle: "Discovering how flowers influence and inspire the world of fashion.",
    image: "https://source.unsplash.com/featured/?flowers,fashion",
    link: `${base}/the-seasons`,
  },
  {
    title: "Embracing Floral Decor in Your Home",
    subtitle: "Incorporating flowers and botanical elements to enhance your living space.",
    image: "https://source.unsplash.com/featured/?flowers,home",
    link: `${base}/the-seasons`,
  },
  {
    title: "Flowers Around the World: A Cultural Journey",
    subtitle: "Exploring the significance and traditions of flowers in different cultures.",
    image: "https://source.unsplash.com/featured/?flowers,culture",
    link: `${base}/the-seasons`,
  },
  {
    title: "The Art of Ikebana: Japanese Flower Arranging",
    subtitle: "Learning the ancient art of harmonious flower arrangement from Japan.",
    image: "https://source.unsplash.com/featured/?flowers,ikebana",
    link: `${base}/the-seasons`,
  },
  {
    title: "Flower Festivals: Celebrating Nature's Splendor",
    subtitle: "Participating in colorful and joyous festivals dedicated to flowers around the world.",
    image: "https://source.unsplash.com/featured/?flowers,festival",
    link: `${base}/the-seasons`,
  },
  {
    title: "Edible Flowers: Culinary Delights from the Garden",
    subtitle: "Exploring the culinary uses and flavors of edible flowers in cooking.",
    image: "https://source.unsplash.com/featured/?flowers,edible",
    link: `${base}/the-seasons`,
  },
  {
    title: "Preserving Flowers: Techniques for Lasting Beauty",
    subtitle: "Discovering methods to preserve flowers and create long-lasting floral arrangements.",
    image: "https://source.unsplash.com/featured/?flowers,preservation",
    link: `${base}/the-seasons`,
  },
  {
    title: "Flowers in Literature: Symbolism and Inspiration",
    subtitle: "Exploring the role of flowers as symbols and motifs in literature and poetry.",
    image: "https://source.unsplash.com/featured/?flowers,literature",
    link: `${base}/the-seasons`,
  },
  {
    title: "The Language of Flowers: A Historical Perspective",
    subtitle: "Tracing the history and evolution of the symbolic language of flowers.",
    image: "https://source.unsplash.com/featured/?flowers,language",
    link: `${base}/the-seasons`,
  },
  {
    title: "Floral Artistry: Creative Expressions in Flower Arranging",
    subtitle: "Exploring innovative and artistic approaches to floral design and arrangement.",
    image: "https://source.unsplash.com/featured/?flowers,artistry",
    link: `${base}/the-seasons`,
  },
  {
    title: "The Botanical Gardens: A Haven of Natural Splendor",
    subtitle: "Immersing yourself in the beauty and diversity of botanical gardens around the world.",
    image: "https://source.unsplash.com/featured/?flowers,gardens",
    link: `${base}/the-seasons`,
  },
  {
    title: "Flowers in Mythology: Legends and Lore",
    subtitle: "Exploring the mythical and symbolic significance of flowers in ancient myths and legends.",
    image: "https://source.unsplash.com/featured/?flowers,mythology",
    link: `${base}/the-seasons`,
  }
  ];
</script>

<div
  class="grid"
  style="background-image: url('{base}/images/field-background.jpg');"
>
  <h1 class="title">Jessica Helen Anderson</h1>
  <div class="cards">
    {#each posts as post}
    <div class="card">
        <Card
        title={post.title}
        subtitle={post.subtitle}
        link={post.link}
        image={post.image}
      ></Card>
    </div>
    {/each}
  </div>
</div>

<style>
  .grid {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background-size: cover;

    display: grid;
    grid-template-rows: min-content, 1fr;
    justify-items: center;
    gap: 20px;
  }

  .title {
    text-align: center;
  }
  .cards {
    /* hide scrollbar but allow scrolling */
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    padding: 30px;
  }
  .card {
    position: sticky;
    top: 0;
    padding: 10px;
  }
  .cards::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
</style>
