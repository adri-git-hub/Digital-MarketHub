const listings = [
  { id: 1, name: "Used Mechanical Keyboard", price: 850, category: "Electronics", condition: "Good", seller: "Mark D.", initials: "MD", rating: "4.8", reviews: 12, active: 8, emoji: "⌨️", created: "Today", featured: true, verified: true, risk: "Low", description: "Used mechanical keyboard in good condition. All keys are working. Minor scratches on the side. Selling because I upgraded to another keyboard." },
  { id: 2, name: "USB-C Hub", price: 450, category: "Electronics", condition: "Like New", seller: "Sarah R.", initials: "SR", rating: "4.9", reviews: 7, active: 3, emoji: "🔌", created: "Today", featured: true, verified: true, risk: "Low", description: "Compact USB-C hub with HDMI and USB ports. Used for one semester and works well." },
  { id: 3, name: "Homemade Cookies", price: 120, category: "Food", condition: "New", seller: "Bea L.", initials: "BL", rating: "4.7", reviews: 9, active: 2, emoji: "🍪", created: "Yesterday", featured: false, verified: true, risk: "Low", description: "Freshly baked chocolate chip cookies. Box of six. Message me to arrange a campus meet-up." },
  { id: 4, name: "Scientific Calculator", price: 600, category: "Electronics", condition: "Good", seller: "Paolo C.", initials: "PC", rating: "4.6", reviews: 5, active: 4, emoji: "🧮", created: "Yesterday", featured: false, verified: true, risk: "Low", description: "Casio scientific calculator, all functions tested. Includes protective cover." },
  { id: 5, name: "Wireless Mouse", price: 300, category: "Electronics", condition: "Good", seller: "Adrian F.", initials: "AF", rating: "4.7", reviews: 13, active: 8, emoji: "🖱️", created: "2 days ago", featured: false, verified: true, risk: "Low", description: "Wireless mouse in good condition. Receiver included. Batteries not included." },
  { id: 6, name: "Secondhand Hoodie", price: 350, category: "Clothing", condition: "Good", seller: "John S.", initials: "JS", rating: "4.4", reviews: 6, active: 3, emoji: "🧥", created: "2 days ago", featured: true, verified: true, risk: "Low", description: "Comfy navy hoodie, size medium. Clean and in good condition, with light wear on the cuffs." },
  { id: 7, name: "Canvas Tote Bag", price: 180, category: "Accessories / Others", condition: "Like New", seller: "Mika T.", initials: "MT", rating: "4.9", reviews: 4, active: 2, emoji: "👜", created: "3 days ago", featured: false, verified: true, risk: "Low", description: "Sturdy canvas tote bag with plenty of space for books and everyday essentials." },
  { id: 8, name: "Brownies (Box of 4)", price: 100, category: "Food", condition: "New", seller: "Bea L.", initials: "BL", rating: "4.7", reviews: 9, active: 2, emoji: "🍫", created: "3 days ago", featured: false, verified: true, risk: "Low", description: "Fudgy homemade brownies, freshly baked. Please message to reserve a box." },
  { id: 9, name: "Black Jacket", price: 500, category: "Clothing", condition: "Good", seller: "Sarah R.", initials: "SR", rating: "4.9", reviews: 7, active: 3, emoji: "🧥", created: "4 days ago", featured: false, verified: true, risk: "Low", description: "Lightweight black jacket, size small. Selling as it no longer fits." },
  { id: 10, name: "Used Textbook: Intro to Programming", price: 250, category: "Accessories / Others", condition: "Fair", seller: "Paolo C.", initials: "PC", rating: "4.6", reviews: 5, active: 4, emoji: "📚", created: "5 days ago", featured: false, verified: true, risk: "Low", description: "Helpful programming textbook with some highlighting. No missing pages." },
  { id: 11, name: "Gaming Laptop — For Parts", price: 2000, category: "Electronics", condition: "Fair", seller: "New account", initials: "NA", rating: "—", reviews: 0, active: 8, emoji: "💻", created: "Today", featured: false, verified: false, risk: "High", flags: ["Price significantly below comparable listings", "New account with many listings", "Advance payment request"], description: "Very cheap, need payment first to reserve. Message me on social media for faster response." },
  { id: 12, name: "Oversized Shirt", price: 250, category: "Clothing", condition: "Like New", seller: "Mika T.", initials: "MT", rating: "4.9", reviews: 4, active: 2, emoji: "👕", created: "6 days ago", featured: false, verified: true, risk: "Low", description: "Relaxed fit oversized shirt, size large. Worn a couple of times." },
  { id: 13, name: "Phone Stand", price: 150, category: "Accessories / Others", condition: "New", seller: "Adrian F.", initials: "AF", rating: "4.7", reviews: 13, active: 8, emoji: "📱", created: "1 week ago", featured: false, verified: true, risk: "Low", description: "Adjustable desktop phone stand. New and still in its packaging." },
  { id: 14, name: "Snack Box", price: 150, category: "Food", condition: "New", seller: "Bea L.", initials: "BL", rating: "4.7", reviews: 9, active: 2, emoji: "🍱", created: "1 week ago", featured: false, verified: true, risk: "Low", description: "A small snack box with assorted treats. Please ask about today's selection." }
];

const categories = [
  { name: "Electronics", icon: "⌨️", hint: "Tech & study essentials" },
  { name: "Clothing", icon: "🧥", hint: "Everyday campus wear" },
  { name: "Food", icon: "🍪", hint: "Snacks & homemade treats" },
  { name: "Accessories / Others", icon: "🎒", hint: "Books, bags & more" }
];
const sellerProfiles = {
  "Adrian F.": { initials: "AF", rating: "4.7", reviews: 13, about: "QCU student seller offering affordable secondhand items and school accessories.", reviewList: [["4.8", "Fast transaction and item was exactly as described.", "Verified purchase · Maria P."], ["4.0", "Easy to communicate with. Meet-up was a little delayed.", "Verified purchase · Ken R."], ["5.0", "Seller was responsive and friendly.", "Unverified · Alex T."]] },
  "Mark D.": { initials: "MD", rating: "4.8", reviews: 12, about: "Student seller sharing useful tech and school essentials with the QCU community.", reviewList: [["5.0", "Keyboard was exactly as described. Smooth meet-up.", "Verified purchase · Bea L."], ["4.5", "Good seller, replied to my questions.", "Verified purchase · Ken R."]] },
  "Sarah R.": { initials: "SR", rating: "4.9", reviews: 7, about: "QCU community member selling items in great condition.", reviewList: [["5.0", "Quick replies and the item was in excellent condition.", "Verified purchase · John S."], ["4.5", "Easy campus meet-up.", "Unverified · Mika T."]] },
  "John S.": { initials: "JS", rating: "4.4", reviews: 6, about: "QCU student clearing out some gently used clothes and everyday items.", reviewList: [["4.0", "Item matched the description.", "Verified purchase · Adrian F."], ["5.0", "Friendly and responsive.", "Unverified · Paolo C."]] },
  "Bea L.": { initials: "BL", rating: "4.7", reviews: 9, about: "Home-baked treats made fresh for the QCU community. Message to check availability.", reviewList: [["5.0", "The cookies were fresh and delicious.", "Verified purchase · Sarah R."], ["4.0", "Good brownies, pickup was a little busy.", "Unverified · John S."]] },
  "Paolo C.": { initials: "PC", rating: "4.6", reviews: 5, about: "QCU student sharing affordable study supplies and books.", reviewList: [["4.5", "Calculator works well, thanks!", "Verified purchase · Adrian F."], ["4.0", "Textbook was useful, as described.", "Unverified · Mark D."]] },
  "Mika T.": { initials: "MT", rating: "4.9", reviews: 4, about: "Student seller with a few practical accessories and clothes.", reviewList: [["5.0", "Bag is sturdy and in great condition.", "Verified purchase · Sarah R."]] }
};

const reportRows = [
  { listing: "Gaming Laptop — For Parts", seller: "New account", reason: "Suspicious price", date: "Oct 26, 2026", risk: "High", status: "Pending", id: 11 },
  { listing: "Secondhand Hoodie", seller: "John S.", reason: "Misleading information", date: "Oct 25, 2026", risk: "Low", status: "Under Review", id: 6 },
  { listing: "Wireless Earphones", seller: "User C", reason: "Fake product", date: "Oct 24, 2026", risk: "High", status: "Resolved", id: 5 }
];
let currentRoute = "home";
let currentListingId = 1;
let currentConversation = "Mark D.";
let adminTab = "overview";
let currentSellerName = "Adrian F.";
const reviewedSellers = new Set();
let browseFilters = { search: "", category: "", min: "", max: "", condition: "", risk: "", sort: "newest" };
let visibleCount = 8;
const app = document.getElementById("app");
const modalRoot = document.getElementById("modal-root");

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function money(value) { return `₱${Number(value).toLocaleString("en-PH")}`; }
function slugCategory(category) {
  if (category === "Accessories / Others") return "others";
  return category.toLowerCase();
}
function getListing(id) { return listings.find(item => item.id === Number(id)) || listings[0]; }
function toast(message) {
  const root = document.getElementById("toast-root");
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  root.appendChild(item);
  window.setTimeout(() => item.remove(), 3200);
}
function productCard(item) {
  return `<article class="product-card">
    <a href="#listing/${item.id}" aria-label="View ${esc(item.name)}">
      <div class="product-image ${slugCategory(item.category)}">${item.featured ? '<span class="badge featured-badge">FEATURED</span>' : ""}
        <span class="product-emoji" aria-hidden="true">${item.emoji}</span>
      </div>
    </a>
    <div class="product-body">
      <h3><a href="#listing/${item.id}">${esc(item.name)}</a></h3>
      <div class="product-price">${money(item.price)}</div>
      <div class="product-meta"><span>${esc(item.category)}</span><span class="badge risk-badge ${item.risk === "High" ? "high" : ""}">${esc(item.risk)} Risk</span></div>
      <div class="seller-line"><a href="#seller/${encodeURIComponent(item.seller)}">${esc(item.seller)}</a>${item.verified ? '<span class="mini-verified">✓ Verified</span>' : '<span class="mini-verified" style="color:#a65310">Unverified</span>'}</div>
    </div>
  </article>`;
}
function sectionHeading(title, description, href = "#browse", linkText = "View all listings") {
  return `<div class="section-heading"><div><h2>${title}</h2><p>${description}</p></div><a class="text-link" href="${href}">${linkText} →</a></div>`;
}
function pageTop(title, description, label = "MARKETPLACE") {
  return `<div class="page-top"><div class="container"><span class="eyebrow">${label}</span><h1>${title}</h1><p>${description}</p></div></div>`;
}
function renderHome() {
  const featured = listings.filter(item => item.featured).slice(0, 4);
  const newest = listings.filter(item => item.id !== 11).slice(0, 4);
  app.innerHTML = `<section class="hero"><div class="hero-inner">
    <div><span class="eyebrow">YOUR QCU COMMUNITY MARKETPLACE</span><h1>Buy and sell within the QCU community.</h1>
      <p class="hero-copy">Find affordable products from verified members of the QCU community. One simple place for campus finds, secondhand essentials, and homemade treats.</p>
      <form class="search-form" id="home-search"><input name="search" aria-label="Search products" placeholder="Search products..." autocomplete="off"><button type="submit">Search listings</button></form>
      <div class="hero-proof"><span><b>✓</b> QCU community members</span><span><b>✓</b> Simple rule-based safety checks</span><span><b>✓</b> No transaction fees</span></div>
    </div>
    <aside class="community-card"><h2>Growing together at QCU</h2><div class="community-stat"><strong>150</strong><span>community members</span></div><div class="community-stat"><strong>32</strong><span>active sellers</span></div><div class="community-stat"><strong>214</strong><span>active listings</span></div><p class="subtle">Early community targets for our first year. A safer campus marketplace starts with us.</p></aside>
  </div></section>
  <div class="container">
    <section class="section">${sectionHeading("Shop by category", "Find what you need for class, campus, and beyond.", "#browse")}
      <div class="category-grid">${categories.map(category => `<a class="category-tile" href="#browse?category=${encodeURIComponent(category.name)}"><span class="category-icon">${category.icon}</span><span><strong>${esc(category.name)}</strong><small>${esc(category.hint)}</small></span></a>`).join("")}</div>
    </section>
    <section class="section">${sectionHeading("Featured listings", "A little extra visibility for QCU community sellers.", "#browse")}
      <div class="product-grid">${featured.map(productCard).join("")}</div>
    </section>
    <section class="section">${sectionHeading("Newest listings", "Recently posted finds from around the QCU community.", "#browse")}
      <div class="product-grid">${newest.map(productCard).join("")}</div>
    </section>
    <div class="split-sections">
      <section class="panel"><h2>Stay safe on Digital MarketHub</h2><p>A few simple checks can help you make informed decisions when buying or selling.</p><ul class="safety-list"><li>Check seller profiles and reviews</li><li>Be cautious with advance payments</li><li>Meet in appropriate public areas</li><li>Never share passwords or codes</li><li>Report suspicious listings</li><li>Check item details before agreeing</li></ul><a class="text-link" href="#safety">Read safety tips →</a></section>
      <section class="panel feature-panel"><span class="eyebrow">OPTIONAL SELLER FEATURE</span><h2>Help your listing stand out</h2><p>Move your listing higher in search and feature it for the QCU community.</p><p class="price-tag">₱20 <span style="font-size:10px;font-weight:400;color:#64748b">/ 7 days</span></p><button class="button-primary" type="button" data-action="feature">Learn about featured listings</button><p class="form-note" style="margin:10px 0 0">Basic marketplace use stays free. No transaction fees.</p></section>
    </div>
  </div>`;
}
function filteredListings() {
  let result = listings.filter(item => {
    const text = `${item.name} ${item.category} ${item.seller} ${item.description}`.toLowerCase();
    return (!browseFilters.search || text.includes(browseFilters.search.toLowerCase()))
      && (!browseFilters.category || item.category === browseFilters.category)
      && (browseFilters.min === "" || item.price >= Number(browseFilters.min))
      && (browseFilters.max === "" || item.price <= Number(browseFilters.max))
      && (!browseFilters.condition || item.condition === browseFilters.condition)
      && (!browseFilters.risk || item.risk === browseFilters.risk);
  });
  if (browseFilters.sort === "low") result.sort((a, b) => a.price - b.price);
  if (browseFilters.sort === "high") result.sort((a, b) => b.price - a.price);
  if (browseFilters.sort === "newest") result.sort((a, b) => a.id === 11 ? -1 : b.id === 11 ? 1 : a.id - b.id);
  return result;
}
function renderBrowse() {
  const result = filteredListings();
  const visible = result.slice(0, visibleCount);
  app.innerHTML = `${pageTop("Browse Products", "Search QCU community listings and find your next useful campus item.")}
    <div class="container browse-layout">
      <aside class="filter-panel"><div class="filter-title">Filter listings <button type="button" data-action="clear-filters">Clear all</button></div>
        <div class="filter-fields">
          <div class="filter-group"><label for="filter-category">Category</label><select id="filter-category" data-filter="category"><option value="">All categories</option>${categories.map(c => `<option ${browseFilters.category === c.name ? "selected" : ""}>${esc(c.name)}</option>`).join("")}</select></div>
          <div class="filter-group"><label>Price range (₱)</label><div class="price-fields"><input aria-label="Minimum price" data-filter="min" type="number" min="0" placeholder="Min" value="${esc(browseFilters.min)}"><input aria-label="Maximum price" data-filter="max" type="number" min="0" placeholder="Max" value="${esc(browseFilters.max)}"></div></div>
          <div class="filter-group"><label for="filter-condition">Condition</label><select id="filter-condition" data-filter="condition"><option value="">Any condition</option>${["New", "Like New", "Good", "Fair"].map(v => `<option ${browseFilters.condition === v ? "selected" : ""}>${v}</option>`).join("")}</select></div>
          <div class="filter-group"><label for="filter-risk">Rule-based risk indicator</label><select id="filter-risk" data-filter="risk"><option value="">Any risk level</option><option ${browseFilters.risk === "Low" ? "selected" : ""}>Low</option><option ${browseFilters.risk === "High" ? "selected" : ""}>High</option></select></div>
        </div>
      </aside>
      <section><form class="search-form browse-search" id="browse-search"><input name="search" aria-label="Search products" placeholder="Search products..." autocomplete="off" value="${esc(browseFilters.search)}"><button type="submit">Search</button></form><div class="browse-toolbar"><span><strong>${result.length}</strong> listings found${browseFilters.search ? ` for “${esc(browseFilters.search)}”` : ""}</span><label>Sort by <select data-filter="sort"><option value="newest" ${browseFilters.sort === "newest" ? "selected" : ""}>Newest</option><option value="low" ${browseFilters.sort === "low" ? "selected" : ""}>Price: Low to High</option><option value="high" ${browseFilters.sort === "high" ? "selected" : ""}>Price: High to Low</option></select></label></div>
        ${visible.length ? `<div class="product-grid">${visible.map(productCard).join("")}</div>${visible.length < result.length ? '<button class="load-more" type="button" data-action="load-more">Load more listings</button>' : ""}` : '<div class="empty-state"><strong>No listings match those filters</strong>Try a different search or clear some filters.</div>'}
      </section>
    </div>`;
}
function renderDetail(id) {
  const item = getListing(id);
  currentListingId = item.id;
  const flags = item.flags || ["Price appears reasonable", "Seller is verified", "No suspicious payment request detected"];
  app.innerHTML = `${pageTop("Listing details", "Review the item information and seller details before getting in touch.", "BROWSE · LISTING")}
    <div class="container detail-layout">
      <div><div class="detail-main-image ${slugCategory(item.category)}"><span class="product-emoji">${item.emoji}</span></div><div class="image-thumbs"><div class="image-thumb">${item.emoji}</div><div class="image-thumb">${item.emoji}</div><div class="image-thumb">${item.emoji}</div></div></div>
      <div class="detail-info"><span class="eyebrow">${esc(item.category)} · ${esc(item.created)}</span><h1>${esc(item.name)}</h1><div class="detail-price">${money(item.price)}</div><p class="detail-description">${esc(item.description)}</p>
        <div class="detail-attrs"><span>Condition<strong>${esc(item.condition)}</strong></span><span>Posted<strong>${esc(item.created)}</strong></span><span>Category<strong>${esc(item.category)}</strong></span><span>Listing ID<strong>DMH-${String(item.id).padStart(4, "0")}</strong></span></div>
        <div class="seller-card"><div class="seller-card-top"><span class="avatar">${esc(item.initials)}</span><span><strong><a href="#seller/${encodeURIComponent(item.seller)}">${esc(item.seller)} ↗</a></strong><small>${item.verified ? "✓ Verified QCU Member" : "Verification not confirmed"}</small></span></div>
          <div class="seller-stats"><span><strong>★ ${esc(item.rating)}</strong> rating</span><span><strong>${item.reviews}</strong> reviews</span><span><strong>${item.active}</strong> active listings</span></div>
          <div class="button-row"><button class="button-primary button-full" type="button" data-action="contact" data-seller="${esc(item.seller)}">Contact Seller</button><button class="button-danger" type="button" data-action="report" data-id="${item.id}">Report</button></div>
        </div>
        <div class="risk-card ${item.risk === "High" ? "high" : ""}"><h3>Rule-based listing check <span class="badge risk-badge ${item.risk === "High" ? "high" : ""}">${esc(item.risk)} Risk</span></h3><p>${item.risk === "High" ? "Several configured warning indicators were detected. Review this listing carefully before contacting the seller." : "No major warning indicators were detected based on the available listing information."}</p><ul>${flags.map(flag => `<li>${esc(flag)}</li>`).join("")}</ul><p class="disclaimer">Risk warnings are indicators only. They do not prove that a seller is dishonest or that a listing is a scam.</p></div>
      </div>
    </div>`;
}
function renderSeller(name) {
  const seller = decodeURIComponent(name || "Adrian F.");
  currentSellerName = seller;
  const profile = sellerProfiles[seller] || sellerProfiles["Adrian F."];
  const sellerListings = listings.filter(item => item.seller === seller);
  app.innerHTML = `${pageTop("Seller profile", "Get to know the QCU community member behind the listings.", "QCU COMMUNITY")}
    <div class="container"><section class="profile-header"><span class="avatar">${esc(profile.initials)}</span><div><h1>${esc(seller)}</h1><p class="mini-verified">✓ Verified QCU Member</p></div><div class="profile-stat-row"><div><strong>★ ${esc(profile.rating)}</strong><span>Seller rating</span></div><div><strong>${profile.reviews + (reviewedSellers.has(seller) ? 1 : 0)}</strong><span>Reviews</span></div><div><strong>${sellerListings.length || 2}</strong><span>Active listings</span></div></div></section>
      <div class="profile-content"><div><section class="section" style="padding-top:0"><div class="section-heading"><div><h2>Active listings</h2><p>Items currently offered by ${esc(seller)}.</p></div></div><div class="product-grid">${(sellerListings.length ? sellerListings : listings.slice(0, 2)).map(productCard).join("")}</div></section>
        <section class="panel" style="margin-top:20px"><h2>Reviews</h2>${profile.reviewList.map(review => `<div class="review-item"><span class="review-stars">★ ${esc(review[0])}</span><p>${esc(review[1])}</p><small>${esc(review[2])}</small></div>`).join("")}<button class="button-secondary" type="button" data-action="review" ${reviewedSellers.has(seller) ? "disabled" : ""}>${reviewedSellers.has(seller) ? "Review submitted" : "Write a review"}</button></section>
      </div><aside><section class="panel"><h2>About</h2><p>${esc(profile.about)}</p><p class="mini-verified">✓ Verified QCU Member</p></section><section class="panel" style="margin-top:13px"><h2>Meet safely</h2><p>Arrange meet-ups in appropriate public areas. Do not share passwords or verification codes.</p><a class="text-link" href="#safety">Safety tips →</a></section></aside></div>
    </div>`;
}
function renderSell() {
  app.innerHTML = `${pageTop("Sell an Item", "Share a useful item with the QCU community. Basic listings are free.")}
    <div class="container form-wrap"><form id="sell-form" class="form-card">
      <div class="form-grid">
        <div class="field full"><label for="product-name">Product name *</label><input id="product-name" name="name" required maxlength="70" placeholder="e.g. Used scientific calculator"></div>
        <div class="field"><label for="product-category">Category *</label><select id="product-category" name="category" required><option value="">Choose a category</option>${categories.map(c => `<option>${esc(c.name)}</option>`).join("")}</select></div>
        <div class="field"><label for="product-price">Price (₱) *</label><input id="product-price" name="price" type="number" required min="1" max="1000000" placeholder="e.g. 350"></div>
        <div class="field"><label for="product-condition">Condition *</label><select id="product-condition" name="condition" required><option value="">Choose condition</option>${["New", "Like New", "Good", "Fair"].map(c => `<option>${c}</option>`).join("")}</select></div>
        <div class="field full"><label for="product-description">Description *</label><textarea id="product-description" name="description" required maxlength="600" placeholder="Describe the condition, what is included, and any details buyers should know."></textarea></div>
        <div class="field full"><label for="product-photo">Upload photos</label><div class="photo-drop"><span aria-hidden="true">📷</span><span><strong>Choose a product photo</strong><br>Photo preview is available in this demo.</span><input id="product-photo" type="file" accept="image/*" aria-label="Choose product photo"></div><p id="photo-status" class="form-note"></p></div>
      </div>
      <p class="form-note">Make sure your listing information is accurate. Prohibited or illegal products are not allowed. Do not include your private information in photos.</p>
      <div class="form-actions"><button class="button-secondary" type="button" data-action="preview-listing">Preview Listing</button><button class="button-primary" type="submit">Post Listing</button></div>
    </form></div>`;
}
const conversations = {
  "Mark D.": [{ text: "Is the keyboard still available?", mine: true, time: "9:12 AM" }, { text: "Yes, it's still available.", mine: false, time: "9:16 AM" }, { text: "Can we meet near QCU?", mine: true, time: "9:18 AM" }, { text: "Sure. We can meet after class.", mine: false, time: "9:20 AM" }],
  "Sarah R.": [{ text: "Hi, is the USB-C hub available?", mine: true, time: "Yesterday" }, { text: "Yes! I can bring it to campus tomorrow.", mine: false, time: "Yesterday" }],
  "John S.": [{ text: "What size is the hoodie?", mine: true, time: "Mon" }, { text: "It's a medium, happy to send measurements.", mine: false, time: "Mon" }]
};
function renderMessages() {
  const messages = conversations[currentConversation] || [];
  app.innerHTML = `${pageTop("Messages", "Keep marketplace conversations in one place.", "YOUR ACCOUNT")}
    <div class="container"><div class="messages-layout"><aside class="conversation-list"><h2>Messages</h2><div class="conversation-list-items">${Object.keys(conversations).map((seller, index) => {
      const profile = sellerProfiles[seller] || { initials: "QCU" };
      return `<button type="button" class="conversation ${seller === currentConversation ? "active" : ""}" data-action="conversation" data-seller="${esc(seller)}"><span class="avatar">${esc(profile.initials)}</span><span><strong>${esc(seller)}</strong><small>${index === 0 ? "Sure. We can meet after class." : index === 1 ? "I can bring it to campus tomorrow." : "Happy to send measurements."}</small></span></button>`;
    }).join("")}</div></aside>
      <section class="chat-panel"><div class="chat-header">${esc(currentConversation)}<small>✓ Verified QCU Member</small></div><div class="chat-messages" id="chat-messages">${messages.map(messageMarkup).join("")}</div>
        <p class="chat-safety">Safety reminder: Never share passwords or verification codes. Be careful with requests for advance payment.</p>
        <form class="chat-compose" id="chat-form"><input name="message" aria-label="Type a message" placeholder="Type a message..." required maxlength="500"><button class="button-primary" type="submit">Send</button></form>
      </section></div></div>`;
  const chat = document.getElementById("chat-messages");
  if (chat) chat.scrollTop = chat.scrollHeight;
}
function messageMarkup(message) {
  return `<div class="message ${message.mine ? "mine" : ""}">${esc(message.text)}<time>${esc(message.time)}</time></div>`;
}
function renderSafety() {
  app.innerHTML = `${pageTop("A safer way to trade in our community", "A few thoughtful steps can make buying and selling more comfortable for everyone.", "SAFETY & COMMUNITY")}
    <div class="container safety-page"><div class="safety-grid">
      <section class="panel"><h2><span>✓</span> Before you contact a seller</h2><ul><li>Check the seller's profile, verification status, and reviews.</li><li>Read the full listing description and ask questions about the item.</li><li>Be cautious with prices that seem unusually low.</li><li>Rule-based warnings are indicators only, not proof of wrongdoing.</li></ul></section>
      <section class="panel"><h2><span>🤝</span> When arranging a meet-up</h2><ul><li>Choose an appropriate public place and tell someone your plans.</li><li>Inspect the item before completing a direct payment.</li><li>Cash or GCash arrangements are between the buyer and seller.</li><li>MarketHub does not process marketplace payments or charge transaction fees.</li></ul></section>
      <section class="panel"><h2><span>🔒</span> Protect your account</h2><ul><li>Never share your password or verification codes.</li><li>Keep conversations on the platform when possible.</li><li>Do not post school IDs or private contact information in listings.</li><li>Verification documents are not displayed on public profiles.</li></ul></section>
      <section class="panel"><h2><span>⚑</span> Community rules</h2><ul><li>No illegal, stolen, fraudulent, or dangerous prohibited items.</li><li>Do not post misleading descriptions or impersonate another person.</li><li>Food listings should follow applicable safety requirements.</li><li>Use Report Listing if something looks suspicious.</li></ul></section>
    </div><section class="panel" style="margin-top:15px"><h2>Privacy, simply put</h2><p>Digital MarketHub is a student project concept for the QCU community. A production version should collect only what's needed to operate the marketplace, hash passwords securely, restrict administrative access, and delete verification information when it is no longer needed. This prototype uses sample data only and does not collect or store personal information.</p></section></div>`;
}
function renderAdmin() {
  const tabs = ["overview", "reports", "flagged", "users", "listings", "revenue"];
  app.innerHTML = `<div class="admin-shell"><section class="admin-banner"><div class="container admin-banner-inner"><div><span class="eyebrow" style="color:#ffb47e">STAFF AREA · DEMO DATA</span><h1>Digital MarketHub Admin</h1><p>Review community activity and help keep the marketplace useful and safe.</p></div><a class="button-primary" href="#browse">View marketplace</a></div></section>
    <div class="container admin-content"><nav class="admin-tabs" aria-label="Admin dashboard sections">${tabs.map(tab => `<button type="button" class="${adminTab === tab ? "active" : ""}" data-action="admin-tab" data-tab="${tab}">${tab.charAt(0).toUpperCase() + tab.slice(1)}</button>`).join("")}</nav>${adminContent()}</div>
  </div>`;
}
function adminContent() {
  if (adminTab === "reports" || adminTab === "overview") return `${adminTab === "overview" ? `<div class="stat-grid"><div class="stat-card"><strong>150</strong><span>Total users</span></div><div class="stat-card"><strong>32</strong><span>Active sellers</span></div><div class="stat-card"><strong>214</strong><span>Active listings</span></div><div class="stat-card"><strong>6</strong><span>Pending reports</span></div><div class="stat-card"><strong>91%</strong><span>Reports reviewed</span></div></div>` : ""}
    <section class="admin-panel"><div class="admin-panel-head"><div><h2>Reported listings</h2><p>Reports are reviewed by an administrator. A report does not automatically mean a listing is at fault.</p></div></div>${reportTable()}</section>
    ${adminTab === "overview" ? `<section class="admin-panel"><div class="admin-panel-head"><div><h2>Rule-based warning flags</h2><p>Configured indicators for manual review—not automated verdicts.</p></div><button class="button-secondary" type="button" data-action="admin-tab" data-tab="flagged">View all flags</button></div>${flagTable()}</section>` : ""}`;
  if (adminTab === "flagged") return `<section class="admin-panel"><div class="admin-panel-head"><div><h2>Rule-Based Warning Flags</h2><p>Listings that match configured checks are surfaced for administrator review.</p></div></div>${flagTable()}</section>`;
  if (adminTab === "users") return `<section class="admin-panel"><div class="admin-panel-head"><div><h2>Users</h2><p>Verification status only. Private verification documents are not shown here.</p></div></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Verification</th><th>Listings</th><th>Rating</th><th>Account status</th><th>Joined</th></tr></thead><tbody>${[["Adrian F.", "Verified", 8, "4.7", "Active", "Aug 12, 2026"], ["Mark D.", "Verified", 8, "4.8", "Active", "Aug 19, 2026"], ["Sarah R.", "Verified", 3, "4.9", "Active", "Sep 02, 2026"], ["New account", "Pending", 8, "—", "Under Review", "Oct 26, 2026"]].map(user => `<tr><td><strong>${esc(user[0])}</strong></td><td>${user[1] === "Verified" ? '<span class="mini-verified">✓ Verified QCU Member</span>' : "Pending"}</td><td>${user[2]}</td><td>★ ${user[3]}</td><td><span class="status-pill ${user[4] === "Active" ? "active" : "review"}">${user[4]}</span></td><td>${user[5]}</td></tr>`).join("")}</tbody></table></div></section>`;
  if (adminTab === "listings") return `<section class="admin-panel"><div class="admin-panel-head"><div><h2>Listing management</h2><p>Search listings, inspect warning indicators, or flag content for review.</p></div><input id="admin-listing-search" placeholder="Search listings..." style="max-width:220px;padding:8px;border:1px solid #dfe4ea;border-radius:5px;font-size:10px"></div>${listingManagementTable()}</section>`;
  return `<section class="admin-panel"><div class="admin-panel-head"><div><h2>Projected revenue &amp; costs</h2><p>Planning estimates only. These figures are not guaranteed.</p></div></div><div class="financial-grid"><div><strong>₱1,800</strong><span>Starting capital</span></div><div><strong>₱250</strong><span>Estimated monthly expenses</span></div><div><strong>₱600</strong><span>Projected monthly revenue</span></div><div><strong>₱350</strong><span>Projected monthly operating surplus</span></div></div><div class="admin-panel" style="margin:15px 0 0;background:#f8fafc"><h2>Revenue assumptions</h2><p class="form-note">20 featured listings × ₱20 = ₱400 · 1 approved QCU-related advertisement × ₱200 = ₱200.</p><p class="form-note">Basic marketplace use is free. No buyer/seller transaction fees or paid seller memberships.</p></div><div class="admin-panel" style="margin:15px 0 0"><div class="admin-panel-head"><div><h2>QCU-related advertisements</h2><p>Only QCU-recognized student organizations and approved QCU-related activities.</p></div><span class="status-pill">₱200 / month</span></div><p class="form-note"><strong>Example:</strong> IT Student Organization Recruitment · 1 month · Pending approval</p></div></section>`;
}
function reportTable() {
  return `<div class="table-wrap"><table><thead><tr><th>Listing</th><th>Seller</th><th>Reason</th><th>Date reported</th><th>Risk</th><th>Status</th><th>Action</th></tr></thead><tbody>${reportRows.map(row => `<tr><td><strong>${esc(row.listing)}</strong></td><td>${esc(row.seller)}</td><td>${esc(row.reason)}</td><td>${esc(row.date)}</td><td><span class="badge risk-badge ${row.risk === "High" ? "high" : ""}">${row.risk}</span></td><td><span class="status-pill ${row.status === "Resolved" ? "resolved" : row.status === "Under Review" ? "review" : ""}">${esc(row.status)}</span></td><td><button class="button-secondary" type="button" data-action="review-report" data-id="${row.id}">Review</button> <button class="button-danger" type="button" data-action="resolve-report" data-id="${row.id}">Dismiss</button></td></tr>`).join("")}</tbody></table></div>`;
}
function flagTable() {
  const flags = listings.filter(item => item.risk === "High");
  return `<div class="table-wrap"><table><thead><tr><th>Listing</th><th>Triggered rules</th><th>Risk level</th><th>Seller</th><th>Review status</th><th>Action</th></tr></thead><tbody>${flags.map(item => `<tr><td><strong>${esc(item.name)} — ${money(item.price)}</strong></td><td>${(item.flags || []).map(esc).join("<br>")}</td><td><span class="badge risk-badge high">High Risk</span></td><td>${esc(item.seller)}</td><td><span class="status-pill">Pending</span></td><td><button class="button-secondary" type="button" data-action="admin-review-listing" data-id="${item.id}">Review Listing</button></td></tr>`).join("")}</tbody></table></div>`;
}
function listingManagementTable() {
  return `<div class="table-wrap"><table><thead><tr><th>Listing</th><th>Category</th><th>Seller</th><th>Price</th><th>Risk</th><th>Status</th><th>Action</th></tr></thead><tbody id="admin-listing-rows">${listings.map(item => `<tr data-search="${esc(`${item.name} ${item.seller} ${item.category}`.toLowerCase())}"><td><strong>${esc(item.name)}</strong></td><td>${esc(item.category)}</td><td>${esc(item.seller)}</td><td>${money(item.price)}</td><td><span class="badge risk-badge ${item.risk === "High" ? "high" : ""}">${esc(item.risk)}</span></td><td><span class="status-pill ${item.status === "Removed" ? "" : "active"}">${esc(item.status || "Active")}</span></td><td><button class="button-secondary" type="button" data-action="admin-review-listing" data-id="${item.id}">Review</button> <button class="button-danger" type="button" data-action="admin-remove" data-id="${item.id}">Remove</button></td></tr>`).join("")}</tbody></table></div>`;
}
function renderProfile() {
  renderSeller(encodeURIComponent("Adrian F."));
}
function routeFromHash() {
  const raw = location.hash.replace(/^#/, "") || "home";
  const [path, query] = raw.split("?");
  const segments = path.split("/");
  currentRoute = segments[0];
  document.querySelectorAll(".main-nav [data-nav]").forEach(link => link.classList.toggle("active", link.dataset.nav === currentRoute || (currentRoute === "listing" && link.dataset.nav === "browse")));
  document.querySelector(".main-nav")?.classList.remove("open");
  document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
  if (currentRoute === "home") renderHome();
  else if (currentRoute === "browse") {
    if (query) {
      const params = new URLSearchParams(query);
      if (params.has("category")) browseFilters.category = params.get("category") || "";
      if (params.has("search")) browseFilters.search = params.get("search") || "";
      visibleCount = 8;
    }
    renderBrowse();
  } else if (currentRoute === "listing") renderDetail(segments[1]);
  else if (currentRoute === "seller") renderSeller(segments.slice(1).join("/") || "Adrian F.");
  else if (currentRoute === "sell") renderSell();
  else if (currentRoute === "messages") renderMessages();
  else if (currentRoute === "admin") renderAdmin();
  else if (currentRoute === "safety") renderSafety();
  else if (currentRoute === "profile") renderProfile();
  else renderHome();
}
function openModal(title, body, onSubmit, submitText = "Submit") {
  modalRoot.innerHTML = `<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><h2 id="modal-title">${title}</h2><p>${body}</p><form id="modal-form"><div id="modal-fields"></div><div class="modal-actions"><button class="button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button-primary" type="submit">${submitText}</button></div></form></section></div>`;
  const form = document.getElementById("modal-form");
  onSubmit(form, document.getElementById("modal-fields"));
  modalRoot.querySelector(".modal-backdrop").addEventListener("click", event => {
    if (event.target.classList.contains("modal-backdrop")) closeModal();
  });
  modalRoot.querySelector("input, select, textarea, button")?.focus();
}
function closeModal() { modalRoot.innerHTML = ""; }
function reportModal(id) {
  const item = getListing(id);
  openModal("Report Listing", `Tell us what seems wrong with “${esc(item.name)}”. Reports are reviewed by the MarketHub team.`, form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const reason = form.querySelector("#report-reason").value;
      if (!reason) return form.querySelector("#report-reason").focus();
      const details = form.querySelector("#report-details").value.trim();
      reportRows.unshift({ listing: item.name, seller: item.seller, reason, details, date: new Date().toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" }), risk: item.risk, status: "Pending", id: item.id });
      closeModal();
      toast("Report submitted. Our team will review the listing.");
    });
  });
  document.getElementById("modal-fields").innerHTML = `<div class="field"><label for="report-reason">Reason *</label><select id="report-reason" required><option value="">Choose a reason</option>${["Suspected scam", "Fake product", "Prohibited item", "Misleading information", "Suspicious behavior", "Other"].map(reason => `<option>${reason}</option>`).join("")}</select></div><div class="field"><label for="report-details">Additional details</label><textarea id="report-details" maxlength="500" placeholder="Share any helpful details (optional)."></textarea></div>`;
}
function featureModal() {
  openModal("Featured Listing · ₱20 / 7 days", "Featured listings appear higher in search results and can be shown in the Featured Listings section. This optional fee supports the project. Basic listings remain free.", form => {
    form.addEventListener("submit", event => { event.preventDefault(); closeModal(); toast("Feature request noted. Payment setup is not connected in this prototype."); });
  }, "Request feature");
  document.getElementById("modal-fields").innerHTML = `<div class="field"><label for="feature-listing">Choose a listing</label><select id="feature-listing">${listings.filter(i => i.seller === "Adrian F.").map(i => `<option>${esc(i.name)}</option>`).join("")}</select></div><p class="form-note">Payment would be handled separately for MarketHub's featured-listing service. Buyer/seller transactions are not processed by the platform.</p>`;
}
function contactSeller(seller) {
  currentConversation = seller in conversations ? seller : "Mark D.";
  if (!(seller in conversations)) {
    conversations[seller] = [{ text: "Hi! I'm interested in your listing. Is it still available?", mine: true, time: "Now" }];
    currentConversation = seller;
  }
  location.hash = "#messages";
}
function previewListing(form) {
  const data = new FormData(form);
  const name = data.get("name")?.trim();
  const price = data.get("price");
  const category = data.get("category");
  if (!name || !price || !category) {
    toast("Add a product name, category, and price to preview your listing.");
    return;
  }
  const icons = { Electronics: "🔌", Clothing: "👕", Food: "🍪", "Accessories / Others": "🎒" };
  openModal("Listing preview", "This is how your new listing will appear to other QCU community members.", modalForm => {
    modalForm.addEventListener("submit", event => { event.preventDefault(); closeModal(); });
  }, "Looks good");
  document.getElementById("modal-fields").innerHTML = `<article class="product-card"><div class="product-image ${slugCategory(category)}"><span class="product-emoji">${icons[category] || "📦"}</span></div><div class="product-body"><h3>${esc(name)}</h3><div class="product-price">${money(price)}</div><div class="product-meta"><span>${esc(category)}</span><span class="badge risk-badge">Low Risk</span></div><div class="seller-line"><span>Adrian F.</span><span class="mini-verified">✓ Verified</span></div><p class="form-note">${esc(data.get("description") || "Add a description before posting.")}</p></div></article>`;
}
function postListing(form) {
  const data = new FormData(form);
  const item = {
    id: Math.max(...listings.map(listing => listing.id)) + 1,
    name: data.get("name").trim(), price: Number(data.get("price")), category: data.get("category"),
    condition: data.get("condition"), seller: "Adrian F.", initials: "AF", rating: "4.7", reviews: 13,
    active: 8, emoji: { Electronics: "🔌", Clothing: "👕", Food: "🍪", "Accessories / Others": "🎒" }[data.get("category")] || "📦",
    created: "Just now", featured: false, verified: true, risk: "Low", description: data.get("description").trim()
  };
  listings.unshift(item);
  form.reset();
  document.getElementById("photo-status").textContent = "";
  toast("Your listing has been posted.");
  location.hash = `#listing/${item.id}`;
}
document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "feature") featureModal();
  if (action === "report") reportModal(button.dataset.id);
  if (action === "close-modal") closeModal();
  if (action === "clear-filters") {
    browseFilters = { search: "", category: "", min: "", max: "", condition: "", risk: "", sort: "newest" };
    visibleCount = 8; renderBrowse();
  }
  if (action === "load-more") { visibleCount += 8; renderBrowse(); }
  if (action === "contact") contactSeller(button.dataset.seller);
  if (action === "conversation") { currentConversation = button.dataset.seller; renderMessages(); }
  if (action === "admin-tab") { adminTab = button.dataset.tab; renderAdmin(); }
  if (action === "review-report") {
    const row = reportRows.find(report => report.id === Number(button.dataset.id));
    if (row && row.status === "Pending") row.status = "Under Review";
    openModal("Review reported listing", "Review the listing details and the report reason. The status has been changed to Under Review.", form => {
      form.addEventListener("submit", event => { event.preventDefault(); closeModal(); renderAdmin(); });
    }, "Done");
    const item = getListing(button.dataset.id);
    document.getElementById("modal-fields").innerHTML = `<p><strong>${esc(item.name)}</strong> · ${money(item.price)}<br>Seller: ${esc(item.seller)}<br>Rule-based status: ${esc(item.risk)} Risk</p><p><strong>Report details:</strong> ${esc(row?.details || "No additional details provided.")}</p><p class="form-note">Use the listing and available information for a manual review. Warning indicators are not proof of wrongdoing.</p><a class="text-link" href="#listing/${item.id}" onclick="document.getElementById('modal-root').innerHTML=''">Open listing →</a>`;
  }
  if (action === "resolve-report") {
    const row = reportRows.find(report => report.id === Number(button.dataset.id));
    if (row) row.status = "Resolved";
    renderAdmin(); toast("Report marked as resolved.");
  }
  if (action === "admin-review-listing") {
    const id = Number(button.dataset.id);
    openModal("Review listing", "Review the listing and any configured warning indicators. This is a demo admin action.", form => {
      form.addEventListener("submit", event => { event.preventDefault(); closeModal(); });
    }, "Done");
    const item = getListing(id);
    document.getElementById("modal-fields").innerHTML = `<p><strong>${esc(item.name)}</strong> · ${money(item.price)}<br>Seller: ${esc(item.seller)}<br>Category: ${esc(item.category)}<br>Risk indicator: ${esc(item.risk)} Risk</p><ul class="rule-list">${(item.flags || ["No configured warning indicators detected"]).map(flag => `<li>${esc(flag)}</li>`).join("")}</ul><a class="text-link" href="#listing/${item.id}" onclick="document.getElementById('modal-root').innerHTML=''">Open listing →</a>`;
  }
  if (action === "admin-remove") {
    const item = getListing(button.dataset.id);
    item.status = "Removed";
    renderAdmin(); toast(`“${item.name}” marked as removed in the demo.`);
  }
  if (action === "review") {
    if (reviewedSellers.has(currentSellerName)) {
      toast("You have already reviewed this seller.");
      return;
    }
    openModal("Write a seller review", "Reviews should be based on a real interaction. Unverified reviews are labeled accordingly.", form => {
      form.addEventListener("submit", event => {
        event.preventDefault();
        const rating = form.querySelector("#rating").value;
        const comment = form.querySelector("#review-comment").value.trim();
        if (!rating || !comment) return;
        const profile = sellerProfiles[currentSellerName] || sellerProfiles["Adrian F."];
        profile.reviewList.unshift([rating.split(" ")[0], comment, "Unverified · You"]);
        reviewedSellers.add(currentSellerName);
        closeModal();
        renderSeller(encodeURIComponent(currentSellerName));
        toast("Review submitted as unverified. Thanks for sharing your experience.");
      });
    });
    document.getElementById("modal-fields").innerHTML = `<div class="field"><label for="rating">Rating</label><select id="rating" required><option value="">Choose a rating</option><option>5 — Excellent</option><option>4 — Good</option><option>3 — Okay</option><option>2 — Poor</option><option>1 — Very poor</option></select></div><div class="field"><label for="review-comment">Write your review</label><textarea id="review-comment" maxlength="400" required placeholder="Share a helpful, honest review..."></textarea></div><p class="form-note">Only one review per buyer per seller. Verified purchase status is not connected in this prototype.</p>`;
  }
  if (action === "preview-listing") {
    const form = document.getElementById("sell-form");
    if (form.reportValidity()) previewListing(form);
  }
});
document.addEventListener("input", event => {
  if (event.target.matches("[data-filter]")) {
    const key = event.target.dataset.filter;
    browseFilters[key] = event.target.value;
    visibleCount = 8;
    renderBrowse();
    if (key === "min" || key === "max") {
      const refreshed = app.querySelector(`[data-filter="${key}"]`);
      refreshed?.focus();
    }
  }
  if (event.target.id === "admin-listing-search") {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll("#admin-listing-rows tr").forEach(row => row.hidden = !row.dataset.search.includes(query));
  }
});
document.addEventListener("change", event => {
  if (event.target.matches("[data-filter]")) {
    browseFilters[event.target.dataset.filter] = event.target.value;
    visibleCount = 8;
    renderBrowse();
  }
  if (event.target.id === "product-photo") {
    const file = event.target.files?.[0];
    document.getElementById("photo-status").textContent = file ? `Selected: ${file.name} (local preview only; not uploaded)` : "";
  }
});
document.addEventListener("submit", event => {
  if (event.target.id === "home-search") {
    event.preventDefault();
    browseFilters.search = new FormData(event.target).get("search").trim();
    browseFilters.category = "";
    visibleCount = 8;
    location.hash = "#browse";
    renderBrowse();
  }
  if (event.target.id === "browse-search") {
    event.preventDefault();
    browseFilters.search = new FormData(event.target).get("search").trim();
    visibleCount = 8;
    renderBrowse();
  }
  if (event.target.id === "sell-form") {
    event.preventDefault();
    postListing(event.target);
  }
  if (event.target.id === "chat-form") {
    event.preventDefault();
    const input = event.target.elements.message;
    const text = input.value.trim();
    if (!text) return;
    conversations[currentConversation] = conversations[currentConversation] || [];
    conversations[currentConversation].push({ text, mine: true, time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) });
    renderMessages();
  }
});
document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelector(".notification-button").addEventListener("click", () => toast("You're all caught up on notifications."));
window.addEventListener("hashchange", routeFromHash);
routeFromHash();
