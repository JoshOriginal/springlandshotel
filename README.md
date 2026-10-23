# Springlands Hotel website

A responsive React and Vite website for Springlands Hotel in Moshi, Tanzania. Tailwind CSS is available through the Vite plugin; the bespoke page styling lives in `src/index.css`.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Pages and navigation

The site provides directly addressable Home (`/`), About Us (`/about`), Accommodation (`/rooms`), Facilities & Dining (`/facilities`), Experiences (`/experiences`), Gallery (`/gallery`), and Contact (`/contact`) pages. Shared navigation marks the active page, page titles and descriptions update by route, and the home page links to full section pages. Room enquiries can pass the selected room to the contact form, and gallery images can open directly in the lightbox. `vercel.json` rewrites page routes to the Vite entry point so direct links and refreshes work on Vercel.

## Content and asset audit

The original photographs are preserved locally under `client-content/images/`; this 1.39 GB source archive is excluded from GitHub to keep the repository manageable. The optimized WebP images used by the website are included. The visual audit covers 90 images (80 JPEGs and 10 numbered PNGs), including three recently added safari photographs. The original 87 images were reviewed in labeled contact sheets; the three safari photographs were inspected individually. No exact byte-identical duplicates were found. Full-resolution, pixel-level sharpness and noise checks for the large JPEGs were limited by the viewer's 10 MB per-image limit. The complete inventory, classifications, confidence scores, dimensions, quality notes, alt text, exclusions, enhancement notes, and selection plan are maintained in `src/data/imageManifest.js`.

The selected photographs are converted to responsive WebP variants at up to 640, 1200, and 1920 pixels wide in `public/images/optimized/`. Sources narrower than the standard sizes also receive a native-width optimized version; this avoids unnecessary upscaling. Processing applies EXIF orientation, resizing, restrained edge sharpening, and WebP compression. It does not apply AI upscaling, deblurring, denoising, exposure correction, or white-balance changes. Originals are never changed. Generate or refresh these web assets with:

```sh
npm run optimize-images
```

The full-width hero carousel shuffles nine distinct genuine Springlands Hotel photographs on each visit: the courtyard, swimming pool, garden pavilion and seating, café counter, and single-, twin-, quadruple-, and five-bed rooms. It crossfades and subtly zooms between slides every six seconds, preloads only the next image, pauses while hovered or keyboard-focused, and supports touch swipes, arrow keys, previous/next controls, and direct slide indicators. Reduced-motion preferences disable autoplay and image animation. The About section pairs the hotel introduction with a large courtyard photograph; accommodation, facility, regional-experience, and gallery sections use selected photographs. The gallery uses a varied feature-image layout and supports a keyboard-navigable lightbox. The accommodation manifest assigns images by visible bed layout: one large bed, two separate beds, four separate beds, and five separate beds. Confirm the hotel's official room-category mapping and guest capacities before launch. No supplied photograph shows the private Jacuzzi, so its card and detail view use a branded visual fallback rather than a misleading bedroom photograph; an authentic Jacuzzi-room photo is still needed. The Wildlife Safari card uses the supplied game-drive photograph with a lion partly visible in the grass; all three supplied safari photos are included in the gallery. The hotel confirms that Zara Tanzania Adventures safari vehicles are approved for this website. Four other attraction locations and the cultural-market image context still need confirmation.

Supplied Springlands logo and favicon assets are preserved in `favicon_io/` and copied to `public/` for the site header, footer, browser tabs, and Apple touch icon. There is no supplied SVG logo or standalone interface-icon set. Room cards open accessible detail dialogs and link to the existing enquiry form; experience and gallery images open the keyboard-navigable gallery lightbox. Scroll-triggered section and line-by-line heading reveals, subtle About-image parallax, a reading-progress indicator, and restrained pointer tilt are implemented without additional animation dependencies. Motion is disabled or reduced for `prefers-reduced-motion`; if JavaScript or Intersection Observer is unavailable, page content stays visible. The enquiry form opens a pre-filled WhatsApp message for the guest to review and send; the site does not store the submitted stay details.

Image `8.png` appears blurred/pixelated despite its 2160×2160 dimensions. It is excluded from the site; an original camera file or replacement is recommended. The current workflow does not include a dedicated AI upscaler or deblurrer, and no AI enhancement was performed. Other selected photos received only the documented conservative web processing; judge their output at the intended display size. The image optimizer needs the locally preserved original archive; the originals are not included in the GitHub repository.

The WhatsApp button and enquiry form use the confirmed hotel contact number +255 753 997 777. The location section uses the client-supplied Google Maps embed and coordinates. Before launch, confirm the attraction locations flagged in the manifest, supply the missing private-Jacuzzi and room-category/facility photographs, and confirm any official street address, email, social links, and video URL. Provide approved FAQ answers. The enquiry flow hands a pre-filled message to WhatsApp; the guest must still review and send it.
