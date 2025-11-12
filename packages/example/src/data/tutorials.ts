export interface TutorialStep {
  title: string;
  description: string;
  code?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  category: string;
  icon: string;
  steps: TutorialStep[];
  finalCode: string;
  tags: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: 'glass-dashboard',
    title: 'Building a Glass Dashboard',
    description:
      'Learn how to create a modern analytics dashboard with glass cards, metrics, and responsive layout.',
    difficulty: 'intermediate',
    estimatedTime: '30 minutes',
    category: 'Layout',
    icon: 'fa-solid fa-chart-line',
    steps: [
      {
        title: 'Set up the container',
        description: 'Create the main dashboard container with proper structure.',
        code: `<div class="dashboard">
  <div class="dashboard__header">
    <!-- Header content -->
  </div>
  <div class="dashboard__grid">
    <!-- Stat cards will go here -->
  </div>
</div>`,
      },
      {
        title: 'Add glass header',
        description: 'Create a glass header with title and action buttons.',
        code: `<div class="dashboard__header glass-container glass-container--rounded">
  <div class="glass-content">
    <h2>Analytics Dashboard</h2>
    <div class="dashboard__actions">
      <button class="glass-btn glass-btn--primary">
        <i class="fa-solid fa-plus"></i> New Report
      </button>
    </div>
  </div>
</div>`,
      },
      {
        title: 'Create stat cards',
        description: 'Build individual metric cards with glass effects.',
        code: `<div class="glass-card glass-card--stat">
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
</div>`,
      },
      {
        title: 'Style the grid layout',
        description: 'Add CSS to create a responsive grid for the stat cards.',
        code: `.dashboard__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}`,
      },
    ],
    finalCode: `<!-- Complete Dashboard Example -->
<div class="dashboard">
  <div class="dashboard__header glass-container glass-container--rounded">
    <div class="glass-content">
      <h2>Analytics Dashboard</h2>
      <div class="dashboard__actions">
        <button class="glass-btn glass-btn--primary">
          <i class="fa-solid fa-plus"></i> New Report
        </button>
      </div>
    </div>
  </div>

  <div class="dashboard__grid">
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
    <!-- Add more stat cards as needed -->
  </div>
</div>`,
    tags: ['dashboard', 'layout', 'cards', 'metrics', 'responsive'],
  },
  {
    id: 'glass-navigation',
    title: 'Creating a Glass Navigation Menu',
    description:
      'Build a modern navigation bar with glass effects, hover states, and mobile responsiveness.',
    difficulty: 'beginner',
    estimatedTime: '20 minutes',
    category: 'Navigation',
    icon: 'fa-solid fa-bars',
    steps: [
      {
        title: 'Create navigation structure',
        description: 'Set up the basic HTML structure for the navigation.',
        code: `<nav class="glass-nav">
  <div class="glass-nav__container">
    <div class="glass-nav__logo">
      <span>Logo</span>
    </div>
    <ul class="glass-nav__menu">
      <!-- Menu items -->
    </ul>
  </div>
</nav>`,
      },
      {
        title: 'Add menu items',
        description: 'Create navigation links with icons.',
        code: `<ul class="glass-nav__menu">
  <li class="glass-nav__item">
    <a href="#" class="glass-nav__link glass-nav__link--active">
      <i class="fa-solid fa-house"></i>
      <span>Home</span>
    </a>
  </li>
  <li class="glass-nav__item">
    <a href="#" class="glass-nav__link">
      <i class="fa-solid fa-compass"></i>
      <span>Explore</span>
    </a>
  </li>
</ul>`,
      },
    ],
    finalCode: `<!-- Complete Navigation Example -->
<nav class="glass-container">
  <div class="glass-content">
    <div class="glass-nav__logo">Logo</div>
    <ul class="glass-nav__menu">
      <li><a href="#" class="glass-nav__link glass-nav__link--active">
        <i class="fa-solid fa-house"></i> Home
      </a></li>
      <li><a href="#" class="glass-nav__link">
        <i class="fa-solid fa-compass"></i> Explore
      </a></li>
    </ul>
  </div>
</nav>`,
    tags: ['navigation', 'menu', 'navbar', 'responsive'],
  },
  {
    id: 'glass-login-form',
    title: 'Building a Glass Login Form',
    description:
      'Create an elegant login form with glass-styled inputs, buttons, and validation states.',
    difficulty: 'beginner',
    estimatedTime: '25 minutes',
    category: 'Forms',
    icon: 'fa-solid fa-right-to-bracket',
    steps: [
      {
        title: 'Create form container',
        description: 'Set up the main form structure with glass container.',
        code: `<div class="login-form glass-container glass-container--rounded glass-container--large">
  <div class="glass-content glass-content--column">
    <h2>Welcome Back</h2>
    <form>
      <!-- Form fields will go here -->
    </form>
  </div>
</div>`,
      },
      {
        title: 'Add input fields',
        description: 'Create glass-styled input fields for email and password.',
        code: `<div class="glass-input-group">
  <label for="email" class="glass-label">Email</label>
  <input
    type="email"
    id="email"
    class="glass-input"
    placeholder="Enter your email"
  />
</div>

<div class="glass-input-group">
  <label for="password" class="glass-label">Password</label>
  <input
    type="password"
    id="password"
    class="glass-input"
    placeholder="Enter your password"
  />
</div>`,
      },
      {
        title: 'Add submit button',
        description: 'Create a glass button for form submission.',
        code: `<button type="submit" class="glass-btn glass-btn--primary glass-btn--large">
  <i class="fa-solid fa-right-to-bracket"></i>
  Sign In
</button>`,
      },
      {
        title: 'Add additional links',
        description: 'Include forgot password and sign up links.',
        code: `<div class="login-form__links">
  <a href="#" class="glass-link">Forgot password?</a>
  <a href="#" class="glass-link">Create account</a>
</div>`,
      },
    ],
    finalCode: `<!-- Complete Login Form Example -->
<div class="login-form glass-container glass-container--rounded glass-container--large">
  <div class="glass-content glass-content--column">
    <h2>Welcome Back</h2>
    <form>
      <div class="glass-input-group">
        <label for="email" class="glass-label">Email</label>
        <input type="email" id="email" class="glass-input" placeholder="Enter your email" />
      </div>

      <div class="glass-input-group">
        <label for="password" class="glass-label">Password</label>
        <input type="password" id="password" class="glass-input" placeholder="Enter your password" />
      </div>

      <button type="submit" class="glass-btn glass-btn--primary glass-btn--large">
        <i class="fa-solid fa-right-to-bracket"></i> Sign In
      </button>

      <div class="login-form__links">
        <a href="#" class="glass-link">Forgot password?</a>
        <a href="#" class="glass-link">Create account</a>
      </div>
    </form>
  </div>
</div>`,
    tags: ['form', 'login', 'authentication', 'inputs', 'buttons'],
  },
  {
    id: 'animating-glass-effects',
    title: 'Animating Glass Effects',
    description:
      'Learn how to add smooth animations and transitions to glass components for enhanced interactivity.',
    difficulty: 'intermediate',
    estimatedTime: '35 minutes',
    category: 'Animation',
    icon: 'fa-solid fa-wand-magic-sparkles',
    steps: [
      {
        title: 'Add hover transitions',
        description: 'Create smooth hover effects on glass elements.',
        code: `.glass-card {
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  --fp-blur: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}`,
      },
      {
        title: 'Animate blur intensity',
        description: 'Create dynamic blur animations using CSS variables.',
        code: `@keyframes pulse-blur {
  0%, 100% {
    --fp-blur: 10px;
  }
  50% {
    --fp-blur: 20px;
  }
}

.glass-card--animated {
  animation: pulse-blur 3s ease-in-out infinite;
}`,
      },
      {
        title: 'Add entrance animations',
        description: 'Create fade-in and slide-up animations for glass elements.',
        code: `@keyframes glass-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass-card--fade-in {
  animation: glass-fade-in 0.6s ease-out;
}`,
      },
      {
        title: 'Add loading shimmer',
        description: 'Create a shimmer effect for loading states.',
        code: `@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.glass-card--loading::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: shimmer 2s infinite;
}`,
      },
    ],
    finalCode: `/* Complete Animation Styles */
.glass-card {
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  --fp-blur: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

@keyframes glass-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass-card--fade-in {
  animation: glass-fade-in 0.6s ease-out;
}`,
    tags: ['animation', 'transitions', 'hover', 'effects', 'css'],
  },
  {
    id: 'responsive-glass-layouts',
    title: 'Creating Responsive Glass Layouts',
    description:
      'Master responsive design techniques for glass components across different screen sizes.',
    difficulty: 'intermediate',
    estimatedTime: '40 minutes',
    category: 'Responsive',
    icon: 'fa-solid fa-mobile-screen-button',
    steps: [
      {
        title: 'Set up mobile-first approach',
        description: 'Start with mobile styles and enhance for larger screens.',
        code: `/* Mobile-first base styles */
.glass-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}`,
      },
      {
        title: 'Add tablet breakpoint',
        description: 'Enhance layout for tablet screens.',
        code: `/* Tablet: 768px and up */
@media (min-width: 768px) {
  .glass-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }
}`,
      },
      {
        title: 'Add desktop breakpoint',
        description: 'Optimize for desktop screens.',
        code: `/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  .glass-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
}`,
      },
      {
        title: 'Adjust glass effects for mobile',
        description: 'Optimize blur and transparency for mobile performance.',
        code: `/* Reduce blur on mobile for better performance */
@media (max-width: 767px) {
  .glass-container {
    --fp-blur: 8px;
    --fp-opacity: 0.85;
  }
}`,
      },
    ],
    finalCode: `/* Complete Responsive Layout */
.glass-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .glass-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .glass-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
}

@media (max-width: 767px) {
  .glass-container {
    --fp-blur: 8px;
    --fp-opacity: 0.85;
  }
}`,
    tags: ['responsive', 'mobile', 'breakpoints', 'grid', 'layout'],
  },
];
