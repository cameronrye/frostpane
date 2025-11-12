export interface Component {
  id: string;
  title: string;
  description: string;
  htmlCode: string;
  category: string;
  tags: string[];
}

export const components: Component[] = [
  {
    id: 'music-player',
    title: 'Music Player',
    description:
      'A sleek music player widget featuring album artwork, track information, and playback controls. Perfect for music apps and media interfaces.',
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--large">
  <div class="glass-content">
    <div class="player">
      <div class="player__thumb">
        <div class="player__img"></div>
        <div class="player__legend">
          <h3 class="player__legend__title">Cosmic Journey</h3>
          <span class="player__legend__sub-title">Stellar Waves</span>
        </div>
      </div>
      <div class="player__controls">
        <i class="fa-solid fa-backward-step"></i>
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-forward-step"></i>
      </div>
    </div>
  </div>
</div>`,
    category: 'Media',
    tags: ['music', 'player', 'media', 'widget'],
  },
  {
    id: 'navigation-bar',
    title: 'Navigation Bar',
    description:
      'Elegant horizontal navigation with smooth hover effects. Includes icon and text labels for clear wayfinding in your application.',
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content">
    <div class="glass-item glass-item--active">
      <i class="fa-solid fa-house"></i>
      Home
    </div>
    <div class="glass-item">
      <i class="fa-solid fa-compass"></i>
      Explore
    </div>
    <div class="glass-item">
      <i class="fa-solid fa-heart"></i>
      Favorites
    </div>
    <div class="glass-item">
      <i class="fa-solid fa-user"></i>
      Profile
    </div>
  </div>
</div>`,
    category: 'Navigation',
    tags: ['navigation', 'menu', 'nav', 'bar'],
  },
  {
    id: 'icon-dock',
    title: 'Icon Dock (with Lens Filter)',
    description:
      'macOS-inspired application dock with SVG lens distortion effect. Features smooth hover animations and magnification for an enhanced user experience.',
    htmlCode: `<div class="glass-container">
  <div class="glass-content">
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-folder"></i>
    </a>
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-map-location-dot"></i>
    </a>
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-message"></i>
    </a>
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-compass"></i>
    </a>
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-book"></i>
    </a>
  </div>
</div>

<!-- Required SVG Filter -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <filter id="lensFilter">
    <feComponentTransfer in="SourceAlpha" result="alpha">
      <feFuncA type="identity" />
    </feComponentTransfer>
    <feGaussianBlur in="alpha" stdDeviation="50" result="blur" />
    <feDisplacementMap in="SourceGraphic" in2="blur" scale="50"
                       xChannelSelector="A" yChannelSelector="A" />
  </filter>
</svg>`,
    category: 'Navigation',
    tags: ['dock', 'icons', 'navigation', 'macos'],
  },
  {
    id: 'action-buttons',
    title: 'Action Buttons',
    description:
      'Versatile glass buttons perfect for search, notifications, settings, and other common actions. Compact design with clear iconography.',
    htmlCode: `<div class="glass-container glass-container--small">
  <div class="glass-content">
    <i class="fa-solid fa-magnifying-glass"></i>
    Search
  </div>
</div>

<div class="glass-container glass-container--small">
  <div class="glass-content">
    <i class="fa-solid fa-bell"></i>
    Alerts
  </div>
</div>

<div class="glass-container glass-container--small">
  <div class="glass-content">
    <i class="fa-solid fa-download"></i>
    Download
  </div>
</div>`,
    category: 'Buttons',
    tags: ['button', 'action', 'interactive'],
  },
  {
    id: 'form-inputs',
    title: 'Form Inputs',
    description:
      'Beautiful glass-styled input fields with labels and icons. Perfect for login forms, search bars, and data entry interfaces.',
    htmlCode: `<div class="glass-form">
  <div class="glass-form__group">
    <label class="glass-form__label" for="email">Email</label>
    <div class="glass-form__input-wrapper">
      <i class="fa-solid fa-envelope glass-form__icon"></i>
      <input
        type="email"
        id="email"
        class="glass-form__input"
        placeholder="Enter your email"
      />
    </div>
  </div>

  <div class="glass-form__group">
    <label class="glass-form__label" for="password">Password</label>
    <div class="glass-form__input-wrapper">
      <i class="fa-solid fa-lock glass-form__icon"></i>
      <input
        type="password"
        id="password"
        class="glass-form__input"
        placeholder="Enter your password"
      />
    </div>
  </div>
</div>`,
    category: 'Forms',
    tags: ['form', 'input', 'text', 'field'],
  },
  {
    id: 'textarea',
    title: 'Textarea',
    description:
      'Glass-styled textarea for longer text input. Ideal for comments, messages, and multi-line content.',
    htmlCode: `<div class="glass-form">
  <div class="glass-form__group">
    <label class="glass-form__label" for="message">Message</label>
    <textarea
      id="message"
      class="glass-form__textarea"
      placeholder="Write your message here..."
      rows="5"
    ></textarea>
  </div>
</div>`,
    category: 'Forms',
    tags: ['form', 'textarea', 'text', 'input'],
  },
  {
    id: 'select-dropdown',
    title: 'Select Dropdown',
    description:
      'Elegant dropdown select with glass styling. Great for option selection and form controls.',
    htmlCode: `<div class="glass-form">
  <div class="glass-form__group">
    <label class="glass-form__label" for="country">Country</label>
    <div class="glass-form__select-wrapper">
      <i class="fa-solid fa-globe glass-form__icon"></i>
      <select id="country" class="glass-form__select">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </select>
      <i class="fa-solid fa-chevron-down glass-form__select-arrow"></i>
    </div>
  </div>
</div>`,
    category: 'Forms',
    tags: ['form', 'select', 'dropdown', 'option'],
  },
  {
    id: 'checkboxes-radios',
    title: 'Checkboxes & Radio Buttons',
    description:
      'Custom-styled checkboxes and radio buttons with glass effects. Perfect for forms and settings.',
    htmlCode: `<div class="glass-form">
  <div class="glass-form__group">
    <label class="glass-form__label">Preferences</label>

    <label class="glass-form__checkbox">
      <input type="checkbox" />
      <span class="glass-form__checkbox-custom"></span>
      <span class="glass-form__checkbox-label">Email notifications</span>
    </label>

    <label class="glass-form__checkbox">
      <input type="checkbox" />
      <span class="glass-form__checkbox-custom"></span>
      <span class="glass-form__checkbox-label">SMS notifications</span>
    </label>
  </div>

  <div class="glass-form__group">
    <label class="glass-form__label">Theme</label>

    <label class="glass-form__radio">
      <input type="radio" name="theme" value="light" />
      <span class="glass-form__radio-custom"></span>
      <span class="glass-form__radio-label">Light</span>
    </label>

    <label class="glass-form__radio">
      <input type="radio" name="theme" value="dark" />
      <span class="glass-form__radio-custom"></span>
      <span class="glass-form__radio-label">Dark</span>
    </label>
  </div>
</div>`,
    category: 'Forms',
    tags: ['form', 'checkbox', 'radio', 'input'],
  },
  {
    id: 'modal-dialog',
    title: 'Modal Dialog',
    description:
      'Centered modal with glass backdrop overlay. Perfect for confirmations, alerts, and focused content display.',
    htmlCode: `<!-- Trigger Button -->
<button class="glass-container glass-container--small" onclick="openModal()">
  <div class="glass-content">
    <i class="fa-solid fa-window-restore"></i>
    Open Modal
  </div>
</button>

<!-- Modal -->
<div class="glass-modal" id="exampleModal">
  <div class="glass-modal__backdrop" onclick="closeModal()"></div>
  <div class="glass-modal__content">
    <div class="glass-modal__header">
      <h3 class="glass-modal__title">Welcome!</h3>
      <button class="glass-modal__close" onclick="closeModal()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="glass-modal__body">
      <p>This is a beautiful glass modal dialog. It features a blurred backdrop and smooth animations.</p>
    </div>
    <div class="glass-modal__footer">
      <button class="glass-btn glass-btn--secondary" onclick="closeModal()">
        Cancel
      </button>
      <button class="glass-btn glass-btn--primary">
        Confirm
      </button>
    </div>
  </div>
</div>

<script>
function openModal() {
  document.getElementById('exampleModal').classList.add('glass-modal--active');
}
function closeModal() {
  document.getElementById('exampleModal').classList.remove('glass-modal--active');
}
</script>`,
    category: 'Overlay',
    tags: ['modal', 'dialog', 'popup', 'overlay'],
  },
  {
    id: 'profile-card',
    title: 'Profile Card',
    description:
      'Elegant user profile card with avatar, name, bio, and stats. Perfect for team pages and user directories.',
    htmlCode: `<div class="glass-card glass-card--profile">
  <div class="glass-card__avatar">
    <img src="https://i.pravatar.cc/150?img=12" alt="User avatar" />
  </div>
  <h3 class="glass-card__name">Alex Johnson</h3>
  <p class="glass-card__role">Senior Designer</p>
  <p class="glass-card__bio">
    Creating beautiful experiences with code and design. Passionate about glassmorphism and modern UI.
  </p>
  <div class="glass-card__stats">
    <div class="glass-card__stat">
      <span class="glass-card__stat-value">1.2K</span>
      <span class="glass-card__stat-label">Followers</span>
    </div>
    <div class="glass-card__stat">
      <span class="glass-card__stat-value">342</span>
      <span class="glass-card__stat-label">Following</span>
    </div>
    <div class="glass-card__stat">
      <span class="glass-card__stat-value">89</span>
      <span class="glass-card__stat-label">Projects</span>
    </div>
  </div>
</div>`,
    category: 'Cards',
    tags: ['card', 'profile', 'user', 'avatar'],
  },
  {
    id: 'product-card',
    title: 'Product Card',
    description:
      'Modern product showcase card with image, title, price, and action button. Ideal for e-commerce and catalogs.',
    htmlCode: `<div class="glass-card glass-card--product">
  <div class="glass-card__image">
    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" alt="Product" />
    <span class="glass-card__badge">New</span>
  </div>
  <div class="glass-card__content">
    <h3 class="glass-card__title">Premium Headphones</h3>
    <p class="glass-card__description">
      High-quality wireless headphones with noise cancellation and 30-hour battery life.
    </p>
    <div class="glass-card__footer">
      <span class="glass-card__price">$299</span>
      <button class="glass-card__button">
        <i class="fa-solid fa-cart-shopping"></i>
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
    category: 'Cards',
    tags: ['card', 'product', 'ecommerce', 'shop'],
  },
  {
    id: 'info-card',
    title: 'Info Card',
    description:
      'Versatile information card with icon, title, and description. Great for features, services, and content blocks.',
    htmlCode: `<div class="glass-card glass-card--info">
  <div class="glass-card__icon">
    <i class="fa-solid fa-rocket"></i>
  </div>
  <h3 class="glass-card__title">Fast Performance</h3>
  <p class="glass-card__description">
    Lightning-fast load times and smooth animations powered by GPU acceleration.
  </p>
  <a href="#" class="glass-card__link">
    Learn more
    <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>`,
    category: 'Cards',
    tags: ['card', 'info', 'feature', 'content'],
  },
  {
    id: 'notifications',
    title: 'Notification Toasts',
    description:
      'Beautiful toast notifications for success, error, warning, and info messages. Auto-dismissible with smooth animations.',
    category: 'Feedback',
    tags: ['notification', 'toast', 'alert', 'message'],
    htmlCode: `<!-- Trigger Buttons -->
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <button class="glass-container glass-container--small" onclick="showToast('success')">
    <div class="glass-content">
      <i class="fa-solid fa-check"></i>
      Success
    </div>
  </button>

  <button class="glass-container glass-container--small" onclick="showToast('error')">
    <div class="glass-content">
      <i class="fa-solid fa-xmark"></i>
      Error
    </div>
  </button>

  <button class="glass-container glass-container--small" onclick="showToast('warning')">
    <div class="glass-content">
      <i class="fa-solid fa-triangle-exclamation"></i>
      Warning
    </div>
  </button>

  <button class="glass-container glass-container--small" onclick="showToast('info')">
    <div class="glass-content">
      <i class="fa-solid fa-info"></i>
      Info
    </div>
  </button>
</div>

<!-- Toast Container -->
<div class="glass-toast-container" id="toastContainer"></div>

<script>
function showToast(type) {
  const messages = {
    success: 'Operation completed successfully!',
    error: 'An error occurred. Please try again.',
    warning: 'Please review your input.',
    info: 'Here is some useful information.'
  };

  const icons = {
    success: 'fa-check-circle',
    error: 'fa-times-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };

  const toast = document.createElement('div');
  toast.className = \`glass-toast glass-toast--\${type}\`;
  toast.innerHTML = \`
    <i class="fa-solid \${icons[type]} glass-toast__icon"></i>
    <span class="glass-toast__message">\${messages[type]}</span>
    <button class="glass-toast__close" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
  \`;

  document.getElementById('toastContainer').appendChild(toast);

  setTimeout(() => toast.classList.add('glass-toast--show'), 10);
  setTimeout(() => {
    toast.classList.remove('glass-toast--show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
</script>`,
  },
  {
    id: 'dropdown-menu',
    title: 'Dropdown Menu',
    description:
      'Elegant dropdown navigation menu with glass effect. Perfect for navigation bars and context menus.',
    category: 'Navigation',
    tags: ['dropdown', 'menu', 'navigation'],
    htmlCode: `<div class="glass-dropdown">
  <button class="glass-dropdown__trigger">
    <span>Menu</span>
    <i class="fa-solid fa-chevron-down"></i>
  </button>

  <div class="glass-dropdown__menu">
    <a href="#" class="glass-dropdown__item">
      <i class="fa-solid fa-house"></i>
      Dashboard
    </a>
    <a href="#" class="glass-dropdown__item">
      <i class="fa-solid fa-user"></i>
      Profile
    </a>
    <a href="#" class="glass-dropdown__item">
      <i class="fa-solid fa-gear"></i>
      Settings
    </a>
    <div class="glass-dropdown__divider"></div>
    <a href="#" class="glass-dropdown__item glass-dropdown__item--danger">
      <i class="fa-solid fa-right-from-bracket"></i>
      Logout
    </a>
  </div>
</div>

<style>
.glass-dropdown {
  position: relative;
  display: inline-block;
}

.glass-dropdown__trigger:hover + .glass-dropdown__menu,
.glass-dropdown__menu:hover {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>`,
  },
  {
    id: 'tabs',
    title: 'Tabs Component',
    description:
      'Horizontal tab navigation with glass styling and smooth transitions. Perfect for organizing content.',
    category: 'Navigation',
    tags: ['tabs', 'navigation', 'content'],
    htmlCode: `<div class="glass-tabs">
  <div class="glass-tabs__nav">
    <button class="glass-tabs__tab glass-tabs__tab--active" data-tab="tab1">
      <i class="fa-solid fa-home"></i>
      Overview
    </button>
    <button class="glass-tabs__tab" data-tab="tab2">
      <i class="fa-solid fa-code"></i>
      Code
    </button>
    <button class="glass-tabs__tab" data-tab="tab3">
      <i class="fa-solid fa-palette"></i>
      Design
    </button>
  </div>

  <div class="glass-tabs__content">
    <div class="glass-tabs__panel glass-tabs__panel--active" data-panel="tab1">
      <h3>Overview</h3>
      <p>Welcome to the overview section. This is where you'll find general information.</p>
    </div>
    <div class="glass-tabs__panel" data-panel="tab2">
      <h3>Code</h3>
      <p>Here you can find code examples and implementation details.</p>
    </div>
    <div class="glass-tabs__panel" data-panel="tab3">
      <h3>Design</h3>
      <p>Explore design guidelines and visual specifications.</p>
    </div>
  </div>
</div>

<script>
document.querySelectorAll('.glass-tabs__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    const tabsContainer = tab.closest('.glass-tabs');

    // Remove active class from all tabs and panels
    tabsContainer.querySelectorAll('.glass-tabs__tab').forEach(t =>
      t.classList.remove('glass-tabs__tab--active')
    );
    tabsContainer.querySelectorAll('.glass-tabs__panel').forEach(p =>
      p.classList.remove('glass-tabs__panel--active')
    );

    // Add active class to clicked tab and corresponding panel
    tab.classList.add('glass-tabs__tab--active');
    tabsContainer.querySelector(\`.glass-tabs__panel[data-panel="\${tabId}"]\`)
      .classList.add('glass-tabs__panel--active');
  });
});
</script>`,
  },
  {
    id: 'loading-bar',
    title: 'Loading Bar',
    description:
      'Linear progress indicator with smooth animation. Perfect for showing upload/download progress or page loading states.',
    category: 'Loading',
    tags: ['loading', 'progress', 'bar', 'indicator'],
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content glass-content--column">
    <h3>Uploading Files...</h3>
    <div class="glass-progress">
      <div class="glass-progress__bar" style="width: 65%"></div>
    </div>
    <span class="glass-progress__label">65% Complete</span>
  </div>
</div>

<style>
.glass-progress {
  width: 100%;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
}

.glass-progress__bar {
  height: 100%;
  background: linear-gradient(90deg, var(--fp-color-primary), var(--fp-color-primary-light));
  border-radius: 1rem;
  transition: width 0.3s var(--fp-ease-smooth);
  position: relative;
  overflow: hidden;
}

.glass-progress__bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.glass-progress__label {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>`,
  },
  {
    id: 'spinner',
    title: 'Loading Spinner',
    description:
      'Circular loading indicator with glass effect. Use for loading states, async operations, or processing feedback.',
    category: 'Loading',
    tags: ['loading', 'spinner', 'indicator'],
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content glass-content--column">
    <div class="glass-spinner"></div>
    <span class="glass-spinner__label">Loading...</span>
  </div>
</div>

<style>
.glass-spinner {
  width: 3rem;
  height: 3rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: var(--fp-color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.glass-spinner__label {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>`,
  },
  {
    id: 'skeleton',
    title: 'Skeleton Screen',
    description:
      'Placeholder loading state that mimics content structure. Provides better perceived performance during data loading.',
    category: 'Loading',
    tags: ['loading', 'skeleton', 'placeholder'],
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--large">
  <div class="glass-content glass-content--column">
    <div class="glass-skeleton">
      <div class="glass-skeleton__avatar"></div>
      <div class="glass-skeleton__content">
        <div class="glass-skeleton__line glass-skeleton__line--title"></div>
        <div class="glass-skeleton__line glass-skeleton__line--text"></div>
        <div class="glass-skeleton__line glass-skeleton__line--text"></div>
      </div>
    </div>
  </div>
</div>

<style>
.glass-skeleton {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.glass-skeleton__avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.glass-skeleton__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.glass-skeleton__line {
  height: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
}

.glass-skeleton__line--title {
  width: 60%;
  height: 1.25rem;
}

.glass-skeleton__line--text {
  width: 100%;
}

.glass-skeleton__line:last-child {
  width: 80%;
}

.glass-skeleton__avatar::after,
.glass-skeleton__line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>`,
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    description:
      'Hover tooltips with glass styling and smart positioning. Perfect for providing contextual help and additional information.',
    category: 'Feedback',
    tags: ['tooltip', 'hint', 'help', 'info'],
    htmlCode: `<div style="display: flex; gap: 2rem; flex-wrap: wrap; padding: 3rem;">
  <div class="glass-tooltip-wrapper">
    <button class="glass-container glass-container--small">
      <div class="glass-content">
        <i class="fa-solid fa-info-circle"></i>
        Hover me
      </div>
    </button>
    <div class="glass-tooltip glass-tooltip--top">
      This is a helpful tooltip!
    </div>
  </div>

  <div class="glass-tooltip-wrapper">
    <button class="glass-container glass-container--small">
      <div class="glass-content">
        <i class="fa-solid fa-question-circle"></i>
        Right
      </div>
    </button>
    <div class="glass-tooltip glass-tooltip--right">
      Tooltip on the right
    </div>
  </div>

  <div class="glass-tooltip-wrapper">
    <button class="glass-container glass-container--small">
      <div class="glass-content">
        <i class="fa-solid fa-lightbulb"></i>
        Bottom
      </div>
    </button>
    <div class="glass-tooltip glass-tooltip--bottom">
      Tooltip at the bottom
    </div>
  </div>

  <div class="glass-tooltip-wrapper">
    <button class="glass-container glass-container--small">
      <div class="glass-content">
        <i class="fa-solid fa-star"></i>
        Left
      </div>
    </button>
    <div class="glass-tooltip glass-tooltip--left">
      Tooltip on the left
    </div>
  </div>
</div>

<style>
.glass-tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.glass-tooltip {
  position: absolute;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
  pointer-events: none;
  z-index: 1000;
}

.glass-tooltip::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
}

.glass-tooltip--top {
  bottom: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%) translateY(0.25rem);
}

.glass-tooltip--top::before {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: rgba(255, 255, 255, 0.15);
}

.glass-tooltip--bottom {
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%) translateY(-0.25rem);
}

.glass-tooltip--bottom::before {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: rgba(255, 255, 255, 0.15);
}

.glass-tooltip--left {
  right: calc(100% + 0.5rem);
  top: 50%;
  transform: translateY(-50%) translateX(0.25rem);
}

.glass-tooltip--left::before {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: rgba(255, 255, 255, 0.15);
}

.glass-tooltip--right {
  left: calc(100% + 0.5rem);
  top: 50%;
  transform: translateY(-50%) translateX(-0.25rem);
}

.glass-tooltip--right::before {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: rgba(255, 255, 255, 0.15);
}

.glass-tooltip-wrapper:hover .glass-tooltip {
  opacity: 1;
  visibility: visible;
}

.glass-tooltip-wrapper:hover .glass-tooltip--top {
  transform: translateX(-50%) translateY(0);
}

.glass-tooltip-wrapper:hover .glass-tooltip--bottom {
  transform: translateX(-50%) translateY(0);
}

.glass-tooltip-wrapper:hover .glass-tooltip--left {
  transform: translateY(-50%) translateX(0);
}

.glass-tooltip-wrapper:hover .glass-tooltip--right {
  transform: translateY(-50%) translateX(0);
}
</style>`,
  },
  {
    id: 'sidebar',
    title: 'Sidebar Panel',
    description:
      'Collapsible side navigation panel with glass effect. Perfect for app navigation, settings panels, and drawer menus.',
    category: 'Navigation',
    tags: ['sidebar', 'panel', 'navigation', 'drawer'],
    htmlCode: `<div>
  <button class="glass-container glass-container--small" onclick="toggleSidebar()">
    <div class="glass-content">
      <i class="fa-solid fa-bars"></i>
      Toggle Sidebar
    </div>
  </button>

  <div class="glass-sidebar" id="glassSidebar">
    <div class="glass-sidebar__overlay" onclick="toggleSidebar()"></div>
    <div class="glass-sidebar__panel">
      <div class="glass-sidebar__header">
        <h3 class="glass-sidebar__title">Navigation</h3>
        <button class="glass-sidebar__close" onclick="toggleSidebar()">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <nav class="glass-sidebar__nav">
        <a href="#" class="glass-sidebar__item glass-sidebar__item--active">
          <i class="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" class="glass-sidebar__item">
          <i class="fa-solid fa-chart-line"></i>
          <span>Analytics</span>
        </a>
        <a href="#" class="glass-sidebar__item">
          <i class="fa-solid fa-users"></i>
          <span>Team</span>
        </a>
        <a href="#" class="glass-sidebar__item">
          <i class="fa-solid fa-folder"></i>
          <span>Projects</span>
        </a>
        <a href="#" class="glass-sidebar__item">
          <i class="fa-solid fa-calendar"></i>
          <span>Calendar</span>
        </a>
        <a href="#" class="glass-sidebar__item">
          <i class="fa-solid fa-gear"></i>
          <span>Settings</span>
        </a>
      </nav>

      <div class="glass-sidebar__footer">
        <div class="glass-sidebar__user">
          <img src="https://i.pravatar.cc/40?img=5" alt="User" class="glass-sidebar__avatar" />
          <div class="glass-sidebar__user-info">
            <div class="glass-sidebar__user-name">John Doe</div>
            <div class="glass-sidebar__user-email">john@example.com</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function toggleSidebar() {
  document.getElementById('glassSidebar').classList.toggle('glass-sidebar--open');
}
</script>

<style>
.glass-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.glass-sidebar--open {
  pointer-events: auto;
  opacity: 1;
}

.glass-sidebar__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.glass-sidebar__panel {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.3s var(--fp-ease-smooth);
}

.glass-sidebar--open .glass-sidebar__panel {
  transform: translateX(0);
}

.glass-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-sidebar__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.glass-sidebar__close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: background 0.2s;
}

.glass-sidebar__close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.glass-sidebar__nav {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.glass-sidebar__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s;
  margin-bottom: 0.25rem;
}

.glass-sidebar__item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.glass-sidebar__item--active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.glass-sidebar__item i {
  font-size: 1.125rem;
  width: 1.25rem;
  text-align: center;
}

.glass-sidebar__footer {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-sidebar__user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.glass-sidebar__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.glass-sidebar__user-info {
  flex: 1;
  min-width: 0;
}

.glass-sidebar__user-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.glass-sidebar__user-email {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>`,
  },
  {
    id: 'badges',
    title: 'Badges & Tags',
    description:
      'Small labels and status indicators with glass styling. Perfect for categories, statuses, notifications, and metadata.',
    category: 'Feedback',
    tags: ['badge', 'tag', 'label', 'status'],
    htmlCode: `<div style="display: flex; flex-direction: column; gap: 2rem;">
  <!-- Status Badges -->
  <div>
    <h4 style="margin-bottom: 1rem; color: white;">Status Badges</h4>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <span class="glass-badge glass-badge--success">
        <i class="fa-solid fa-check"></i>
        Active
      </span>
      <span class="glass-badge glass-badge--warning">
        <i class="fa-solid fa-clock"></i>
        Pending
      </span>
      <span class="glass-badge glass-badge--error">
        <i class="fa-solid fa-xmark"></i>
        Inactive
      </span>
      <span class="glass-badge glass-badge--info">
        <i class="fa-solid fa-info"></i>
        Draft
      </span>
    </div>
  </div>

  <!-- Category Tags -->
  <div>
    <h4 style="margin-bottom: 1rem; color: white;">Category Tags</h4>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <span class="glass-tag">Design</span>
      <span class="glass-tag">Development</span>
      <span class="glass-tag">Marketing</span>
      <span class="glass-tag">Sales</span>
      <span class="glass-tag">Support</span>
    </div>
  </div>

  <!-- Notification Badges -->
  <div>
    <h4 style="margin-bottom: 1rem; color: white;">Notification Badges</h4>
    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
      <div style="position: relative; display: inline-block;">
        <button class="glass-container glass-container--small">
          <div class="glass-content">
            <i class="fa-solid fa-bell"></i>
            Notifications
          </div>
        </button>
        <span class="glass-badge glass-badge--notification">5</span>
      </div>

      <div style="position: relative; display: inline-block;">
        <button class="glass-container glass-container--small">
          <div class="glass-content">
            <i class="fa-solid fa-envelope"></i>
            Messages
          </div>
        </button>
        <span class="glass-badge glass-badge--notification">12</span>
      </div>

      <div style="position: relative; display: inline-block;">
        <button class="glass-container glass-container--small">
          <div class="glass-content">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </button>
        <span class="glass-badge glass-badge--notification">3</span>
      </div>
    </div>
  </div>
</div>

<style>
.glass-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.glass-badge--success {
  background: rgba(34, 197, 94, 0.2);
  border-color: rgba(34, 197, 94, 0.3);
  color: rgb(134, 239, 172);
}

.glass-badge--warning {
  background: rgba(251, 191, 36, 0.2);
  border-color: rgba(251, 191, 36, 0.3);
  color: rgb(253, 224, 71);
}

.glass-badge--error {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.3);
  color: rgb(252, 165, 165);
}

.glass-badge--info {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
  color: rgb(147, 197, 253);
}

.glass-badge--notification {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  background: rgba(239, 68, 68, 0.9);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-tag {
  display: inline-block;
  padding: 0.25rem 0.625rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
}

.glass-tag:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
  color: white;
}
</style>`,
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb Navigation',
    description:
      'Glass-styled breadcrumb trail for hierarchical navigation. Shows the current location within the site structure with clickable parent links.',
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <ol class="breadcrumb__list">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">
            <i class="fa-solid fa-house"></i>
            Home
          </a>
        </li>
        <li class="breadcrumb__separator">
          <i class="fa-solid fa-chevron-right"></i>
        </li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Products</a>
        </li>
        <li class="breadcrumb__separator">
          <i class="fa-solid fa-chevron-right"></i>
        </li>
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Electronics</a>
        </li>
        <li class="breadcrumb__separator">
          <i class="fa-solid fa-chevron-right"></i>
        </li>
        <li class="breadcrumb__item breadcrumb__item--current" aria-current="page">
          <span class="breadcrumb__current">Laptops</span>
        </li>
      </ol>
    </nav>
  </div>
</div>

<style>
.breadcrumb {
  width: 100%;
}

.breadcrumb__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb__item {
  display: flex;
  align-items: center;
}

.breadcrumb__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.breadcrumb__link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.breadcrumb__link i {
  font-size: 0.875rem;
}

.breadcrumb__separator {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
}

.breadcrumb__current {
  padding: 0.5rem 0.75rem;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .breadcrumb__link {
    padding: 0.375rem 0.5rem;
    font-size: 0.85rem;
  }

  .breadcrumb__current {
    padding: 0.375rem 0.5rem;
    font-size: 0.85rem;
  }
}
</style>`,
    category: 'Navigation',
    tags: ['breadcrumb', 'navigation', 'hierarchy', 'trail'],
  },
  {
    id: 'pagination',
    title: 'Pagination Controls',
    description:
      'Glass-styled pagination component for navigating through multiple pages of content. Includes previous/next buttons and page numbers.',
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content">
    <nav class="pagination" aria-label="Pagination">
      <button class="pagination__btn pagination__btn--prev" aria-label="Previous page">
        <i class="fa-solid fa-chevron-left"></i>
        Previous
      </button>

      <div class="pagination__pages">
        <button class="pagination__page" aria-label="Go to page 1">1</button>
        <button class="pagination__page pagination__page--active" aria-current="page" aria-label="Current page, page 2">2</button>
        <button class="pagination__page" aria-label="Go to page 3">3</button>
        <span class="pagination__ellipsis">...</span>
        <button class="pagination__page" aria-label="Go to page 10">10</button>
      </div>

      <button class="pagination__btn pagination__btn--next" aria-label="Next page">
        Next
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </nav>
  </div>
</div>

<style>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.pagination__btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination__btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.pagination__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination__pages {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination__page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination__page:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.pagination__page--active {
  background: rgba(59, 130, 246, 0.5);
  border-color: rgba(59, 130, 246, 0.7);
  color: white;
}

.pagination__ellipsis {
  color: rgba(255, 255, 255, 0.6);
  padding: 0 0.25rem;
}

@media (max-width: 768px) {
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }

  .pagination__btn {
    width: 100%;
    justify-content: center;
  }

  .pagination__pages {
    order: -1;
  }
}
</style>`,
    category: 'Navigation',
    tags: ['pagination', 'navigation', 'pages', 'controls'],
  },
];
