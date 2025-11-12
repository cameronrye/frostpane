export interface Example {
  title: string;
  description: string;
  icon: string;
  label: string;
  cssCode: string;
  customStyles?: string;
}

export const examples: Example[] = [
  {
    title: "Dark Glass",
    description: "A darker glass effect perfect for dark mode interfaces.",
    icon: "fa-solid fa-moon",
    label: "Dark Mode",
    cssCode: `.dark-glass {
  --fp-bg-color: rgba(0, 0, 0, 0.4);
  --fp-highlight: rgba(255, 255, 255, 0.3);
  --fp-backdrop-blur: 8px;
}`,
    customStyles: "--fp-bg-color: rgba(0, 0, 0, 0.4); --fp-highlight: rgba(255, 255, 255, 0.3); --fp-backdrop-blur: 8px;"
  },
  {
    title: "Strong Blur",
    description: "Enhanced blur for a more pronounced frosted effect.",
    icon: "fa-solid fa-eye-dropper",
    label: "Enhanced Blur",
    cssCode: `.strong-blur {
  --fp-backdrop-blur: 12px;
  --fp-filter-saturate: 150%;
}`,
    customStyles: "--fp-backdrop-blur: 12px; --fp-filter-saturate: 150%;"
  },
  {
    title: "Elevated Shadow",
    description: "Deeper shadows create a floating effect.",
    icon: "fa-solid fa-layer-group",
    label: "Floating Effect",
    cssCode: `.elevated-glass {
  --fp-shadow-offset-y: 12px;
  --fp-shadow-blur-primary: 12px;
  --fp-shadow-blur-secondary: 30px;
}`,
    customStyles: "--fp-shadow-offset-y: 12px; --fp-shadow-blur-primary: 12px; --fp-shadow-blur-secondary: 30px;"
  },
  {
    title: "Minimal Glass",
    description: "Subtle effect with reduced blur and transparency.",
    icon: "fa-solid fa-feather",
    label: "Subtle Effect",
    cssCode: `.minimal-glass {
  --fp-backdrop-blur: 2px;
  --fp-bg-color: rgba(255, 255, 255, 0.15);
  --fp-shadow-blur-primary: 4px;
}`,
    customStyles: "--fp-backdrop-blur: 2px; --fp-bg-color: rgba(255, 255, 255, 0.15); --fp-shadow-blur-primary: 4px;"
  },
  {
    title: "Colored Glass",
    description: "Add color tints to create unique glass effects.",
    icon: "fa-solid fa-palette",
    label: "Blue Tint",
    cssCode: `.colored-glass {
  --fp-bg-color: rgba(102, 126, 234, 0.3);
  --fp-highlight: rgba(255, 255, 255, 0.5);
  --fp-filter-saturate: 140%;
}`,
    customStyles: "--fp-bg-color: rgba(102, 126, 234, 0.3); --fp-highlight: rgba(255, 255, 255, 0.5); --fp-filter-saturate: 140%;"
  },
  {
    title: "Frosted Glass",
    description: "Heavy frost effect with maximum blur.",
    icon: "fa-solid fa-snowflake",
    label: "Heavy Frost",
    cssCode: `.frosted-glass {
  --fp-backdrop-blur: 16px;
  --fp-bg-color: rgba(255, 255, 255, 0.35);
  --fp-filter-brightness: 1.2;
}`,
    customStyles: "--fp-backdrop-blur: 16px; --fp-bg-color: rgba(255, 255, 255, 0.35); --fp-filter-brightness: 1.2;"
  },
  {
    title: "Sharp Corners",
    description: "Angular design with minimal border radius.",
    icon: "fa-solid fa-square",
    label: "Angular Design",
    cssCode: `.sharp-glass {
  --fp-border-radius: 0.5rem;
  --fp-backdrop-blur: 6px;
  --fp-shadow-blur-primary: 8px;
}`,
    customStyles: "--fp-border-radius: 0.5rem; --fp-backdrop-blur: 6px; --fp-shadow-blur-primary: 8px;"
  },
  {
    title: "Pill Shape",
    description: "Fully rounded pill-shaped glass elements.",
    icon: "fa-solid fa-capsules",
    label: "Rounded Pill",
    cssCode: `.pill-glass {
  --fp-border-radius: 50px;
  --fp-backdrop-blur: 6px;
}`,
    customStyles: "--fp-border-radius: 50px; --fp-backdrop-blur: 6px;"
  },
  {
    title: "Snappy Animations",
    description: "Fast, responsive animations for interactive elements.",
    icon: "fa-solid fa-bolt",
    label: "Fast Response",
    cssCode: `.snappy-glass {
  --fp-transition-duration: 0.15s;
  --fp-transition-timing: ease-out;
  --fp-hover-scale: 1.05;
}`,
    customStyles: ""
  }
];

