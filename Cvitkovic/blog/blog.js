const dateFormatter = new Intl.DateTimeFormat("hr-HR", { dateStyle: "long" });
const list = document.getElementById("blog-list");
const empty = document.getElementById("blog-empty");

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const fallbackVisual = (post) => `
  <div class="blog-card-fallback" aria-hidden="true">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V19a2 2 0 0 1-2 2z"/>
    </svg>
    <span>${escapeHtml(post.category || "Savjeti")}</span>
  </div>
`;

const renderPosts = (posts) => {
  if (!posts.length) {
    empty.hidden = false;
    return;
  }

  list.innerHTML = posts
    .map((post) => {
      const image = post.featuredImage
        ? `<img src="${escapeHtml(post.featuredImage)}" alt="">`
        : fallbackVisual(post);

      return `
        <article class="card blog-card reveal visible">
          <a href="/blog/${escapeHtml(post.slug)}" class="blog-card-media">${image}</a>
          <div class="blog-card-body">
            <div class="blog-meta">${escapeHtml(dateFormatter.format(new Date(post.publishDate)))} · ${escapeHtml(post.author || "Fizio Cvitković")}</div>
            <h2><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h2>
            <p>${escapeHtml(post.excerpt || "")}</p>
            <a href="/blog/${escapeHtml(post.slug)}" class="btn btn-outline">Pročitaj više</a>
          </div>
        </article>
      `;
    })
    .join("");
};

fetch("/api/blog-posts")
  .then((response) => response.json())
  .then(renderPosts)
  .catch(() => {
    empty.hidden = false;
    empty.textContent = "Blog se trenutno ne može učitati.";
  });
