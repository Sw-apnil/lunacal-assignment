# lunacal - Professional Portfolio

A modern, responsive portfolio website built with Next.js and React. This project showcases a professional profile with an interactive about section and image gallery.

## Overview

**lunacalzip** is a sleek, dark-themed portfolio website featuring:
- **About Me Widget** - Multi-tab interface displaying information about the user (About, Experiences, Recommended)
- **Gallery Widget** - Interactive image carousel with navigation controls
- **Responsive Design** - Optimized for desktop and mobile devices
- **Modern UI** - Dark theme with smooth animations and transitions

## Features

### About Me Widget
- Three tabbed sections: About, Experiences, and Recommended
- Smooth tab switching with hover effects
- Custom scrollbar styling
- Responsive text content display

### Gallery Widget
- Interactive image carousel with previous/next navigation
- Add image functionality
- Three-image grid display
- Hover animations and scaling effects
- Optimized image loading with Next.js Image component

### Design
- Dark theme (#141414 background)
- Glassmorphism-inspired card design
- Smooth transitions and hover effects
- Mobile-first responsive layout
- Professional typography with Geist font family

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist & Geist Mono (Google Fonts)
- **Image Optimization**: Next.js Image component
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

\`\`\`
lunacalzip/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with grid layout
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── about-me-widget.tsx # About section component
│   ├── gallery-widget.tsx  # Gallery carousel component
│   ├── theme-provider.tsx  # Theme configuration
│   └── ui/                 # shadcn/ui components
├── public/
│   ├── gallery-1.jpg       # Gallery image 1
│   ├── gallery-2.jpg       # Gallery image 2
│   └── gallery-3.jpg       # Gallery image 3
├── lib/
│   └── utils.ts            # Utility functions
├── next.config.mjs         # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/lunacalzip.git
   cd lunacalzip
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

The production build will be optimized and ready for deployment.

## Customization

### Update Profile Information
Edit `/components/about-me-widget.tsx` to update the About, Experiences, and Recommended sections:

\`\`\`typescript
const tabContent = {
  about: "Your about text here...",
  experiences: "Your experiences here...",
  recommended: "Your recommendations here...",
}
\`\`\`

### Add Gallery Images
1. Add your images to the `/public` folder
2. Update the image paths in `/components/gallery-widget.tsx`:
   \`\`\`typescript
   const [images, setImages] = useState([
     "/your-image-1.jpg",
     "/your-image-2.jpg",
     "/your-image-3.jpg",
   ])
   \`\`\`

### Customize Colors
Edit `/app/globals.css` to modify the color scheme. Current theme uses:
- Background: `#141414`
- Cards: `#2B2B2B`
- Text: `#C0C0C0` to `#F3F4F6`

### Update Metadata
Edit `/app/layout.tsx` to change the page title and description:

\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your portfolio description",
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push to main

**Live Demo**: [https://vercel.com/vrmashikhu-6298s-projects/v0-lunacalzip](https://vercel.com/vrmashikhu-6298s-projects/v0-lunacalzip)

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Self-hosted servers

## Performance Optimization

- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Font Optimization**: Google Fonts are self-hosted and optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Images Not Showing in Production
- Ensure all image files are in the `/public` folder
- Check that image paths in components match the actual filenames
- Verify image formats are supported (JPG, PNG, WebP, etc.)

### Styling Issues
- Clear browser cache and rebuild: `npm run build`
- Ensure Tailwind CSS is properly configured in `globals.css`
- Check that all custom styles use the correct color values

### Build Errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Try `npm run build` to identify specific errors

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the project maintainer.

## Built With v0

This project was created and is maintained using [v0.app](https://v0.app) - Vercel's AI-powered code generation platform.

---

**Last Updated**: October 2025  
**Version**: 1.0.0
