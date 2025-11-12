export interface UseCase {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  htmlCode: string;
  tags: string[];
}

export const useCases: UseCase[] = [
  {
    id: 'dashboard-layout',
    title: 'Dashboard Layout',
    description:
      'Modern analytics dashboard with glass cards displaying key metrics, charts, and data visualizations.',
    category: 'Layout',
    icon: 'fa-chart-line',
    tags: ['dashboard', 'analytics', 'metrics', 'layout'],
    htmlCode: `<div class="showcase-dashboard">
  <div class="showcase-dashboard__header glass-container glass-container--rounded">
    <div class="glass-content">
      <h2>Analytics Dashboard</h2>
      <div class="showcase-dashboard__actions">
        <button class="glass-btn glass-btn--secondary">
          <i class="fa-solid fa-download"></i>
          Export
        </button>
        <button class="glass-btn glass-btn--primary">
          <i class="fa-solid fa-plus"></i>
          New Report
        </button>
      </div>
    </div>
  </div>

  <div class="showcase-dashboard__grid">
    <div class="glass-card glass-card--stat">
      <div class="glass-card__icon glass-card__icon--primary">
        <i class="fa-solid fa-users"></i>
      </div>
      <div class="glass-card__content">
        <h3 class="glass-card__value">12,543</h3>
        <p class="glass-card__label">Total Users</p>
        <span class="glass-card__change glass-card__change--positive">
          <i class="fa-solid fa-arrow-up"></i> 12.5%
        </span>
      </div>
    </div>

    <div class="glass-card glass-card--stat">
      <div class="glass-card__icon glass-card__icon--success">
        <i class="fa-solid fa-dollar-sign"></i>
      </div>
      <div class="glass-card__content">
        <h3 class="glass-card__value">$45,231</h3>
        <p class="glass-card__label">Revenue</p>
        <span class="glass-card__change glass-card__change--positive">
          <i class="fa-solid fa-arrow-up"></i> 8.2%
        </span>
      </div>
    </div>

    <div class="glass-card glass-card--stat">
      <div class="glass-card__icon glass-card__icon--warning">
        <i class="fa-solid fa-shopping-cart"></i>
      </div>
      <div class="glass-card__content">
        <h3 class="glass-card__value">1,234</h3>
        <p class="glass-card__label">Orders</p>
        <span class="glass-card__change glass-card__change--negative">
          <i class="fa-solid fa-arrow-down"></i> 3.1%
        </span>
      </div>
    </div>

    <div class="glass-card glass-card--stat">
      <div class="glass-card__icon glass-card__icon--info">
        <i class="fa-solid fa-eye"></i>
      </div>
      <div class="glass-card__content">
        <h3 class="glass-card__value">89,432</h3>
        <p class="glass-card__label">Page Views</p>
        <span class="glass-card__change glass-card__change--positive">
          <i class="fa-solid fa-arrow-up"></i> 15.3%
        </span>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'landing-hero',
    title: 'Landing Page Hero',
    description:
      'Eye-catching hero section with glass overlay, perfect for modern landing pages and marketing sites.',
    category: 'Marketing',
    icon: 'fa-rocket',
    tags: ['landing', 'hero', 'marketing', 'cta'],
    htmlCode: `<div class="showcase-hero">
  <div class="showcase-hero__content glass-container glass-container--rounded glass-container--large">
    <div class="glass-content glass-content--column">
      <h1 class="showcase-hero__title">
        Build Beautiful Interfaces with Glass Effects
      </h1>
      <p class="showcase-hero__subtitle">
        Create stunning, modern UIs with our customizable frosted glass library.
        Perfect for dashboards, apps, and websites.
      </p>
      <div class="showcase-hero__actions">
        <button class="glass-btn glass-btn--primary glass-btn--large">
          <i class="fa-solid fa-download"></i>
          Get Started
        </button>
        <button class="glass-btn glass-btn--secondary glass-btn--large">
          <i class="fa-solid fa-play"></i>
          View Demo
        </button>
      </div>
      <div class="showcase-hero__features">
        <div class="showcase-hero__feature">
          <i class="fa-solid fa-check-circle"></i>
          <span>Easy to Use</span>
        </div>
        <div class="showcase-hero__feature">
          <i class="fa-solid fa-check-circle"></i>
          <span>Fully Customizable</span>
        </div>
        <div class="showcase-hero__feature">
          <i class="fa-solid fa-check-circle"></i>
          <span>Framework Agnostic</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'mobile-app-ui',
    title: 'Mobile App Interface',
    description:
      'Clean mobile app UI with glass navigation, cards, and action buttons optimized for touch interfaces.',
    category: 'Mobile',
    icon: 'fa-mobile-screen',
    tags: ['mobile', 'app', 'touch', 'navigation'],
    htmlCode: `<div class="showcase-mobile">
  <div class="showcase-mobile__screen">
    <div class="showcase-mobile__statusbar glass-container">
      <div class="glass-content">
        <span>9:41</span>
        <div class="showcase-mobile__statusbar-icons">
          <i class="fa-solid fa-signal"></i>
          <i class="fa-solid fa-wifi"></i>
          <i class="fa-solid fa-battery-full"></i>
        </div>
      </div>
    </div>

    <div class="showcase-mobile__header glass-container glass-container--rounded">
      <div class="glass-content">
        <button class="showcase-mobile__menu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <h2>My App</h2>
        <button class="showcase-mobile__search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>

    <div class="showcase-mobile__content">
      <div class="glass-card glass-card--mobile">
        <div class="glass-card__image">
          <img src="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=200&fit=crop" alt="Featured" />
        </div>
        <div class="glass-card__content">
          <h3>Featured Content</h3>
          <p>Discover amazing new features and updates.</p>
        </div>
      </div>
    </div>

    <div class="showcase-mobile__navbar glass-container">
      <div class="glass-content">
        <button class="showcase-mobile__nav-item showcase-mobile__nav-item--active">
          <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </button>
        <button class="showcase-mobile__nav-item">
          <i class="fa-solid fa-compass"></i>
          <span>Explore</span>
        </button>
        <button class="showcase-mobile__nav-item">
          <i class="fa-solid fa-heart"></i>
          <span>Favorites</span>
        </button>
        <button class="showcase-mobile__nav-item">
          <i class="fa-solid fa-user"></i>
          <span>Profile</span>
        </button>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'ecommerce-product',
    title: 'E-Commerce Product Page',
    description:
      'Modern product showcase with glass cards for images, details, pricing, and add-to-cart functionality.',
    category: 'E-Commerce',
    icon: 'fa-shopping-bag',
    tags: ['ecommerce', 'product', 'shopping', 'cart'],
    htmlCode: `<div class="showcase-ecommerce">
  <div class="showcase-ecommerce__grid">
    <div class="glass-card glass-card--product-large">
      <div class="glass-card__image">
        <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop" alt="Product" />
        <span class="glass-badge glass-badge--success">20% OFF</span>
      </div>
    </div>

    <div class="glass-card glass-card--product-details">
      <div class="glass-card__content">
        <span class="glass-tag">New Arrival</span>
        <h2 class="showcase-ecommerce__title">Premium Wireless Headphones</h2>
        <div class="showcase-ecommerce__rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <span>4.5 (234 reviews)</span>
        </div>
        <div class="showcase-ecommerce__price">
          <span class="showcase-ecommerce__price-current">$239.99</span>
          <span class="showcase-ecommerce__price-original">$299.99</span>
        </div>
        <p class="showcase-ecommerce__description">
          Experience premium sound quality with active noise cancellation,
          30-hour battery life, and comfortable over-ear design.
        </p>
        <div class="showcase-ecommerce__options">
          <label>Color:</label>
          <div class="showcase-ecommerce__colors">
            <button class="showcase-ecommerce__color showcase-ecommerce__color--active" style="background: #000"></button>
            <button class="showcase-ecommerce__color" style="background: #fff; border: 1px solid rgba(255,255,255,0.2)"></button>
            <button class="showcase-ecommerce__color" style="background: #3b82f6"></button>
          </div>
        </div>
        <div class="showcase-ecommerce__actions">
          <button class="glass-btn glass-btn--secondary">
            <i class="fa-solid fa-heart"></i>
          </button>
          <button class="glass-btn glass-btn--primary" style="flex: 1">
            <i class="fa-solid fa-cart-shopping"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'portfolio-gallery',
    title: 'Portfolio Gallery',
    description:
      'Elegant portfolio grid with glass overlay cards, perfect for showcasing creative work and projects.',
    category: 'Portfolio',
    icon: 'fa-images',
    tags: ['portfolio', 'gallery', 'creative', 'showcase'],
    htmlCode: `<div class="showcase-portfolio">
  <div class="showcase-portfolio__header glass-container glass-container--rounded">
    <div class="glass-content glass-content--column">
      <h2>My Work</h2>
      <p>A collection of my recent projects and creative endeavors</p>
    </div>
  </div>

  <div class="showcase-portfolio__grid">
    <div class="showcase-portfolio__item">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop" alt="Project 1" />
      <div class="showcase-portfolio__overlay glass-container">
        <div class="glass-content glass-content--column">
          <h3>Brand Identity</h3>
          <p>Visual design for tech startup</p>
          <div class="showcase-portfolio__tags">
            <span class="glass-tag">Branding</span>
            <span class="glass-tag">Design</span>
          </div>
        </div>
      </div>
    </div>

    <div class="showcase-portfolio__item">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop" alt="Project 2" />
      <div class="showcase-portfolio__overlay glass-container">
        <div class="glass-content glass-content--column">
          <h3>Web Application</h3>
          <p>Full-stack dashboard solution</p>
          <div class="showcase-portfolio__tags">
            <span class="glass-tag">Development</span>
            <span class="glass-tag">UI/UX</span>
          </div>
        </div>
      </div>
    </div>

    <div class="showcase-portfolio__item">
      <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop" alt="Project 3" />
      <div class="showcase-portfolio__overlay glass-container">
        <div class="glass-content glass-content--column">
          <h3>Mobile App</h3>
          <p>iOS fitness tracking app</p>
          <div class="showcase-portfolio__tags">
            <span class="glass-tag">Mobile</span>
            <span class="glass-tag">iOS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'admin-panel',
    title: 'Admin Panel',
    description:
      'Comprehensive admin interface with sidebar navigation, data tables, and management controls.',
    category: 'Layout',
    icon: 'fa-user-shield',
    tags: ['admin', 'dashboard', 'management', 'table'],
    htmlCode: `<div class="showcase-admin">
  <div class="showcase-admin__sidebar glass-container">
    <div class="glass-content glass-content--column">
      <div class="showcase-admin__logo">
        <i class="fa-solid fa-shield-halved"></i>
        <span>Admin Panel</span>
      </div>
      <nav class="showcase-admin__nav">
        <a href="#" class="showcase-admin__nav-item showcase-admin__nav-item--active">
          <i class="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="showcase-admin__nav-item">
          <i class="fa-solid fa-users"></i>
          <span>Users</span>
        </a>
        <a href="#" class="showcase-admin__nav-item">
          <i class="fa-solid fa-box"></i>
          <span>Products</span>
        </a>
        <a href="#" class="showcase-admin__nav-item">
          <i class="fa-solid fa-chart-bar"></i>
          <span>Analytics</span>
        </a>
        <a href="#" class="showcase-admin__nav-item">
          <i class="fa-solid fa-gear"></i>
          <span>Settings</span>
        </a>
      </nav>
    </div>
  </div>

  <div class="showcase-admin__main">
    <div class="showcase-admin__header glass-container glass-container--rounded">
      <div class="glass-content">
        <h2>User Management</h2>
        <button class="glass-btn glass-btn--primary">
          <i class="fa-solid fa-plus"></i>
          Add User
        </button>
      </div>
    </div>

    <div class="glass-card glass-card--table">
      <table class="showcase-admin__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            <td><span class="glass-badge glass-badge--success">Active</span></td>
            <td>
              <button class="glass-btn glass-btn--small"><i class="fa-solid fa-pen"></i></button>
              <button class="glass-btn glass-btn--small"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
  },
  {
    id: 'media-player',
    title: 'Media Player',
    description:
      'Full-featured media player with playlist, controls, and visualizations using glass effects.',
    category: 'Media',
    icon: 'fa-play-circle',
    tags: ['media', 'player', 'music', 'video'],
    htmlCode: `<div class="showcase-player">
  <div class="showcase-player__container glass-container glass-container--rounded glass-container--large">
    <div class="glass-content glass-content--column">
      <div class="showcase-player__artwork">
        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" alt="Album Art" />
      </div>

      <div class="showcase-player__info">
        <h3 class="showcase-player__title">Midnight Dreams</h3>
        <p class="showcase-player__artist">The Synthwave Collective</p>
      </div>

      <div class="showcase-player__progress">
        <span class="showcase-player__time">2:34</span>
        <div class="showcase-player__bar">
          <div class="showcase-player__bar-fill" style="width: 45%"></div>
        </div>
        <span class="showcase-player__time">5:42</span>
      </div>

      <div class="showcase-player__controls">
        <button class="showcase-player__btn">
          <i class="fa-solid fa-shuffle"></i>
        </button>
        <button class="showcase-player__btn">
          <i class="fa-solid fa-backward-step"></i>
        </button>
        <button class="showcase-player__btn showcase-player__btn--play">
          <i class="fa-solid fa-play"></i>
        </button>
        <button class="showcase-player__btn">
          <i class="fa-solid fa-forward-step"></i>
        </button>
        <button class="showcase-player__btn">
          <i class="fa-solid fa-repeat"></i>
        </button>
      </div>

      <div class="showcase-player__volume">
        <i class="fa-solid fa-volume-high"></i>
        <div class="showcase-player__volume-bar">
          <div class="showcase-player__volume-fill" style="width: 70%"></div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'weather-widget',
    title: 'Weather Widget',
    description: 'Beautiful weather display with current conditions, forecast, and animated icons.',
    category: 'Widget',
    icon: 'fa-cloud-sun',
    tags: ['weather', 'widget', 'forecast', 'temperature'],
    htmlCode: `<div class="showcase-weather glass-container glass-container--rounded glass-container--large">
  <div class="glass-content glass-content--column">
    <div class="showcase-weather__location">
      <i class="fa-solid fa-location-dot"></i>
      <span>San Francisco, CA</span>
    </div>

    <div class="showcase-weather__current">
      <div class="showcase-weather__icon">
        <i class="fa-solid fa-cloud-sun"></i>
      </div>
      <div class="showcase-weather__temp">72°F</div>
      <div class="showcase-weather__condition">Partly Cloudy</div>
    </div>

    <div class="showcase-weather__details">
      <div class="showcase-weather__detail">
        <i class="fa-solid fa-droplet"></i>
        <span>Humidity</span>
        <strong>65%</strong>
      </div>
      <div class="showcase-weather__detail">
        <i class="fa-solid fa-wind"></i>
        <span>Wind</span>
        <strong>12 mph</strong>
      </div>
      <div class="showcase-weather__detail">
        <i class="fa-solid fa-eye"></i>
        <span>Visibility</span>
        <strong>10 mi</strong>
      </div>
    </div>

    <div class="showcase-weather__forecast">
      <div class="showcase-weather__day">
        <span>Mon</span>
        <i class="fa-solid fa-sun"></i>
        <span>75°</span>
      </div>
      <div class="showcase-weather__day">
        <span>Tue</span>
        <i class="fa-solid fa-cloud"></i>
        <span>68°</span>
      </div>
      <div class="showcase-weather__day">
        <span>Wed</span>
        <i class="fa-solid fa-cloud-rain"></i>
        <span>62°</span>
      </div>
      <div class="showcase-weather__day">
        <span>Thu</span>
        <i class="fa-solid fa-cloud-sun"></i>
        <span>70°</span>
      </div>
      <div class="showcase-weather__day">
        <span>Fri</span>
        <i class="fa-solid fa-sun"></i>
        <span>76°</span>
      </div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'calendar-interface',
    title: 'Calendar Interface',
    description:
      'Interactive calendar with event cards, date navigation, and glass-styled event details.',
    category: 'Productivity',
    icon: 'fa-calendar',
    tags: ['calendar', 'events', 'schedule', 'productivity'],
    htmlCode: `<div class="showcase-calendar">
  <div class="showcase-calendar__header glass-container glass-container--rounded">
    <div class="glass-content">
      <button class="glass-btn glass-btn--secondary">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <h2>November 2025</h2>
      <button class="glass-btn glass-btn--secondary">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>

  <div class="showcase-calendar__grid glass-container glass-container--rounded">
    <div class="glass-content">
      <div class="showcase-calendar__weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div class="showcase-calendar__days">
        <div class="showcase-calendar__day showcase-calendar__day--other">30</div>
        <div class="showcase-calendar__day showcase-calendar__day--other">31</div>
        <div class="showcase-calendar__day">1</div>
        <div class="showcase-calendar__day">2</div>
        <div class="showcase-calendar__day">3</div>
        <div class="showcase-calendar__day">4</div>
        <div class="showcase-calendar__day">5</div>
        <div class="showcase-calendar__day">6</div>
        <div class="showcase-calendar__day">7</div>
        <div class="showcase-calendar__day">8</div>
        <div class="showcase-calendar__day">9</div>
        <div class="showcase-calendar__day">10</div>
        <div class="showcase-calendar__day showcase-calendar__day--today">11</div>
        <div class="showcase-calendar__day">12</div>
        <div class="showcase-calendar__day showcase-calendar__day--event">15</div>
        <div class="showcase-calendar__day">16</div>
        <div class="showcase-calendar__day">17</div>
        <div class="showcase-calendar__day showcase-calendar__day--event">20</div>
        <div class="showcase-calendar__day">21</div>
      </div>
    </div>
  </div>

  <div class="showcase-calendar__events glass-container glass-container--rounded">
    <div class="glass-content glass-content--column">
      <h3>Upcoming Events</h3>
      <div class="showcase-calendar__event">
        <div class="showcase-calendar__event-dot" style="background: #3b82f6"></div>
        <div class="showcase-calendar__event-info">
          <strong>Team Meeting</strong>
          <span>Nov 15, 2:00 PM</span>
        </div>
      </div>
      <div class="showcase-calendar__event">
        <div class="showcase-calendar__event-dot" style="background: #10b981"></div>
        <div class="showcase-calendar__event-info">
          <strong>Project Deadline</strong>
          <span>Nov 20, 5:00 PM</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
  },
];
