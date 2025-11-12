export interface Component {
  id: string;
  title: string;
  description: string;
  htmlCode: string;
}

export const components: Component[] = [
  {
    id: "music-player",
    title: "Music Player",
    description: "A sleek music player widget featuring album artwork, track information, and playback controls. Perfect for music apps and media interfaces.",
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
</div>`
  },
  {
    id: "navigation-bar",
    title: "Navigation Bar",
    description: "Elegant horizontal navigation with smooth hover effects. Includes icon and text labels for clear wayfinding in your application.",
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
</div>`
  },
  {
    id: "icon-dock",
    title: "Icon Dock (with Lens Filter)",
    description: "macOS-inspired application dock with SVG lens distortion effect. Features smooth hover animations and magnification for an enhanced user experience.",
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
</svg>`
  },
  {
    id: "action-buttons",
    title: "Action Buttons",
    description: "Versatile glass buttons perfect for search, notifications, settings, and other common actions. Compact design with clear iconography.",
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
</div>`
  }
];

