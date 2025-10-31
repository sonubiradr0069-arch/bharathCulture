# Roots Reconnect - Design Guidelines

## Design Approach

**Reference-Based Approach**: Inspired by Google Arts & Culture's sophisticated cultural presentation, combined with the warmth and accessibility of Airbnb's card-based exploration. This creates an elegant yet approachable platform that honors cultural heritage while engaging younger generations.

**Core Design Principles**:
- Cultural reverence through refined aesthetics
- Warmth and approachability through color and imagery
- Discovery-driven navigation with visual richness
- Storytelling through layered content presentation

---

## Typography System

**Primary Font Family**: Playfair Display (Google Fonts) - Serif for headlines and cultural gravitas
**Secondary Font Family**: Inter (Google Fonts) - Sans-serif for body text and UI elements

**Type Scale**:
- Hero Headings: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Subheadings: text-lg md:text-xl, font-medium
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text/Metadata: text-sm, font-normal
- Captions: text-xs md:text-sm, italic

**Hierarchy Application**:
- Use Playfair Display for all headings, hero text, and cultural story titles
- Use Inter for navigation, body content, form labels, and UI interactions
- Maintain consistent line-height (leading-relaxed for body, leading-tight for headings)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Component padding: p-6 (mobile), p-8 md:p-12 (desktop)
- Section vertical spacing: py-12 md:py-20 lg:py-24
- Card gaps: gap-6 md:gap-8
- Content margins: mb-4, mb-6, mb-8 for stacking

**Container Strategy**:
- Page containers: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Content-focused sections: max-w-4xl mx-auto
- Full-width hero sections with constrained inner content

**Grid Systems**:
- Explore cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Story listings: grid-cols-1 md:grid-cols-2
- Festival highlights: grid-cols-1 lg:grid-cols-2 (larger cards for imagery)
- Quiz options: grid-cols-1 md:grid-cols-2

---

## Component Library

### Navigation
- Fixed header with backdrop blur: backdrop-blur-md with subtle shadow
- Logo left, navigation links center/right, sticky on scroll
- Mobile: Hamburger menu with slide-in drawer
- Navigation links with subtle underline animation on hover

### Hero Section (Home Page)
- Large hero image (full viewport height on desktop: h-screen, h-[60vh] on mobile)
- Overlay gradient for text legibility
- Centered content with mission statement
- Primary CTA button with blurred background
- Decorative cultural motif elements (borders, patterns) in corners

### Cards (Explore, Stories, Festivals)
- Elevated cards with rounded corners: rounded-xl
- Image aspect ratio: aspect-video for explore cards, aspect-[4/3] for stories
- Hover effect: slight scale transform (scale-105) with shadow elevation
- Card structure: Image top, content padding p-6, metadata footer
- Category tags with subtle pill styling
- Smooth transitions on all interactive states

### Story Display
- Featured image header with gradient overlay
- Region badge with cultural icon
- Typography hierarchy: Large title, metadata row, description paragraphs
- "Read More" expansion with smooth height transition
- Related stories grid at bottom

### Quiz Interface
- Progress indicator at top (filled segments)
- Question card: Large text-2xl question, generous spacing
- Answer options: Large touch-friendly buttons (min-h-16), radio button visual on left
- Selected state: border accent with background tint
- Results screen: Large score display, celebratory messaging, cultural fact cards
- Retake button prominent

### Contact Form
- Two-column layout on desktop (form left, context right)
- Form fields: Large inputs with floating labels, rounded-lg borders
- Cultural story submission: Multi-line textarea with character counter
- Region/category droppers styled consistently
- Submit button: Full-width on mobile, auto width on desktop
- Success message: Slide-in notification with cultural thank-you message

### Footer
- Three-column layout: About, Quick Links, Connect
- Cultural pattern divider at top
- Social icons with hover states
- Newsletter subscription inline form
- Copyright with cultural tagline

---

## Images Strategy

### Large Hero Image
**Home Page**: Full-screen hero featuring diverse cultural art collage or traditional celebration scene. Image should convey warmth, community, and cultural richness. Apply gradient overlay (from transparent to semi-opaque) for text legibility.

### Content Images
- **Explore Cards**: High-quality images of traditional art, handicrafts, cultural festivals (minimum 800x600px)
- **Story Headers**: Regional landscape or cultural artifact imagery (1200x800px)
- **Festival Cards**: Vibrant celebration photos with people engaged in traditions (1000x750px)
- **Quiz Visual Elements**: Small cultural icons and decorative elements (150x150px)

**Image Placement**:
- Hero: Full viewport background with content overlay
- Explore cards: Top-positioned within card, 16:9 ratio
- Story page: Banner image above fold, inline images within content
- About section: Side-by-side image-text layouts with cultural imagery

**Treatment**: All images use rounded-lg or rounded-xl corners, subtle shadow on cards, maintain aspect ratios for consistency

---

## Interaction Patterns

**Animations**: Subtle and purposeful
- Card hover: Transform scale + shadow (duration-300)
- Page transitions: Fade-in for content sections (stagger children)
- Quiz answer selection: Border glow + scale animation
- Form validation: Shake animation for errors
- Success states: Gentle bounce for confirmations

**Micro-interactions**:
- Button hover: Slight lift with shadow enhancement
- Link hover: Underline slide-in from left
- Image hover: Subtle zoom on card images
- Scroll reveal: Content fades up as it enters viewport (sections only, not every element)

**Loading States**:
- Skeleton screens for card grids while fetching
- Spinner for form submissions with cultural motif
- Progressive image loading with blur-up technique

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (3-column grids, full layouts)

**Mobile Optimizations**:
- Navigation collapses to hamburger menu
- Hero height reduced to 60vh
- Cards stack vertically with full width
- Form becomes single column
- Touch-friendly buttons (min-h-12)
- Increased spacing for readability

**Key Adaptive Elements**:
- Typography scales down proportionally
- Padding/margins reduce: py-12 → py-8 on mobile
- Grid columns collapse: lg:grid-cols-3 → md:grid-cols-2 → grid-cols-1
- Images maintain aspect ratios, scale to container width