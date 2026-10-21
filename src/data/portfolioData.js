export const portfolioData = {
  personal: {
    name: "Saksham Talwar",
    eyebrow: "Available for ambitious builds",
    headline: "Saksham Talwar",
    roles: [
      "AI Automation Engineer",
      "Full-Stack Developer",
      "Automation Specialist",
      "Software Developer",
      "IoT Enthusiast"
    ],
    bioSummary: "AI Automation Engineer at M&A Ventures building intelligent agent pipelines, full-stack automation workflows, and high-performance web applications. Former Associate Software Engineer at Beltech AI with deep hands-on expertise in React, TypeScript, Python, Node.js, Java, and MCP tooling.",
    aboutHeading: "I'm Saksham Talwar, an AI Automation Engineer based in Bengaluru.",
    aboutDescription: "I am an AI Automation Engineer at M&A Ventures in Bengaluru and an MCA student at Manipal University Jaipur. Previously at Beltech AI, I specialize in designing autonomous automation workflows, MCP servers, AI-agent tooling, and full-stack web applications with React, TypeScript, Python, Java, and REST APIs.",
    email: "dev.sakshamtalwar@gmail.com",
    phone: "+91 7217739614",
    location: "Bengaluru, Karnataka, India",
    address: "Bengaluru, Karnataka 560020",
    languages: "English, Hindi, Punjabi, Basic French",
    profileImage: "/mypic.jpg",
    logoImage: "https://cdn.dribbble.com/userupload/16228809/file/original-a3c56545957c9ddc109bfaf663954b1e.jpg",
    cvLink: "/Saksham_Talwar_CV.pdf",
    githubUrl: "https://github.com/SakshamTalwarr",
    linkedinUrl: "https://www.linkedin.com/in/saksham-talwar/",
    photographyUrl: "https://stphotography.netlify.app/",
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdZevQAngm6m7gbcuWmX1lo0ffM2OhO4JWPe_SmNWbLuqKIrA/viewform?embedded=true"
  },

  services: [
    {
      id: "ai-automation",
      title: "AI & Agentic Automation",
      icon: "Bot",
      color: "text-cyan-400",
      description: "Developing intelligent autonomous workflows, Model Context Protocol (MCP) servers, and AI pipeline automations using Python, Node.js, and LLMs."
    },
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      icon: "Code",
      color: "text-amber-400",
      description: "Building responsive, production-ready web applications with React, Vite, TypeScript, Tailwind CSS, REST APIs, and modern state architectures."
    },
    {
      id: "telematics-iot",
      title: "IoT & Telematics Systems",
      icon: "Cpu",
      color: "text-purple-400",
      description: "Engineering real-time telemetry dashboards and IoT hardware solutions using ESP32, Leaflet GPS mapping, WebSockets, and sensors."
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      icon: "ShoppingCart",
      color: "text-emerald-400",
      description: "Creating custom online stores using Shopify Liquid, developing custom payment flows, inventory systems, and video shopping experiences."
    },
    {
      id: "database",
      title: "Database Architecture",
      icon: "Database",
      color: "text-rose-400",
      description: "Designing high-performance relational databases using MySQL, PostgreSQL, and SQL with robust indexing, normalization, and security."
    },
    {
      id: "backend",
      title: "Backend & API Services",
      icon: "Server",
      color: "text-yellow-400",
      description: "Developing enterprise backend integrations with Node.js, Express, Java, JDBC, Hibernate, Tomcat, GraphQL, and microservices."
    }
  ],

  skills: [
    {
      category: "AI & Automation",
      icon: "Bot",
      badgeColor: "text-cyan-400",
      items: ["AI Automation", "MCP Servers", "LLM Tooling", "Selenium", "Python Scripts", "Workflow Automation", "API Integrations"]
    },
    {
      category: "Programming Languages",
      icon: "Code2",
      badgeColor: "text-pink-400",
      items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C++", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Libraries",
      icon: "Layers",
      badgeColor: "text-purple-400",
      items: ["React.js", "Vite", "Node.js", "Express", "Tailwind CSS", "REST APIs", "GraphQL", "WebSockets", "Hibernate", "JDBC"]
    },
    {
      category: "Databases & Cloud",
      icon: "Database",
      badgeColor: "text-rose-400",
      items: ["Neon PostgreSQL", "MySQL", "SQL", "Database Design", "Vercel", "Netlify", "Apache Tomcat"]
    },
    {
      category: "Tools & Platforms",
      icon: "Wrench",
      badgeColor: "text-amber-400",
      items: ["VS Code", "IntelliJ IDEA", "Git & GitHub", "Arduino IDE", "Leaflet Maps", "Termux", "Eclipse"]
    },
    {
      category: "IoT & Hardware",
      icon: "Radio",
      badgeColor: "text-teal-400",
      items: ["ESP32", "GPS Telematics", "RFID", "Sensors", "Blynk App", "Hardware Prototyping"]
    }
  ],

  projects: [
    {
      id: "edith",
      title: "E.D.I.T.H. · Enterprise Data & Search Intelligence",
      tech: "React, TypeScript, AI Automation, Web Scraping, LLMs, Tailwind CSS",
      description: "Enterprise search intelligence and automated data extraction platform built for M&A Ventures. Features automated RERA registry extraction, live keyword discovery, Google Ads search scraping, and entity-preserving AI copywriting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
      featured: true,
      links: [
        { label: "Live Platform", url: "https://edith-mav.vercel.app/", type: "external" }
      ]
    },
    {
      id: "namma-kharcha",
      title: "Namma Kharcha (ನಮ್ಮ ಖರ್ಚು) · Smart Expense Tracker",
      tech: "React 19, Vite, Tailwind CSS, Node.js, Express, Neon PostgreSQL, JWT, PWA",
      description: "Bengaluru-focused FinTech expense tracker and roommate bill splitter. Features instant UPI QR code generation, WhatsApp share formatting, fixed bill alerts (BESCOM, rent, maid), receipt attachments, and live budget analytics.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=450",
      featured: true,
      links: [
        { label: "Live App", url: "https://namma-kharcha.vercel.app/", type: "external" }
      ]
    },
    {
      id: "bmtc-tracker",
      title: "Live BMTC Bus Tracker & MCP Server",
      tech: "Node.js, Express, MCP Server, REST API, Leaflet Maps, Real-Time Transit Data",
      description: "Real-time Bengaluru BMTC public bus tracker and Model Context Protocol (MCP) server providing live bus GPS positions, route tracking, ETAs, and AI agent integration.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800&h=450",
      featured: true,
      links: [
        { label: "Live Tracker", url: "https://namma-bmtc-tracker.vercel.app/", type: "external" },
        { label: "GitHub", url: "https://github.com/sakshamtalwarr/BMTC-Tracker", type: "github" }
      ]
    },
    {
      id: "ev-telematics",
      title: "Oben Rorr EV Telematics Dashboard",
      tech: "React, Vite, Tailwind CSS, Leaflet, Node.js, Express, WebSocket, GraphQL",
      description: "Real-time EV monitoring dashboard for an Oben Rorr electric motorcycle, featuring live GPS and address tracking, battery and vehicle telemetry, geofences, alerts, and trip analytics.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800&h=450",
      featured: true,
      links: [
        { label: "Live Site", url: "https://mybikerorr.netlify.app", type: "external" },
        { label: "GitHub", url: "https://github.com/sakshamtalwarr/rorr-telemetrics", type: "github" }
      ]
    },
    {
      id: "weather-wise",
      title: "Weather-Wise: Will it Rain on my Parade?",
      tech: "Java, Python, React.js",
      description: "NASA Space Apps Challenge project visualizing 20 years of historical weather data to explore rain probability for specific dates.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "GitHub", url: "https://github.com/sakshamtalwarr/WeatherWise-NSAC25", type: "github" }
      ]
    },
    {
      id: "safeguard-india",
      title: "SafeGuard India",
      tech: "HTML5, CSS3, JavaScript",
      description: "A rapid-access web portal for women's safety featuring a zero-latency interface, panic buttons, and a centralized database of emergency helplines.",
      image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "Live Demo", url: "https://sakshamtalwarr.github.io/SafeGuard-India/", type: "external" }
      ]
    },
    {
      id: "pottery-passion",
      title: "The Pottery Passion",
      tech: "Shopify Liquid, HTML, CSS",
      description: "Custom-coded online crockery store with features like wish-lists, order management, custom payment flows, and 'Buy by Video' sections.",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "Live Store", url: "https://thepotterypassion.com", type: "external" }
      ]
    },
    {
      id: "grocery-system",
      title: "Grocery Inventory Management System",
      tech: "Java, JDBC, MySQL, Tomcat",
      description: "Full-stack inventory management web app supporting CRUD operations, admin dashboard, category filtering, and CSV bulk stock updates.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "GitHub", url: "https://github.com/sakshamtalwarr/Grocery-IMS", type: "github" }
      ]
    },
    {
      id: "abhappypaws",
      title: "AbHappyPaws Pet Shop",
      tech: "HTML, CSS, JavaScript",
      description: "Responsive multi-page pet shop application with product galleries, category pages, and Google Photos for dynamic media delivery.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "Live Site", url: "https://abhappypaws.com", type: "external" }
      ]
    },
    {
      id: "paws-and-hearts",
      title: "Paws & Hearts",
      tech: "HTML, CSS, JavaScript",
      description: "Fundraising website created to support animals in need, deployed on GitHub and Vercel.",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "Live Site", url: "https://pawsnhearts.vercel.app", type: "external" }
      ]
    },
    {
      id: "door-unlock-blynk",
      title: "Door Unlock via Blynk & RFID",
      tech: "ESP32, RFID, Blynk App, C++",
      description: "Remote door access system using ESP32 and RFID, allowing multi-mode unlocking via smartphone app or physical switch.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800&h=450",
      links: [
        { label: "GitHub", url: "https://github.com/SakshamTalwarr", type: "github" }
      ]
    }
  ],

  experience: [
    {
      title: "AI Automation Engineer",
      organization: "M&A Ventures, Bengaluru",
      date: "Sept 2026 - Present",
      description: "Architect and engineer intelligent AI automation workflows, autonomous LLM agent pipelines, and high-efficiency tooling to scale internal and client operations."
    },
    {
      title: "Associate Software Engineer",
      organization: "Beltech AI, Bengaluru",
      date: "Feb 2026 - Sept 2026",
      description: "Built responsive frontend experiences for Clio Box and Clio Customer Hub; engineered automation workflows in Python and Selenium; and developed real-time data and video tooling for AI computer vision pipelines."
    },
    {
      title: "Photography and Logistics Coordinator",
      organization: "College Festivals",
      description: "Led logistics for college festivals, coordinating a team of 10 members to cover events attended by over 300 students."
    },
    {
      title: "Photography Club Leader",
      organization: "College Club",
      description: "Organized workshops and exhibitions, increasing member engagement by 20%."
    },
    {
      title: "Literary Club Volunteer Leader",
      organization: "College Club",
      description: "Led literary events and debates, enhancing campus literary culture."
    },
    {
      title: "Tech Event Organizer",
      organization: "Gaming Tournament",
      description: "Organized a BGMI gaming tournament with a team of 5, engaging over 200 participants."
    }
  ],

  education: [
    {
      title: "Master of Computer Applications (MCA)",
      institution: "Manipal University Jaipur (Online)",
      date: "2026 - Present"
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Maharishi Dayanand University, Rohtak",
      date: "2022 - 2025 | 73.5%"
    },
    {
      title: "IoT Soil Moisture Sensor Project",
      institution: "Hackathon Winner | SGT University",
      date: "Feb 2024",
      description: "Awarded for innovation in smart irrigation systems using Arduino/ESP sensors."
    },
    {
      title: "Summer Analytics 2025",
      institution: "IIT Guwahati (Consulting & Analytics Club)",
      date: "July 2025",
      description: "Completed 6-week program on analytics and machine learning."
    },
    {
      title: "NASA Space Apps Challenge",
      institution: "Participant",
      date: "Oct 2025"
    },
    {
      title: "Fundamentals of Java Core & Web Programming",
      institution: "Anudip Foundation",
      date: "Dec 2025 | Grade: A+"
    },
    {
      title: "J.P. Morgan Software Engineering",
      institution: "Virtual Experience (Forage)",
      date: "July 2024"
    },
    {
      title: "Front-End Development & Programming with JavaScript",
      institution: "Coursera",
      date: "Certification"
    }
  ],

  blogs: [
    {
      id: "building-edith-enterprise-ai",
      title: "Building E.D.I.T.H.: Architecting Enterprise Search Intelligence & Real Estate Automation at M&A Ventures",
      category: "AI & Agents",
      date: "Oct 2026",
      readTime: "6 min read",
      summary: "How we engineered an autonomous enterprise intelligence platform at M&A Ventures to automate Karnataka RERA filings extraction, live Google Ads search scraping, and entity-preserving AI copywriting.",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["AI Automation", "LLMs", "MCP", "Web Scraping", "React"],
      content: `### The Challenge: Manual Data Workflows at Scale
In modern real estate advisory and investment at M&A Ventures, discovering project specifications from official RERA filings, extracting live keyword analytics from Google Ads, and producing accurate, compliance-ready content was traditionally a fragmented, multi-hour manual ordeal.

### System Architecture of E.D.I.T.H.
We architected **E.D.I.T.H.** (Enterprise Data & Search Intelligence) as a centralized intelligence engine:
- **Autonomous RERA Scraper**: Automatically identifies, validates, and parses Karnataka RERA registrations, builder details, target possession dates, and architectural parameters.
- **Live Keyword & Ads Discovery Engine**: Scrapes live search intent, competitive bid tiers, and search volume from Google Ads browser sessions without triggering rate limits.
- **Entity-Preserving AI Copywriter**: LLM prompts designed with strict JSON schema obligations that generate 350–550 word project descriptions with real-time keyword density calculations and Flesch readability scoring, while strictly preserving BHKs, builder names, and RERA compliance numbers.

\`\`\`javascript
// Structured prompt obligation for zero-hallucination real estate extraction
const promptSchema = {
  rera_number: "Official RERA Registration Number",
  developer: "Developer Entity Name",
  possession_date: "Target RERA Completion Date",
  amenities_count: "Total Amenities Count",
  location_connectivity: {
    metro: "Distance to nearest Metro Station in km/mins",
    airport: "Distance to Airport in km/mins"
  }
};
\`\`\`

### Impact
E.D.I.T.H. compressed research and content generation cycle time by **80%**, giving our internal team and client stakeholders instant access to verified facts and optimized marketing copy.`
    },
    {
      id: "bmtc-mcp-server-telemetry",
      title: "From Live Transit Telemetry to MCP Server: Building Bengaluru's Real-Time Bus Tracker",
      category: "APIs & Transit",
      date: "Oct 2026",
      readTime: "5 min read",
      summary: "Deconstructing Bengaluru's BMTC public transit stream into an open Model Context Protocol (MCP) server that empowers LLM agents to track live bus locations, geofences, and ETAs.",
      coverImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["MCP Server", "Transit Telemetry", "Node.js", "Leaflet", "Real-Time APIs"],
      content: `### Bridging Transit Telemetry with AI Agents
Bengaluru's BMTC bus network is the lifeline of the city. While mobile transit apps exist, there was no standardized interface allowing AI agents and autonomous assistants to query real-time bus locations, schedule delays, and arrival ETAs.

### Designing the MCP Server
By reverse-engineering the transit telemetry endpoints and building a resilient Node.js caching wrapper, I built **Namma BMTC Tracker** along with an official **Model Context Protocol (MCP)** server:
1. **Live GPS Interpolation**: Fetches active bus GPS coordinates across routes and calculates bearing and velocity.
2. **Standardized MCP Tools**: Implements \`get_live_bus_location\`, \`get_route_eta\`, and \`find_nearby_stops\`.
3. **Resilient Rate Limiting**: Employs in-memory LRU caching with dynamic TTLs to prevent hitting upstream limits during peak Bangalore traffic hours.

\`\`\`javascript
// MCP Tool Definition for Live BMTC Tracking
server.tool("get_live_bus_location", { routeNo: z.string() }, async ({ routeNo }) => {
  const buses = await fetchActiveBuses(routeNo);
  return {
    content: [{
      type: "text",
      text: JSON.stringify(buses.map(b => ({
        regNo: b.vehicle_no,
        lat: b.latitude,
        lng: b.longitude,
        speed: b.speed_kmh,
        eta: b.estimated_arrival
      })))
    }]
  };
});
\`\`\`

### Result
Now, LLM agents (like Claude or Antigravity) can directly reason over live Bangalore traffic, answering questions like: *"Which 500-D bus is closest to Silk Board right now?"*`
    },
    {
      id: "namma-kharcha-fintech-stack",
      title: "Engineering Namma Kharcha: A Zero-Friction Bengaluru FinTech Expense Tracker with React 19 & Neon Postgres",
      category: "FinTech & Web",
      date: "Oct 2026",
      readTime: "5 min read",
      summary: "How I built a high-speed Bengaluru roommate expense tracker featuring instant dynamic UPI QR codes, WhatsApp share automation, and serverless PostgreSQL with in-memory caching.",
      coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["React 19", "FinTech", "Neon Postgres", "Tailwind CSS", "UPI Integration"],
      content: `### The Problem with Traditional Bill Splitters
Existing expense splitting apps often suffer from bloat, mandatory login friction for all flatmates, and cumbersome settlement flows. In Bengaluru flat shares, people just want to split a grocery bill, electricity bill, or brewery tab and get an instant UPI QR code.

### The Modern Tech Stack
- **React 19 + Vite**: High-performance rendering with optimistic UI updates.
- **Neon Serverless PostgreSQL**: Auto-scaling Postgres database with branchable databases and low cold-start latencies.
- **Dynamic UPI QR Engine**: Generates genuine UPI transaction strings (\`upi://pay?pa=...&pn=...&am=...\`) rendered as crisp SVG QR codes scan-friendly by Google Pay, PhonePe, and Paytm.
- **WhatsApp Share Direct Link**: 1-tap formatted text generation with breakdown items, per-person share, and payment deep links.

\`\`\`javascript
// Instant dynamic UPI QR deep link generation
export function generateUpiLink({ vpa, payeeName, amount, note }) {
  const params = new URLSearchParams({
    pa: vpa,
    pn: payeeName,
    am: amount.toFixed(2),
    cu: 'INR',
    tn: note || 'Shared expense via Namma Kharcha'
  });
  return \`upi://pay?\${params.toString()}\`;
}
\`\`\`

### Takeaway
By designing for the specific local culture and zero-friction payment protocols, Namma Kharcha makes communal living expenses stress-free.`
    },
    {
      id: "iot-telematics-oben-rorr",
      title: "Real-Time Electric Vehicle Telematics: Mapping Oben Rorr with WebSockets & Leaflet",
      category: "IoT & Hardware",
      date: "Aug 2026",
      readTime: "4 min read",
      summary: "Designing an interactive vehicle telematics dashboard for electric motorcycles with real-time battery status, trip diagnostics, live GPS coordinates, and WebSocket streaming.",
      coverImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800&h=450",
      tags: ["IoT", "WebSockets", "Leaflet", "GraphQL", "EV Telemetry"],
      content: `### Connecting Physical Vehicles to the Web
Connected mobility requires continuous telemetry streams: battery state-of-charge (SoC), cell voltages, motor temperatures, GPS speed, and historical riding analytics.

### Architecture Highlights
- **Hardware Interface**: Telemetry module connected via MQTT / HTTP streaming packets containing timestamped sensor payloads.
- **WebSocket & GraphQL Subscriptions**: Pushes live vehicle status to the frontend dashboard with sub-second latency.
- **Leaflet & OpenStreetMap**: Interactive GPS trail rendering, showing speed heatmaps along previous routes and real-time geofence boundaries.
- **Battery Health Diagnostics**: Predicts estimated range based on real-time power draw and historical terrain efficiency.`
    }
  ],

  hobbies: "Engaging in Technology Projects, Web Development, Photography, Moto rides, and Singing."
};
