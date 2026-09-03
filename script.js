/* =========================================================
   VELYQORA TRAVELS — script.js
   ========================================================= */
(function(){
  "use strict";

  const WA_NUMBER = "923176418036";
  function waLink(message){
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
  }

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

  /* ---------------- TRIP PLANNER ---------------- */
  const plannerForm = document.getElementById("plannerForm");
  const plannerConfirm = document.getElementById("plannerConfirm");
  plannerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!plannerForm.checkValidity()){ plannerForm.reportValidity(); return; }
    const where = document.getElementById("p-where").value;
    const style = document.getElementById("p-style").value;
    const travelers = document.getElementById("p-travelers").value;
    document.getElementById("plannerConfirmText").textContent =
      `Our travel specialists are putting together ${style.toLowerCase()} options for ${where} (${travelers}). We'll follow up shortly with a curated shortlist.`;
    document.getElementById("plannerWhatsApp").href = waLink(
      `Hello Velyqora Travels, I would like to plan a ${style} trip to ${where} for ${travelers}. Please share available packages.`
    );
    plannerConfirm.hidden = false;
  });
  document.getElementById("plannerConfirmClose").addEventListener("click", () => plannerConfirm.hidden = true);
  plannerConfirm.addEventListener("click", (e) => { if (e.target === plannerConfirm) plannerConfirm.hidden = true; });

  /* ---------------- TOUR PACKAGES DATA ---------------- */
  const tours = [
    {
      id: "bali-tropical-escape",
      name: "Bali Tropical Escape",
      destination: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      rating: "4.9",
      price: "$1,150",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80"
      ],
      desc: "A tropical week through rice terraces, temple courtyards and quiet beach mornings.",
      overview: "Seven days moving between Ubud's terraced hillsides and Bali's southern coast, with private transfers and a personal guide throughout.",
      accommodation: "5-star pool villa in Ubud, beachfront resort in Seminyak.",
      transportation: "Private air-conditioned car with driver, domestic transfers included.",
      included: ["Daily breakfast", "Airport transfers", "English-speaking guide", "4 guided excursions", "Welcome dinner"],
      notIncluded: ["International flights", "Travel insurance", "Personal expenses", "Optional spa treatments"],
      itinerary: [
        ["Day 1", "Arrival in Denpasar, transfer to Ubud, welcome dinner."],
        ["Day 2", "Rice terrace trek and traditional market visit."],
        ["Day 3", "Temple tour and Balinese cooking class."],
        ["Day 4", "Transfer to Seminyak, free beach afternoon."],
        ["Day 5", "Sunset cruise and seafood dinner on the sand."],
        ["Day 6", "Free day — optional spa or surf lesson."],
        ["Day 7", "Departure transfer to airport."]
      ],
      faqs: [
        ["Is this trip good for couples?", "Yes, it's one of our most-booked romantic itineraries."],
        ["Can dates be shifted?", "Yes, dates and pace are fully adjustable before booking."]
      ]
    },
    {
      id: "maldives-island-retreat",
      name: "Maldives Island Retreat",
      destination: "Maldives",
      duration: "6 Days / 5 Nights",
      rating: "5.0",
      price: "$2,450",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80"
      ],
      desc: "Overwater villas, private lagoons and slow, uninterrupted island time.",
      overview: "Six days at a private-island resort with speedboat transfers, an overwater villa and full-board dining.",
      accommodation: "Overwater villa with private lagoon access.",
      transportation: "Speedboat transfer from Malé airport, included both ways.",
      included: ["Full-board dining", "Speedboat transfers", "Snorkeling excursion", "Sunset fishing trip"],
      notIncluded: ["International flights", "Alcoholic beverages", "Spa treatments", "Travel insurance"],
      itinerary: [
        ["Day 1", "Arrival, speedboat transfer, villa check-in."],
        ["Day 2", "Snorkeling excursion on the house reef."],
        ["Day 3", "Free day, optional dolphin cruise."],
        ["Day 4", "Sunset fishing trip and beach BBQ."],
        ["Day 5", "Free day to relax at your villa."],
        ["Day 6", "Departure transfer."]
      ],
      faqs: [
        ["Is this suitable for honeymoons?", "It's designed specifically with honeymoon travelers in mind."],
        ["Are meals included?", "Yes, full board is included throughout your stay."]
      ]
    },
    {
      id: "swiss-alpine-adventure",
      name: "Swiss Alpine Adventure",
      destination: "Switzerland",
      duration: "8 Days / 7 Nights",
      rating: "4.8",
      price: "$2,890",
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=400&q=80"
      ],
      desc: "Scenic train rides, alpine villages and glacier views across the Swiss Alps.",
      overview: "Eight days across Zurich, Interlaken and Zermatt, riding some of Europe's most scenic rail routes.",
      accommodation: "4-star mountain-view hotels in each city.",
      transportation: "Swiss rail pass and private airport transfers included.",
      included: ["Daily breakfast", "Swiss rail pass", "Cable car to Matterhorn viewpoint", "City walking tours"],
      notIncluded: ["International flights", "Lunches and dinners", "Travel insurance", "Optional excursions"],
      itinerary: [
        ["Day 1", "Arrival in Zurich, city orientation walk."],
        ["Day 2", "Train to Interlaken, lakeside afternoon."],
        ["Day 3", "Jungfraujoch excursion — Top of Europe."],
        ["Day 4", "Train to Zermatt via scenic Glacier Express."],
        ["Day 5", "Matterhorn viewpoint cable car."],
        ["Day 6", "Free day for hiking or shopping."],
        ["Day 7", "Return to Zurich, farewell dinner."],
        ["Day 8", "Departure transfer."]
      ],
      faqs: [
        ["Is this trip physically demanding?", "Most activities are easy-paced with optional hikes."],
        ["What's the best season?", "June to September for the clearest alpine views."]
      ]
    },
    {
      id: "dubai-luxury-escape",
      name: "Dubai Luxury Escape",
      destination: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      rating: "4.9",
      price: "$1,780",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80"
      ],
      desc: "Desert dunes by day, skyline views by night — Dubai's contrasts in one trip.",
      overview: "Five days combining a five-star city stay with a private desert safari and skyline experiences.",
      accommodation: "5-star hotel in Downtown Dubai.",
      transportation: "Private airport transfers and desert safari 4x4 included.",
      included: ["Daily breakfast", "Desert safari with BBQ dinner", "Burj Khalifa observation deck", "Airport transfers"],
      notIncluded: ["International flights", "Lunches and dinners (except safari)", "Travel insurance"],
      itinerary: [
        ["Day 1", "Arrival, check-in, evening at Dubai Fountain."],
        ["Day 2", "Burj Khalifa observation deck and Old Dubai tour."],
        ["Day 3", "Desert safari, dune bashing and BBQ dinner."],
        ["Day 4", "Free day — shopping or beach club."],
        ["Day 5", "Departure transfer."]
      ],
      faqs: [
        ["Is the desert safari included?", "Yes, it's included with dinner and entertainment."],
        ["Is Dubai good for families?", "Yes, itinerary can be adapted for families with children."]
      ]
    },
    {
      id: "istanbul-heritage-journey",
      name: "Istanbul Heritage Journey",
      destination: "Istanbul, Türkiye",
      duration: "6 Days / 5 Nights",
      rating: "4.8",
      price: "$1,340",
      img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80"
      ],
      desc: "Bazaars, palaces and Bosphorus views across a city on two continents.",
      overview: "Six days exploring Istanbul's old city and a day trip into the fairy chimneys of Cappadocia.",
      accommodation: "Boutique hotel in Sultanahmet.",
      transportation: "Private transfers and a domestic flight to Cappadocia included.",
      included: ["Daily breakfast", "Bosphorus cruise", "Cappadocia day trip with flight", "Guided old city tour"],
      notIncluded: ["International flights", "Lunches and dinners", "Hot air balloon ride (optional)"],
      itinerary: [
        ["Day 1", "Arrival, evening at Sultanahmet Square."],
        ["Day 2", "Hagia Sophia, Blue Mosque and Grand Bazaar."],
        ["Day 3", "Bosphorus cruise and Dolmabahçe Palace."],
        ["Day 4", "Fly to Cappadocia, cave-hotel check-in."],
        ["Day 5", "Sunrise viewpoint and valley tour, fly back."],
        ["Day 6", "Departure transfer."]
      ],
      faqs: [
        ["Can we add a balloon ride?", "Yes, it can be added as an optional early-morning excursion."],
        ["Is this trip walkable?", "Sultanahmet's main sights are all within walking distance."]
      ]
    },
    {
      id: "european-dream-journey",
      name: "European Dream Journey",
      destination: "Paris, France & London, UK",
      duration: "10 Days / 9 Nights",
      rating: "4.9",
      price: "$3,250",
      img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=400&q=80"
      ],
      desc: "A grand two-capital journey through Europe's most iconic streets and museums.",
      overview: "Ten days split between Paris and London, connected by high-speed rail, with guided museum entry throughout.",
      accommodation: "4-star boutique hotels in central Paris and London.",
      transportation: "Eurostar high-speed rail between cities, private airport transfers.",
      included: ["Daily breakfast", "Eurostar train ticket", "Louvre & British Museum entry", "Seine river cruise"],
      notIncluded: ["International flights", "Lunches and dinners", "Travel insurance"],
      itinerary: [
        ["Day 1-2", "Arrival in Paris, Louvre and Champs-Élysées."],
        ["Day 3", "Seine river cruise and Montmartre."],
        ["Day 4", "Palace of Versailles day trip."],
        ["Day 5", "Eurostar to London."],
        ["Day 6-7", "British Museum, Westminster and Tower of London."],
        ["Day 8", "Free day for shopping or theatre."],
        ["Day 9", "Day trip to Windsor Castle."],
        ["Day 10", "Departure transfer."]
      ],
      faqs: [
        ["Is the Eurostar ticket included?", "Yes, second-class Eurostar tickets are included."],
        ["Can we extend the trip?", "Yes, extra nights in either city can be added."]
      ]
    }
  ];

  const tourGrid = document.getElementById("tourGrid");
  tourGrid.innerHTML = tours.map(t => `
    <article class="tour-card">
      <div class="tour-card__img">
        <img loading="lazy" src="${t.img}" alt="${t.name} — ${t.destination}">
        <span class="tour-card__rating">★ ${t.rating}</span>
        <button class="tour-card__fav" data-fav aria-label="Save to favorites">♥</button>
      </div>
      <div class="tour-card__body">
        <span class="tour-card__dest">${t.destination}</span>
        <h3>${t.name}</h3>
        <p class="tour-card__duration">${t.duration}</p>
        <p class="tour-card__desc">${t.desc}</p>
        <div class="tour-card__footer">
          <div class="tour-card__actions">
            <button class="btn btn--ghost btn--sm" data-view="${t.id}">View Details</button>
            <a class="btn btn--gold btn--sm" target="_blank" rel="noopener"
               href="${waLink('Hello Velyqora Travels, I would like to book the ' + t.name + ' package. Please share availability.')}">Book Now</a>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  tourGrid.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => btn.classList.toggle("is-active"));
  });

  /* Tour detail modal */
  const tourModal = document.getElementById("tourModal");
  const tourModalBody = document.getElementById("tourModalBody");

  function openTourModal(id){
    const t = tours.find(x => x.id === id);
    if (!t) return;
    tourModalBody.innerHTML = `
      <div class="tour-detail__hero"><img src="${t.img}" alt="${t.name}"></div>
      <div class="tour-detail__gallery">
        ${t.gallery.map(g => `<img loading="lazy" src="${g}" alt="${t.name} gallery photo">`).join("")}
      </div>
      <div class="tour-detail__body">
        <h3 class="tour-detail__title" id="tourModalTitle">${t.name}</h3>
        <p class="tour-detail__sub">${t.destination}</p>
        <div class="tour-detail__facts">
          <div><span>Duration</span><strong>${t.duration}</strong></div>
          <div><span>Rating</span><strong>★ ${t.rating}</strong></div>
        </div>
        <div class="tour-detail__section">
          <h4>Tour Overview</h4>
          <p>${t.overview}</p>
        </div>
        <div class="tour-detail__section">
          <h4>Daily Itinerary</h4>
          <ul class="tour-detail__itinerary">
            ${t.itinerary.map(([d,desc]) => `<li><strong>${d}</strong>${desc}</li>`).join("")}
          </ul>
        </div>
        <div class="tour-detail__cols">
          <div class="tour-detail__section">
            <h4>What's Included</h4>
            <ul>${t.included.map(i => `<li>${i}</li>`).join("")}</ul>
          </div>
          <div class="tour-detail__section">
            <h4>What's Not Included</h4>
            <ul>${t.notIncluded.map(i => `<li>${i}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="tour-detail__section">
          <h4>Accommodation &amp; Transportation</h4>
          <p><strong>Stay:</strong> ${t.accommodation}<br><strong>Transport:</strong> ${t.transportation}</p>
        </div>
        <div class="tour-detail__section">
          <h4>FAQ</h4>
          ${t.faqs.map(([q,a]) => `<div class="tour-detail__faq-item"><strong>${q}</strong><span style="color:var(--muted);font-size:0.9rem;">${a}</span></div>`).join("")}
        </div>
        <div class="tour-detail__actions">
          <a class="btn btn--gold" target="_blank" rel="noopener"
             href="${waLink('Hello Velyqora Travels, I would like to book the ' + t.name + ' package. Please confirm availability and next steps.')}">Book This Journey</a>
          <a class="btn btn--ghost" target="_blank" rel="noopener"
             href="${waLink('Hello Velyqora Travels, I have a question about the ' + t.name + ' package.')}">Ask On WhatsApp</a>
        </div>
      </div>
    `;
    openModal(tourModal);
  }

  tourGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-view]");
    if (btn) openTourModal(btn.getAttribute("data-view"));
  });

  /* ---------------- Generic modal helpers ---------------- */
  function openModal(modal){
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal(modal){
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  document.querySelectorAll(".modal").forEach(modal => {
    modal.querySelectorAll("[data-close-modal]").forEach(el => {
      el.addEventListener("click", () => closeModal(modal));
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      document.querySelectorAll(".modal.is-open").forEach(m => closeModal(m));
    }
  });

  /* ---------------- ARTICLES ---------------- */
  const articles = [
    {
      id: "bucket-list-10",
      cat: "Destinations",
      title: "10 Destinations Worth Adding To Your Bucket List",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80",
      desc: "From caldera sunsets to desert dunes, ten places worth building a whole trip around.",
      body: "Some destinations earn a place on every traveler's list for good reason — a coastline, a skyline or a stretch of desert that simply looks different from anywhere else. This guide walks through ten such places, from the layered history of Istanbul to the quiet overwater calm of the Maldives, with notes on when to go and what to build your itinerary around. Whichever region draws you in, the goal is the same: fewer stops, more time to actually experience each one."
    },
    {
      id: "plan-perfect-trip",
      cat: "Planning",
      title: "How To Plan Your Perfect International Trip",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=80",
      desc: "A practical framework for turning a destination idea into a trip you'll actually enjoy.",
      body: "A great trip usually comes down to a handful of decisions made early: how many places to visit, how much time to leave unplanned, and how honest you are about your own travel pace. This guide breaks planning into stages — narrowing your destination, sequencing your stops, and building in enough flexibility that a delayed flight or a rainy day doesn't unravel the whole itinerary. The result is a trip that feels considered rather than crammed."
    },
    {
      id: "best-beach-escapes",
      cat: "Beaches",
      title: "Best Beach Escapes For Your Next Holiday",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
      desc: "Where to find calm water, quiet sand and the kind of view worth waking up early for.",
      body: "Not every beach destination is built the same — some are made for diving and drift snorkeling, others for long, slow afternoons with a book. This roundup covers a range of coastal escapes, from the private lagoons of the Maldives to the volcanic-sand coves of the Mediterranean, with a note on the kind of traveler each one suits best. Consider it a starting point for narrowing a very long list of blue water down to the one that fits your trip."
    },
    {
      id: "luxury-experiences",
      cat: "Luxury",
      title: "Luxury Travel Experiences Worth Experiencing",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      desc: "A closer look at the stays and moments that define a truly premium trip.",
      body: "Luxury travel isn't only about the room — it's the small, well-timed details: a transfer that's waiting the moment you land, a dinner set up on a private terrace, a guide who knows exactly when to talk and when to let the view speak for itself. This piece looks at what actually separates a good hotel stay from a genuinely memorable journey, and how to ask for the details that make the difference before you book."
    },
    {
      id: "hidden-places",
      cat: "Discovery",
      title: "Hidden Places Every Traveler Should Discover",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=700&q=80",
      desc: "Quieter corners of well-known destinations that reward a little extra effort.",
      body: "Even the most visited destinations have corners that most travelers never reach — a valley one town over from the famous viewpoint, a market that opens before the tour buses arrive. This guide highlights a handful of these quieter finds across our most-requested regions, with practical notes on timing and access so they stay worth the detour rather than becoming the next crowded stop."
    }
  ];

  const articlesGrid = document.getElementById("articlesGrid");
  articlesGrid.innerHTML = articles.map(a => `
    <article class="article-card">
      <div class="article-card__img"><img loading="lazy" src="${a.img}" alt="${a.title}"></div>
      <div class="article-card__body">
        <span class="article-card__cat">${a.cat}</span>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
        <button class="article-card__more" data-article="${a.id}">Read More →</button>
      </div>
    </article>
  `).join("");

  const articleModal = document.getElementById("articleModal");
  const articleModalBody = document.getElementById("articleModalBody");
  articlesGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-article]");
    if (!btn) return;
    const a = articles.find(x => x.id === btn.getAttribute("data-article"));
    if (!a) return;
    articleModalBody.innerHTML = `
      <div class="article-detail">
        <img src="${a.img}" alt="${a.title}">
        <div class="article-detail__body">
          <span class="article-card__cat">${a.cat}</span>
          <h3 id="articleModalTitle">${a.title}</h3>
          <p>${a.body}</p>
        </div>
      </div>
    `;
    openModal(articleModal);
  });

  /* ---------------- TESTIMONIAL SLIDER ---------------- */
  const testiTrack = document.getElementById("testimonialTrack");
  const testiSlides = testiTrack.children;
  const testiDots = document.getElementById("testiDots");
  let testiIndex = 0;

  for (let i = 0; i < testiSlides.length; i++){
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("is-active");
    dot.addEventListener("click", () => goToTestimonial(i));
    testiDots.appendChild(dot);
  }
  function goToTestimonial(i){
    testiIndex = (i + testiSlides.length) % testiSlides.length;
    testiTrack.style.transform = `translateX(-${testiIndex * 100}%)`;
    Array.from(testiDots.children).forEach((d, di) => d.classList.toggle("is-active", di === testiIndex));
  }
  document.getElementById("testiPrev").addEventListener("click", () => goToTestimonial(testiIndex - 1));
  document.getElementById("testiNext").addEventListener("click", () => goToTestimonial(testiIndex + 1));

  /* ---------------- BUCKET LIST REGIONS ---------------- */
  const regionData = {
    asia: [
      ["Bali, Indonesia", "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=75"],
      ["Thailand", "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=75"],
      ["Kuala Lumpur, Malaysia", "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=500&q=75"]
    ],
    europe: [
      ["Switzerland", "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=500&q=75"],
      ["Santorini, Greece", "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=75"],
      ["Paris, France", "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=500&q=75"],
      ["London, UK", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=75"]
    ],
    middleeast: [
      ["Dubai, UAE", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=75"],
      ["Istanbul, Türkiye", "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=75"],
      ["Cappadocia, Türkiye", "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=500&q=75"]
    ],
    africa: [
      ["Sahara Desert", "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=500&q=75"],
      ["Coastal Morocco", "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=500&q=75"]
    ],
    oceania: [
      ["New Zealand", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=75"],
      ["Maldives", "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=500&q=75"]
    ],
    americas: [
      ["Rocky Mountains", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=75"],
      ["Coastal Getaway", "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=500&q=75"]
    ]
  };
  const regionResults = document.getElementById("regionResults");
  function renderRegion(key){
    regionResults.innerHTML = regionData[key].map(([name, img]) => `
      <div class="region-card">
        <img loading="lazy" src="${img}" alt="${name}">
        <span>${name}</span>
      </div>
    `).join("");
  }
  renderRegion("asia");
  document.getElementById("regions").addEventListener("click", (e) => {
    const btn = e.target.closest(".region");
    if (!btn) return;
    document.querySelectorAll(".region").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderRegion(btn.getAttribute("data-region"));
  });

  /* ---------------- FAQ ---------------- */
  document.getElementById("faqList").querySelectorAll(".faq__item").forEach(item => {
    item.querySelector(".faq__q").addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".faq__item").forEach(i => i.classList.remove("is-open"));
      if (!isOpen) item.classList.add("is-open");
    });
  });

  /* ---------------- NEWSLETTER ---------------- */
  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      document.getElementById("newsletterEmail").focus();
      return;
    }
    document.getElementById("newsletterMsg").hidden = false;
    newsletterForm.reset();
  });

  /* ---------------- CONTACT FORM ---------------- */
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()){ contactForm.reportValidity(); return; }
    document.getElementById("contactMsg").hidden = false;
    setTimeout(() => contactForm.reset(), 50);
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  const revealTargets = document.querySelectorAll(
    ".section__head, .dest-card, .exp-card, .tour-card, .step, .why-card, .article-card, .about__content, .about__media"
  );
  revealTargets.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => io.observe(el));

})();
