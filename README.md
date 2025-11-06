# Nreurax Browser Website

Professional landing page for Nreurax Browser - AI-Powered Enterprise Browser

## Features

- ✅ **Mobile-First Design** - Fully responsive from 320px to 4K
- ✅ **Dark Mode** - Beautiful dark theme matching browser UI
- ✅ **Glassmorphism** - Modern glass effects throughout
- ✅ **LavaVeil Framework** - Minimal extract (only used classes)
- ✅ **Download Support** - Windows, macOS, and Linux
- ✅ **Smooth Animations** - Scroll animations and transitions
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Fast Loading** - Minimal CSS/JS, no external dependencies

## Structure

```
website/
├── index.html          # Main landing page
├── css/
│   ├── lavaveil.min.css   # LavaVeil framework (minimal extract)
│   └── style.css          # Custom styles
├── js/
│   └── script.js          # Interactive features
└── assets/             # Images and downloads (add your files here)
```

## Deployment

### Option 1: GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live at `https://username.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop the `website` folder to Netlify
2. Site goes live instantly
3. Free SSL and CDN included

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in website directory
3. Follow prompts

### Option 4: Traditional Hosting
1. Upload all files via FTP
2. Point domain to the directory
3. Done!

## Customization

### Colors
Edit `css/style.css` variables:
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #f093fb;
}
```

### Download Links
Edit `js/script.js` download URLs:
```javascript
const downloads = {
  windows: { url: 'your-url.exe' },
  mac: { url: 'your-url.dmg' },
  linux: { url: 'your-url.AppImage' }
};
```

### Content
Edit `index.html` sections:
- Hero text
- Features
- Stats
- About section

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+
- **Total Size**: < 50KB (without images)

## License

MIT License - Free to use and modify

## Developer

**Sayeed Razmenda**
- Full Stack Developer
- 7 years experience
- LinkedIn: https://www.linkedin.com/in/razmenda/
