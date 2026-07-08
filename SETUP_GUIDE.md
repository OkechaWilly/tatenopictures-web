# Tateno Pictures — Setup Guide

## Quick Start

The site is now fully configured for production. Here's what you need to do:

---

## 1. Email Configuration (Resend)

To enable automated email notifications when clients submit contact forms:

### Step 1: Create a Resend Account
1. Visit [resend.com](https://resend.com)
2. Sign up for a free account (free tier: 3,000 emails/month)
3. Go to API Keys and copy your API key

### Step 2: Configure .env.local
1. Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
2. Add your Resend API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
   ```

### Step 3: Verify Email Domain
- In Resend dashboard, add your custom domain `tatenopictures.com`
- Update DNS records as instructed
- Once verified, you can send from `noreply@tatenopictures.com`

**What Happens:**
- When a client submits a contact form, they receive a confirmation email
- The studio receives the inquiry at `info@tatenopictures.com` with reply-to set to the client's email
- Both emails are styled professionally with the Tateno brand colors

---

## 2. Project Detail Pages

All project detail pages are automatically generated from `projectsData` in `src/components/Work.tsx`.

**Routes:**
- `/work/the-new-neighbour`
- `/work/benja`
- `/work/binyumira`
- etc.

Each project page includes:
- Full-screen hero image
- Project metadata (year, client, duration)
- Technical specs (camera, format, lenses)
- Project description (3 paragraphs)
- Production gallery (4-8 stills)
- Previous/Next project navigation

---

## 3. Academy Page

The dedicated Academy page is now live at `/academy`.

**Features:**
- Cinematic hero with manifesto
- 3-course grid (Cinematography, DaVinci Resolve, Directing)
- Course detail modal with full curriculum
- Application form
- Private mentorship inquiry section

**To Add More Courses:**
Edit `src/app/academy/page.tsx` and add to the `coursesData` array:
```typescript
{
  slug: 'new-course-slug',
  title: 'Course Title',
  duration: '6 Weeks',
  level: 'Beginner to Advanced',
  instructor: 'Instructor Name',
  description: 'Course description...',
  curriculum: ['Module 1', 'Module 2', ...],
  equipment: 'Equipment used',
  price: '$XXX USD'
}
```

---

## 4. Deployment Checklist

Before going live:

- [ ] Configure Resend API key in `.env.local`
- [ ] Test contact form submission (check confirmation emails)
- [ ] Verify project detail pages render correctly
- [ ] Test Academy enrollment form
- [ ] Update metadata/SEO titles for `/work/[slug]` and `/academy`
- [ ] Deploy to production hosting (Vercel recommended for Next.js)

---

## 5. Optional Enhancements

### Add More Project Content
To add more detailed paragraphs and gallery images to a project page, edit `src/app/work/[slug]/page.tsx` and add to `detailedProjectContent`:

```typescript
'your-project-slug': {
  paragraphs: [
    "Paragraph 1...",
    "Paragraph 2...",
    "Paragraph 3..."
  ],
  gallery: [
    '/images/path-to-image-1.png',
    '/images/path-to-image-2.png',
    ...
  ]
}
```

### Email Customization
Update email templates in `/api/contact/route.ts`:
- Change `from:` and `replyTo:` addresses
- Modify HTML email design
- Add additional recipient emails

---

## 6. Troubleshooting

### Contact form not sending emails?
1. Check that `RESEND_API_KEY` is set in `.env.local`
2. Restart the dev server: `npm run dev`
3. Check terminal logs for error messages
4. Verify Resend API key is valid at resend.com

### Project pages showing 404?
- Make sure project slug matches exactly in `projectsData`
- Check that project images exist at the specified paths
- Run `npm run build` to regenerate static pages

### Academy form not working?
- Check that form inputs have correct `name` attributes
- Verify contact form is working first (same backend)
- Check browser console for JavaScript errors

---

## 7. Performance Metrics

Current setup includes:
- ✅ Static site generation for project pages (ISR)
- ✅ Optimized image loading with Next.js Image
- ✅ Parallax hero background with Framer Motion
- ✅ Smooth scroll animations
- ✅ Mobile-responsive design
- ✅ SEO-optimized with metadata templates

---

## 8. Support & Documentation

- **Next.js Docs:** https://nextjs.org/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Resend Email:** https://resend.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

---

**Setup completed:** 2026-07-09  
**Last updated:** 2026-07-09
