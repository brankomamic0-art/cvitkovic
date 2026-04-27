const postEl = document.getElementById("post");
const empty = document.getElementById("post-empty");
const slug = decodeURIComponent(window.location.pathname.split("/").filter(Boolean).pop() || "");
const dateFormatter = new Intl.DateTimeFormat("hr-HR", { dateStyle: "long" });

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const paragraphs = (content = "") =>
  content
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll("\n", "<br>")}</p>`)
    .join("");

fetch(`/api/blog-posts/${slug}`)
  .then((response) => {
    if (!response.ok) throw new Error("Not found");
    return response.json();
  })
  .then((post) => {
    document.title = `${post.title} - Fizio Cvitković`;
    document.querySelector('meta[name="description"]').setAttribute("content", post.excerpt || post.title);
    document.getElementById("post-category").textContent = post.category || "Savjeti";
    document.getElementById("post-date").textContent = dateFormatter.format(new Date(post.publishDate));
    document.getElementById("post-author").textContent = post.author || "Fizio Cvitković";
    document.getElementById("post-title").textContent = post.title;

    if (post.featuredImage) {
      document.getElementById("post-image").src = post.featuredImage;
      document.getElementById("post-image").alt = post.title;
      document.getElementById("post-image-wrap").hidden = false;
    }

    document.getElementById("post-tags").innerHTML = (post.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
    document.getElementById("post-content").innerHTML = paragraphs(post.content);
    postEl.hidden = false;
  })
  .catch(() => {
    empty.hidden = false;
  });
