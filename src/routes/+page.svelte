<script lang="ts">
  import Card from "$lib/Components/Card.svelte";
  import { base } from "$app/paths";

  let posts = [
    {
    title: "The Power of Prayer",
    subtitle: "Discover the transformative impact of prayer in your life. Learn how consistent prayer can bring peace, healing, and guidance.",
    image: "https://source.unsplash.com/featured/?prayer,bible",
    link: `${base}/the-seasons`,
  },
  {
    title: "Grace Unleashed",
    subtitle: "Explore the boundless grace offered by God. Dive into stories of redemption, forgiveness, and second chances.",
    image: "https://source.unsplash.com/featured/?grace,light",
    link: `${base}/the-seasons`,
  },
  {
    title: "Walking by Faith",
    subtitle: "Journey through life with unwavering faith. Find inspiration in biblical examples of faithfulness and trust.",
    image: "https://source.unsplash.com/featured/?faith,path",
    link: `${base}/the-seasons`,
  },
  {
    title: "Hope in the Storm",
    subtitle: "When life's tempests rage, find hope in God's promises. Discover how faith can anchor your soul.",
    image: "https://source.unsplash.com/featured/?hope,storm",
    link: `${base}/the-seasons`,
  },
  {
    title: "Love Unconditional",
    subtitle: "Exploring the depth of God's love for humanity. Reflect on the sacrificial love exemplified by Jesus.",
    image: "https://source.unsplash.com/featured/?love,cross",
    link: `${base}/the-seasons`,
  },
  {
    title: "Forgiveness Frees",
    subtitle: "Unpacking the liberating power of forgiveness. Learn how extending grace can heal wounded hearts.",
    image: "https://source.unsplash.com/featured/?forgiveness,healing",
    link: `${base}/the-seasons`,
  },
  {
    title: "Faithfulness Rewarded",
    subtitle: "Stories of unwavering loyalty and God's faithfulness. Encouragement for those enduring trials.",
    image: "https://source.unsplash.com/featured/?faithfulness,loyalty",
    link: `${base}/the-seasons`,
  },
  {
    title: "The Prodigal's Return",
    subtitle: "A tale of redemption and reconciliation. How God welcomes us back with open arms.",
    image: "https://source.unsplash.com/featured/?prodigal,return",
    link: `${base}/the-seasons`,
  },
  {
    title: "Wisdom's Call",
    subtitle: "Seeking divine wisdom in a chaotic world. Insights from the book of Proverbs.",
    image: "https://source.unsplash.com/featured/?wisdom,book",
    link: `${base}/the-seasons`,
  },
  {
    title: "Healing Waters",
    subtitle: "Exploring the symbolism of water in the Bible. From baptism to spiritual renewal.",
    image: "https://source.unsplash.com/featured/?water,baptism",
    link: `${base}/the-seasons`,
  },
  {
    title: "Surrendered Heart",
    subtitle: "The beauty of yielding to God's will. Surrendering our plans for His purpose.",
    image: "https://source.unsplash.com/featured/?surrender,heart",
    link: `${base}/the-seasons`,
  },
  {
    title: "Promises Fulfilled",
    subtitle: "Tracing God's faithfulness through fulfilled prophecies. The hope found in Messianic promises.",
    image: "https://source.unsplash.com/featured/?promises,fulfilled",
    link: `${base}/the-seasons`,
  },
  {
    title: "Light in Darkness",
    subtitle: "Finding hope in Christ's light. Overcoming despair through His presence.",
    image: "https://source.unsplash.com/featured/?light,darkness",
    link: `${base}/the-seasons`,
  },
  {
    title: "Living Sacrifice",
    subtitle: "What it means to offer our lives as living sacrifices. Reflections on Romans 12:1.",
    image: "https://source.unsplash.com/featured/?sacrifice,altar",
    link: `${base}/the-seasons`,
  },
  {
    title: "Red Sea Moments",
    subtitle: "Navigating life's impossible situations. Trusting God when the sea seems unpassable.",
    image: "https://source.unsplash.com/featured/?red-sea,miracle",
    link: `${base}/the-seasons`,
  }
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
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 13px;
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
