/* =========================================================
   VELYQORA TRAVELS — gallery.js
   Standalone script for gallery.html (nav + gallery + lightbox)
   ========================================================= */
(function(){
  "use strict";

  /* ---------------- NAV ---------------- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
    const backToTop = document.getElementById("backToTop");
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 700);
  });

  const burgerBtn = document.getElementById("burgerBtn");
  const navMobile = document.getElementById("navMobile");
  burgerBtn.addEventListener("click", () => {
    const open = navMobile.classList.toggle("is-open");
    burgerBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navMobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    navMobile.classList.remove("is-open");
    burgerBtn.setAttribute("aria-expanded", "false");
  }));

  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- GALLERY ---------------- */
  const galleryImages = [
    { url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e", cat:"beaches", alt:"Turquoise lagoon with limestone cliffs" },
    { url:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2", cat:"beaches", alt:"Aerial view of white sand beach" },
    { url:"https://images.unsplash.com/photo-1544735716-392fe2489ffa", cat:"luxury", alt:"Luxury resort pool over the coastline" },
    { url:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd", cat:"luxury", alt:"Overwater villas in a tropical lagoon" },
    { url:"https://images.unsplash.com/photo-1544644181-1484b3fdfc62", cat:"beaches", alt:"Overwater bungalows at sunset" },
    { url:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1", cat:"mountains", alt:"Sunrise light over mountain peaks" },
    { url:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7", cat:"mountains", alt:"Snow-capped alps above a lake" },
    { url:"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99", cat:"mountains", alt:"Alpine lake surrounded by peaks" },
    { url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e", cat:"adventure", alt:"Hikers on a mountain ridge" },
    { url:"https://images.unsplash.com/photo-1518998053901-5348d3961a04", cat:"nature", alt:"Still lake reflecting mountains" },
    { url:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c", cat:"cities", alt:"Dubai skyline at dusk" },
    { url:"https://images.unsplash.com/photo-1512632578888-169bbbc64f33", cat:"cities", alt:"Burj Khalifa among city towers" },
    { url:"https://images.unsplash.com/photo-1508009603885-50cf7c579365", cat:"cities", alt:"Eiffel Tower across the Seine" },
    { url:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34", cat:"cities", alt:"Big Ben and Westminster Bridge" },
    { url:"https://images.unsplash.com/photo-1596422846543-75c6fc197f07", cat:"cities", alt:"Petronas Towers at twilight" },
    { url:"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200", cat:"culture", alt:"Istanbul mosque domes and minarets" },
    { url:"https://images.unsplash.com/photo-1533105079780-92b9be482077", cat:"culture", alt:"Santorini blue domes overlooking the sea" },
    { url:"https://images.unsplash.com/photo-1548574505-5e239809ee19", cat:"adventure", alt:"Hot air balloons over Cappadocia" },
    { url:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a", cat:"culture", alt:"Golden temple architecture in Thailand" },
    { url:"https://images.unsplash.com/photo-1519046904884-53103b34b206", cat:"nature", alt:"Terraced rice fields in Bali" },
    { url:"https://images.unsplash.com/photo-1537996194471-e657df975ab4", cat:"culture", alt:"Bali temple gate among palm trees" },
    { url:"https://images.unsplash.com/photo-1469474968028-56623f02e42e", cat:"nature", alt:"Green fjord landscape in New Zealand" },
    { url:"https://images.unsplash.com/photo-1500835556837-99ac94a94552", cat:"adventure", alt:"Golden sand dunes at sunset" },
    { url:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e", cat:"adventure", alt:"Desert dunes under a clear sky" },
    { url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e", cat:"nature", alt:"Misty forested mountain range" },
    { url:"https://images.unsplash.com/photo-1548013146-72479768bada", cat:"culture", alt:"Traveler exploring a cultural market" },
    { url:"https://images.unsplash.com/photo-1477587458883-47145ed94245", cat:"culture", alt:"Ornate historic temple architecture" },
    { url:"https://images.unsplash.com/photo-1439066615861-d1af74d74000", cat:"nature", alt:"Waterfall in a lush rainforest" },
    { url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9", cat:"adventure", alt:"Traveler hiking a scenic trail" },
    { url:"https://images.unsplash.com/photo-1506929562872-bb421503ef21", cat:"adventure", alt:"Canyon adventure landscape" }
  ];

  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = galleryImages.map((g, i) => `
    <div class="gallery__item" data-cat="${g.cat}" data-index="${i}">
      <img loading="lazy" src="${g.url}?auto=format&fit=crop&w=600&q=75" alt="${g.alt}">
    </div>
  `).join("");

  const galleryFilters = document.getElementById("galleryFilters");
  galleryFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".gallery__filter");
    if (!btn) return;
    galleryFilters.querySelectorAll(".gallery__filter").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.getAttribute("data-filter");
    galleryGrid.querySelectorAll(".gallery__item").forEach(item => {
      item.classList.toggle("is-hidden", filter !== "all" && item.getAttribute("data-cat") !== filter);
    });
  });

  /* Lightbox */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCounter = document.getElementById("lightboxCounter");
  let lightboxIndex = 0;

  function showLightbox(index){
    lightboxIndex = (index + galleryImages.length) % galleryImages.length;
    const g = galleryImages[lightboxIndex];
    lightboxImg.src = g.url + "?auto=format&fit=crop&w=1400&q=85";
    lightboxImg.alt = g.alt;
    lightboxCounter.textContent = (lightboxIndex + 1) + " / " + galleryImages.length;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }
  function closeLightbox(){
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (item) showLightbox(parseInt(item.getAttribute("data-index"), 10));
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => showLightbox(lightboxIndex - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => showLightbox(lightboxIndex + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

})();
