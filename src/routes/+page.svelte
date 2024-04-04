<script lang="ts">
  import Card from "$lib/Components/Card.svelte";
  import { base } from "$app/paths";

  let posts = [
    {
      title: "Floral Photography: Capturing Nature's Splendor",
      subtitle:
        "Learning techniques to capture the beauty of flowers through photography.",
      image: "https://source.unsplash.com/featured/?flowers,photography",
      link: `${base}/the-seasons`,
    },
    {
      title: "The Healing Power of Flowers",
      subtitle:
        "Exploring the therapeutic benefits of floral essences and aromatherapy.",
      image: "https://source.unsplash.com/featured/?flowers,therapy",
      link: `${base}/the-seasons`,
    },
    {
      title: "Floral Fashion: Trends and Inspirations",
      subtitle:
        "Discovering how flowers influence and inspire the world of fashion.",
      image: "https://source.unsplash.com/featured/?flowers,fashion",
      link: `${base}/the-seasons`,
    },
    {
      title: "Embracing Floral Decor in Your Home",
      subtitle:
        "Incorporating flowers and botanical elements to enhance your living space.",
      image: "https://source.unsplash.com/featured/?flowers,home",
      link: `${base}/the-seasons`,
    },
    {
      title: "Flowers Around the World: A Cultural Journey",
      subtitle:
        "Exploring the significance and traditions of flowers in different cultures.",
      image: "https://source.unsplash.com/featured/?flowers,culture",
      link: `${base}/the-seasons`,
    },
    {
      title: "The Art of Ikebana: Japanese Flower Arranging",
      subtitle:
        "Learning the ancient art of harmonious flower arrangement from Japan.",
      image: "https://source.unsplash.com/featured/?flowers,ikebana",
      link: `${base}/the-seasons`,
    },
    {
      title: "Flower Festivals: Celebrating Nature's Splendor",
      subtitle:
        "Participating in colorful and joyous festivals dedicated to flowers around the world.",
      image: "https://source.unsplash.com/featured/?flowers,festival",
      link: `${base}/the-seasons`,
    },
    {
      title: "Edible Flowers: Culinary Delights from the Garden",
      subtitle:
        "Exploring the culinary uses and flavors of edible flowers in cooking.",
      image: "https://source.unsplash.com/featured/?flowers,edible",
      link: `${base}/the-seasons`,
    },
    {
      title: "Preserving Flowers: Techniques for Lasting Beauty",
      subtitle:
        "Discovering methods to preserve flowers and create long-lasting floral arrangements.",
      image: "https://source.unsplash.com/featured/?flowers,preservation",
      link: `${base}/the-seasons`,
    },
    {
      title: "Flowers in Literature: Symbolism and Inspiration",
      subtitle:
        "Exploring the role of flowers as symbols and motifs in literature and poetry.",
      image: "https://source.unsplash.com/featured/?flowers,literature",
      link: `${base}/the-seasons`,
    },
    {
      title: "The Language of Flowers: A Historical Perspective",
      subtitle:
        "Tracing the history and evolution of the symbolic language of flowers.",
      image: "https://source.unsplash.com/featured/?flowers,language",
      link: `${base}/the-seasons`,
    },
    {
      title: "Floral Artistry: Creative Expressions in Flower Arranging",
      subtitle:
        "Exploring innovative and artistic approaches to floral design and arrangement.",
      image: "https://source.unsplash.com/featured/?flowers,artistry",
      link: `${base}/the-seasons`,
    },
    {
      title: "The Botanical Gardens: A Haven of Natural Splendor",
      subtitle:
        "Immersing yourself in the beauty and diversity of botanical gardens around the world.",
      image: "https://source.unsplash.com/featured/?flowers,gardens",
      link: `${base}/the-seasons`,
    },
    {
      title: "Flowers in Mythology: Legends and Lore",
      subtitle:
        "Exploring the mythical and symbolic significance of flowers in ancient myths and legends.",
      image: "https://source.unsplash.com/featured/?flowers,mythology",
      link: `${base}/the-seasons`,
    },
  ];
</script>

<div
  class="grid"
  style="background-image: url('{base}/images/field-background.jpg');"
>
  <h1 class="title">Jessica Helen Anderson</h1>
  <div class="page">
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
    <div class="verse">
      <blockquote class="quote-card">
        <p>The Spirit of the Lord God is upon me,</p>
        <p class="indent">because the Lord has anointed me</p>
        <p>to bring good news to the poor;</p>
        <p class="indent">he has sent me to bind up the brokenhearted,</p>
        <p>to proclaim liberty to the captives,</p>
        <p class="indent">
          and the opening of the prison to those who are bound;
        </p>
        <p>to proclaim the year of the Lord's favor,</p>
        <p class="indent">and the day of vengeance of our God;</p>
        <p class="indent">to comfort all who mourn;</p>
        <p>to grant to those who mourn in Zion—</p>
        <p class="indent">
          to give them a beautiful headdress instead of ashes,
        </p>
        <p>the oil of gladness instead of mourning,</p>
        <p class="indent">the garment of praise instead of a faint spirit;</p>
        <p>that they may be called oaks of righteousness,</p>
        <p class="indent">
          the planting of the Lord, that he may be glorified.
        </p>
        <p>They shall build up the ancient ruins;</p>
        <p class="indent">they shall raise up the former devastations;</p>
        <p>they shall repair the ruined cities,</p>
        <p class="indent">the devastations of many generations.</p>
        <cite> Isaiah 61:1-4 </cite>
      </blockquote>
    </div>
  </div>
</div>

<style>
  .grid {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background-position: center;
    background-size: cover;

    display: grid;
    grid-template-rows: min-content, 1fr;
    justify-items: center;
    gap: 20px;

    overflow: hidden;
  }

  .title {
    text-align: center;
  }
  .page {
    /* hide scrollbar but allow scrolling */
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: -400px;
  }
  .page::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  .cards {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .card {
    max-width: 400px;
    height: max-content;
  }

  .verse {
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 40px;
    padding-bottom: 420px;
  }
  .quote-card {
    max-width: 500px;
    padding: 30px;
    padding-left: 50px;
    position: relative;
    overflow: hidden;
    min-height: 120px;
  }
  .quote-card p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
  .quote-card p .indent {
    margin-left: 5px;
  }
  .quote-card cite {
    font-size: 16px;
    margin-top: 10px;
    display: block;
    font-weight: 200;
    opacity: 0.8;
  }
  .quote-card:before {
    font-family: Georgia, serif;
    content: "“";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 5em;
    color: rgba(238, 238, 238, 0.8);
    font-weight: normal;
  }
</style>
