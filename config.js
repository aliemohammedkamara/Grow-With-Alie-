/* EDIT THIS FILE to update contact details, packages, portfolio, testimonials and blog posts. */
window.SITE = {
  email: "growwithalie1@gmail.com",   // inquiry form messages are delivered here
  whatsapp: "231555714637",           // country code + number, no + or spaces
  phone: "+231 555 714 637",
  social: { Facebook: "https://www.facebook.com/share/19sNyvkDTJ/" },  // add Instagram, TikTok, LinkedIn links here
  packages: [
    { name: "Starter", price: "$50", per: "/ month", features: ["1 social media platform", "12 content designs per month", "Basic monthly report", "Customer DM management: replies within 24 hours"] },
    { name: "Professional", price: "$100", per: "/ month", badge: "Most popular", features: ["2 social media platforms", "20 content designs + stories", "Community and comment management", "Monthly strategy call", "Customer DM management: replies within 24 hours"] },
    { name: "Premium", price: "$150", per: "/ month", features: ["3 social media platforms", "Daily content", "Reels and video content", "Advertising support", "Customer DM management: replies within 24 hours"] }
  ],
  portfolio: [   // all items are Grow With Alie sample designs, not client work. Add wide: true for landscape images.
    { t: "Weekly Motivation Post", cat: "Social Graphics", img: "assets/p1.jpg" },
    { t: "Brand Brochure: Outside Pages", cat: "Flyers & Print", img: "assets/p2.jpg", wide: true },
    { t: "Brand Brochure: Inside Pages", cat: "Flyers & Print", img: "assets/p3.jpg", wide: true },
    { t: "Logo and Profile Icon", cat: "Branding", img: "assets/p4.jpg" }
  ],
  testimonials: [   // current clients. Add a real quote later with: quote: "..." (the section heading switches to "What clients say" automatically)
    { name: "ArMab Global Solutions Inc.", logo: "assets/client-armab.png" },
    { name: "Prospira Group", logo: "assets/client-prospira.png" }
  ],
  team: [],   // other team members. Leave empty to show "Pending". Add: { name: "Full Name", role: "Job title", img: "assets/photo.jpg" }
  blog: [
    { t: "Why consistency beats perfection on social media", d: "Tips", b: "Three good posts a week will always outperform ten rushed ones. Pick a posting rhythm you can keep, plan your content ahead, and let your audience get used to hearing from you." },
    { t: "Reply to your DMs fast", d: "Customer care", b: "Many sales begin in a direct message. Answering within a day shows customers you are active and serious, and it builds trust before they ever spend a cent." },
    { t: "How to start every post with a hook", d: "Content", b: "The first line decides whether people keep reading. Start with a question, a surprising result or a bold promise, then deliver the value in the lines that follow." }
  ]
};
