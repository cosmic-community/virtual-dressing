# Professional Services Showcase Platform

![App Preview](https://imgix.cosmicjs.com/0cb81b90-b006-11f0-91fb-4f0a74e7f402-photo-1517694712202-14dd9538aa97-1761220040816.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern Vue.js/Nuxt.js application for showcasing professional services, team members, client testimonials, and case studies. Built with Cosmic CMS for seamless content management.

## ✨ Features

- **Services Directory** - Browse and filter services by category (Development, Design, Consulting, Marketing)
- **Team Showcase** - Professional team member profiles with photos, bios, and social links
- **Client Testimonials** - Display authentic customer feedback with 5-star ratings
- **Case Studies** - Detailed project showcases with challenges, solutions, and measurable results
- **Responsive Design** - Fully optimized for all devices using Tailwind CSS
- **Server-Side Rendering** - Fast initial page loads with Nuxt.js SSR
- **Dynamic Content** - All content managed through Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fa14e492c9229c30fe0d1f&clone_repository=68fa175792c9229c30fe0d50)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Develop a Vue.js application that uses my existing object types and objects"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Nuxt.js 3** - Vue.js framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Bun** - Fast JavaScript runtime and package manager

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with bucket access
- Node.js 18+ (for compatibility)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd professional-services-showcase
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. **Run the development server**
```bash
bun run dev
```

The application will be available at `http://localhost:3000`

## 📖 Cosmic SDK Examples

### Fetching Services

```typescript
// server/api/services.get.ts
import { cosmic } from '~/lib/cosmic'

export default defineEventHandler(async () => {
  try {
    const { objects: services } = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return services
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
})
```

### Fetching Team Members

```typescript
// server/api/team.get.ts
import { cosmic } from '~/lib/cosmic'

export default defineEventHandler(async () => {
  try {
    const { objects: team } = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return team
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
})
```

## 🌐 Cosmic CMS Integration

This application integrates with the following Cosmic object types:

### Services
- Service Name
- Description (HTML)
- Category (Consulting, Development, Design, Marketing)
- Featured Image
- Starting Price

### Team Members
- Full Name
- Role
- Bio
- Photo
- LinkedIn URL
- Twitter Handle

### Testimonials
- Client Name
- Company
- Testimonial
- Rating (3-5 stars)
- Client Photo

### Case Studies
- Project Title
- Client Name
- Challenge (HTML)
- Solution (HTML)
- Results (HTML)
- Project Images
- Related Service

## 🚀 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in project settings:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Build command: `bun run build`
4. Publish directory: `.output/public`
5. Add environment variables in site settings
6. Deploy

### Environment Variables Setup

For production deployment, set these environment variables in your hosting platform's dashboard:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📝 Development Notes

- All content is fetched server-side for optimal performance
- API routes handle Cosmic SDK calls to keep credentials secure
- TypeScript provides type safety throughout the application
- Tailwind CSS ensures consistent, responsive design
- Components are modular and reusable

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

<!-- README_END -->