// ==========================================
// ONN TV - HOMEPAGE
// ==========================================


// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Mobile menu
const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const navMenu =
  document.getElementById("navMenu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});


// Search toggle
const searchButton =
  document.getElementById("searchButton");

const searchArea =
  document.getElementById("searchArea");

searchButton.addEventListener("click", () => {
  searchArea.classList.toggle("show");

  if (searchArea.classList.contains("show")) {
    document.getElementById("searchInput").focus();
  }
});


// Temporary demo news
// Supabase connection will be added in the next step.

const demoNews = [
  {
    title: "ONN TV — Latest News Coming Soon",
    category: "Pakistan",
    excerpt:
      "Your trusted source for the latest news, breaking updates and important stories from Pakistan and around the world.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Latest Pakistan News and Updates",
    category: "Pakistan",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "World News and International Updates",
    category: "World",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Latest Sports News",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Business and Economy Updates",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Technology News and Innovation",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];


// Hero
const heroNews =
  document.getElementById("heroNews");

heroNews.innerHTML = `
  <article class="hero-card">

    <img
      class="hero-image"
      src="${demoNews[0].image}"
      alt="${demoNews[0].title}"
    >

    <div class="hero-info">

      <span class="category">
        ${demoNews[0].category}
      </span>

      <h1 class="hero-title">
        ${demoNews[0].title}
      </h1>

      <p class="hero-excerpt">
        ${demoNews[0].excerpt}
      </p>

      <a href="#" class="read-more">
        Read More →
      </a>

    </div>

  </article>
`;


// Latest News
const latestNews =
  document.getElementById("latestNews");

latestNews.innerHTML =
  demoNews.slice(1).map((news) => {

    return `
      <article class="news-card">

        <img
          class="news-card-image"
          src="${news.image}"
          alt="${news.title}"
        >

        <div class="news-card-content">

          <span class="category">
            ${news.category}
          </span>

          <h3 class="news-card-title">
            ${news.title}
          </h3>

          <div class="news-meta">
            ONN TV • Latest
          </div>

        </div>

      </article>
    `;

  }).join("");


// Trending
const trendingNews =
  document.getElementById("trendingNews");

const trending = demoNews.slice(1, 6);

trendingNews.innerHTML =
  trending.map((news, index) => {

    return `
      <div class="trending-item">

        <div class="trending-number">
          ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="trending-title">
          ${news.title}
        </div>

      </div>
    `;

  }).join("");


// Breaking News
const breakingNews =
  document.getElementById("breakingNews");

breakingNews.textContent =
  "ONN TV — Latest breaking news and important updates coming soon.";


// Search
document
  .getElementById("searchSubmit")
  .addEventListener("click", performSearch);

document
  .getElementById("searchInput")
  .addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
      performSearch();
    }

  });


function performSearch() {

  const query =
    document
      .getElementById("searchInput")
      .value
      .trim();

  if (!query) {
    alert("Please enter a news topic to search.");
    return;
  }

  alert(
    "Search system will be connected to the ONN TV news database in the next step."
  );
}
