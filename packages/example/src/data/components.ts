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
    description: "A complete music player widget with album art and controls.",
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--large">
  <div class="glass-content">
    <div class="player">
      <div class="player__thumb">
        <div class="player__img"></div>
        <div class="player__legend">
          <h3 class="player__legend__title">YEM</h3>
          <span class="player__legend__sub-title">Phish</span>
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
    description: "Horizontal navigation with icons and labels.",
    htmlCode: `<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content">
    <div class="glass-item glass-item--active">
      <i class="fa-solid fa-house"></i>
      Home
    </div>
    <div class="glass-item">
      <i class="fa-solid fa-layer-group"></i>
      New
    </div>
    <!-- More items... -->
  </div>
</div>`
  },
  {
    id: "icon-dock",
    title: "Icon Dock (with Lens Filter)",
    description: "macOS-style dock with SVG lens distortion effect.",
    htmlCode: `<div class="glass-container">
  <div class="glass-content">
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-folder"></i>
    </a>
    <a class="glass-content__link" href="#">
      <i class="fa-solid fa-map-location-dot"></i>
    </a>
    <!-- More icons... -->
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
    id: "search-button",
    title: "Search Button",
    description: "Compact search button with icon and label.",
    htmlCode: `<div class="glass-container glass-container--small">
  <div class="glass-content">
    <i class="fa-solid fa-magnifying-glass"></i>
    Search
  </div>
</div>`
  }
];

