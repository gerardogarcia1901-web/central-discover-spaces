# CENTRAL San Miguel Centro

Create the complete frontend website for CENTRAL, a Salvadoran commercial-center brand operated by Grupo Galo.

IMPORTANT:

This prompt is ONLY for the visual/frontend website of the main CENTRAL corporate website.

Do NOT build the administrative CMS, database, analytics/tracking integrations, or interactive indoor map at this stage. Those components will be developed separately later.

The objective is to create the complete visual structure, UX, navigation, responsive layouts, reusable components and frontend experience so that the technical systems can be connected later without redesigning the interface.

TECH STACK

Build the project using:

- Next.js

- React

- TypeScript

- Tailwind CSS

- shadcn/ui when a component requires it

Use a clean, scalable component architecture.

The code should be organized so that future CMS/database content can replace static/mock data without requiring major frontend restructuring.

REFERENCE WEBSITES

Use these websites as functional and visual references:

1. https://portales.com.gt/

2. https://oaklandplace.com.gt/

PORTALES should be treated primarily as a reference for:

- Clear commercial-center navigation

- Location/center selection

- Practical visitor information

- Organization of stores and categories

- Events and promotions

- Contact and location information

- Simple and intuitive user journeys

OAKLAND PLACE should be treated as a complementary reference for:

- Presenting the commercial center as a destination

- Strong visual storytelling

- Photography-driven sections

- Stores and brands

- Dining/gastronomy

- Experiences

- Events

- Amenities

- Commercial content

DO NOT COPY either website.

Do not copy their:

- Exact layouts

- Text

- Images

- Branding

- Logos

- Code

- UI components

- Visual identity

Instead, study their information architecture, UX patterns and commercial-center functionality and create an original CENTRAL experience.

CENTRAL BRAND CONTEXT

CENTRAL is a master brand for different commercial developments in El Salvador.

The platform must communicate CENTRAL as a modern, premium, contemporary and scalable commercial brand.

The final Brand Book is currently being developed by an external branding agency called MAGENTA.

Therefore:

For this first visual implementation, create a sophisticated temporary visual system based on the current CENTRAL direction and the references above.

The current visual direction should lean toward:

- Black

- White

- Neutral tones

- Strong photography

- Large typography

- Editorial compositions

- Premium commercial aesthetic

- Strong visual hierarchy

- Modern spacing

- Large immersive imagery

- Subtle motion and transitions

The design must NOT look:

- Corporate/institutional

- Like a government website

- Like a generic WordPress template

- Like a conventional directory

- Rigid or visually flat

The site should feel like a premium commercial destination.

IMPORTANT:

The temporary visual system must be designed so the colors, typography, photography treatment, spacing, buttons and other visual tokens can later be replaced or adapted when MAGENTA delivers the final Brand Book.

Do not over-engineer the temporary branding.

MAIN WEBSITE STRUCTURE

Create the main CENTRAL website with the following conceptual structure:

/

Home CENTRAL

/ubicaciones

Locations selector

/ubicaciones/[slug]

Individual location page structure

/directorio

Commercial directory

/gastronomia

Gastronomy

/eventos

Events

/promociones

Promotions and campaigns

/novedades

News / editorial content

/arrendamientos

Commercial leasing

/contacto

Contact

The structure should be scalable for future locations and future content.

CENTRAL HOME

The homepage should immediately communicate what CENTRAL is and guide users toward the different commercial locations.

Create the homepage with a strong visual hierarchy.

Suggested sections:

1. HEADER

Create a clean premium header.

Include:

- CENTRAL logo/wordmark placeholder

- Main navigation

- Locations access

- Search icon

- Language selector placeholder

- Contact/action CTA where appropriate

Suggested navigation:

CENTRAL

CENTROS

MARCAS Y TIENDAS

PROMOCIONES

EVENTOS

NOTICIAS

ARRENDAMIENTOS

CONTACTO

The navigation can be optimized from a UX perspective if necessary.

The header should become sticky while scrolling.

2. HERO

Create a large immersive hero section.

The hero should support:

- Large photography

- Video background in the future

- Overlay text

- CTA buttons

The visual language should feel similar in impact to premium commercial-center websites, but completely original.

Example content:

"VIVE TUS MOMENTOS"

"Descubre CENTRAL"

Supporting copy explaining CENTRAL as a destination for shopping, dining, experiences and entertainment.

Primary CTA:

"ENCUENTRA TU CENTRAL"

Secondary CTA:

"DESCUBRE MÁS"

Use placeholder imagery if necessary.

3. LOCATION SELECTION

This is one of the most important sections of the homepage.

Create a visually strong selector for CENTRAL locations.

Initial locations:

CENTRAL San Miguel Centro

CENTRAL Santa Rosa de Lima

The architecture must also support future locations.

Each location card should contain:

- Location name

- Short description

- Status

- Main image

- CTA

- Link to its dedicated location page

For example:

CENTRAL SAN MIGUEL CENTRO

"Centro comercial urbano"

"Visitar CENTRAL San Miguel Centro"

CENTRAL SANTA ROSA DE LIMA

"Próxima apertura"

"Descubrir proyecto"

Future locations should be easy to add later.

4. FEATURED CONTENT

Create a visual editorial section for:

- Promotions

- Events

- News

- Openings

- Campaigns

Use cards with strong imagery.

The structure should later support content coming dynamically from a CMS.

5. DISCOVER CENTRAL

Create a section explaining the CENTRAL experience.

Focus on:

- Shopping

- Gastronomy

- Experiences

- Services

- Community

- Lifestyle

Use editorial layouts rather than generic icon grids.

6. BRANDS / STORES PREVIEW

Create a section introducing the commercial directory.

Include:

- Featured brands

- Categories

- CTA to "Ver todas las marcas"

Categories can include examples such as:

- Moda

- Gastronomía

- Belleza

- Servicios

- Tecnología

- Hogar

- Entretenimiento

These should be represented as UI elements but structured so they can later be populated dynamically.

7. UPCOMING OPENINGS

Create a section for upcoming CENTRAL developments.

This should be especially useful for locations that are not yet operational.

Include:

- Project image

- Location

- Status

- Expected opening placeholder

- CTA

8. LEASING / COMMERCIAL OPPORTUNITIES

Create a premium commercial section for businesses interested in leasing.

Title example:

"CRECE CON CENTRAL"

Explain that CENTRAL offers commercial opportunities for brands and operators.

Include CTA:

"QUIERO ARRENDAR"

This should link to /arrendamientos.

9. NEWS / CONTENT

Create an editorial section for:

- News

- Experiences

- New openings

- Brand announcements

- Commercial-center updates

Include CTA:

"VER TODAS LAS NOTICIAS"

10. CONTACT / VISIT

Create a practical section with:

- Contact information

- Social media placeholders

- Location access

- CTA

- General contact

11. FOOTER

Create a complete premium footer containing:

- CENTRAL logo

- Navigation

- Locations

- Brands

- Contact

- Social links

- Legal/policy placeholders

LOCATION EXPERIENCE

Although this prompt focuses on the CENTRAL corporate website, create the frontend structure necessary for individual location pages.

IMPORTANT:

These location pages should NOT be separate standalone websites at this stage.

They are internal routes within the CENTRAL frontend architecture.

The two initial locations are:

- CENTRAL San Miguel Centro

- CENTRAL Santa Rosa de Lima

Each location must have a reusable template.

Example:

/ubicaciones/san-miguel-centro

/ubicaciones/santa-rosa-de-lima

Each location page should include:

- Hero

- Location name

- Description

- Status

- Opening/operating information

- Hours

- Address

- How to get there

- Stores

- Gastronomy

- Promotions

- Events

- News

- Services

- Amenities

- Parking information where applicable

- Contact

- Leasing information

The template must be reusable so future CENTRAL locations can use the same architecture.

COMMERCIAL DIRECTORY

Create a complete frontend commercial directory.

Route:

/directorio

The directory should allow users to:

- Search by store/business name

- Filter by category

- Filter by location

- Browse brands

- Open a business detail page

Create a reusable business card.

Each business should support:

- Logo

- Name

- Category

- Location

- Store/local number

- Hours

- Phone

- Website

- Social links

- Description

- Image

Create a reusable detail structure such as:

/directorio/[slug]

Use mock data for now.

The data architecture should make it easy to replace the mock data with CMS/database data later.

GASTRONOMY

Create:

/gastronomia

The section should showcase:

- Restaurants

- Cafés

- Food concepts

- Dining experiences

Allow filtering by location and category.

PROMOTIONS

Create:

/promociones

Create a visually strong campaign/promotions layout.

Each promotion should support:

- Image

- Title

- Description

- Location

- Category

- Validity

- CTA

EVENTS

Create:

/eventos

Each event should support:

- Image

- Title

- Date

- Time

- Location

- Description

- CTA

Allow filtering by location.

NEWS

Create:

/novedades

Create an editorial/news experience.

Each article should support:

- Featured image

- Category

- Title

- Date

- Summary

- Full article page

Example:

/novedades/[slug]

LEASING

Create:

/arrendamientos

This section should target:

- Brands

- Retailers

- Restaurant operators

- Commercial partners

- Potential tenants

Include:

- Introduction

- Commercial opportunities

- Location/project cards

- General project information

- CTA to contact the commercial team

Create a strong lead-generation experience without exposing sensitive commercial information.

CONTACT

Create:

/contacto

Include:

- General contact

- Contact form UI

- Location selector

- Phone

- Email

- Social media

- CTA

The form does not need a backend integration yet.

UX REQUIREMENTS

The entire site should prioritize:

- Mobile-first UX

- Clear navigation

- Strong visual hierarchy

- Fast discovery of locations

- Fast discovery of stores

- Easy access to promotions/events

- Strong CTAs

- Commercial conversion

- Accessibility

- Responsive behavior

The most important user journey should be:

CENTRAL → choose location → discover what is there → find a store/experience → obtain practical information → contact or visit.

RESPONSIVE DESIGN

Fully optimize for:

- Mobile

- Tablet

- Desktop

- Large desktop screens

Pay special attention to:

- Navigation

- Hero cropping

- Typography

- Cards

- Filters

- Directory

- Forms

- Footer

Do not simply shrink desktop layouts.

Create intentional responsive layouts.

SEO-READY FRONTEND STRUCTURE

Prepare the frontend for:

- Clean URLs

- Individual URLs for locations

- Individual URLs for stores

- Individual URLs for events

- Individual URLs for promotions

- Individual URLs for news

- Metadata

- Proper H1/H2 hierarchy

- Semantic HTML

- Optimized images

- Sitemap-ready routing

Do not implement external analytics or tracking at this stage.

PERFORMANCE

The visual design can be rich, but it must remain performant.

Use:

- Next.js image optimization

- Lazy loading where appropriate

- Responsive images

- Efficient component structure

- Minimal unnecessary JavaScript

- Optimized animations

Avoid excessive animations that negatively impact mobile performance.

COMPONENT SYSTEM

Create reusable components for:

- Header

- Footer

- Hero

- Location cards

- Store cards

- Category filters

- Search

- Promotion cards

- Event cards

- News cards

- CTA sections

- Editorial sections

- Buttons

- Forms

- Breadcrumbs

- Badges/status

- Location selector

- Responsive navigation

- Modal/dialog components when useful

Use shadcn/ui when it provides a useful foundation for components such as:

- Dialog

- Dropdown

- Select

- Tabs

- Accordion

- Input

- Button

- Form

- Sheet/mobile navigation

Do not make the website look like a shadcn/ui template. Customize the components heavily to match the CENTRAL visual direction.

CONTENT

Use realistic Spanish placeholder content related to CENTRAL.

Do not use lorem ipsum.

Use placeholder images that represent:

- Commercial centers

- Architecture

- Stores

- People

- Gastronomy

- Lifestyle

- Events

- Experiences

Clearly structure the code so all placeholder content can later be replaced by real CENTRAL content.

IMPORTANT: FUTURE BRAND BOOK

The current design is provisional.

MAGENTA will later provide:

- Final color system

- Typography

- Brand assets

- Photography direction

- Iconography

- Visual composition

- Motion direction

- Final brand skin

Therefore, build the frontend using centralized design tokens and reusable components so these elements can be replaced efficiently.

Do NOT hard-code the entire visual identity into individual components.

ARCHITECTURE PRINCIPLE

The most important technical principle is scalability.

Do not build the site as a collection of hardcoded pages.

Build reusable structures for:

Location

→ Stores

→ Categories

→ Promotions

→ Events

→ News

→ Gastronomy

→ Services

→ Contact information

The frontend should be prepared to eventually consume structured CMS/database data.

FUTURE LOCATIONS

The system must make it possible to add a new location without redesigning the website.

For example, a future location should be able to become:

/ubicaciones/santa-ana

/ubicaciones/sonsonate

/ubicaciones/la-union

without creating a completely new frontend architecture.

IMPORTANT SCOPE EXCLUSIONS FOR THIS BUILD

Do NOT implement:

- CMS / administrative panel

- Supabase/database integration

- Google Analytics

- Google Tag Manager

- Meta Pixel

- Campaign tracking

- Interactive indoor mall map

- Email marketing integrations

- Transactional email system

- Production domain configuration

- Hosting configuration

Create the UI and frontend structures where these future systems can later connect.

FINAL OBJECTIVE

The final result should feel like a real, polished, premium commercial-center website for CENTRAL — not a generic landing page.

The website should communicate:

CENTRAL is a destination.

CENTRAL has multiple locations.

Each location has its own commercial experience.

Users can quickly discover stores, gastronomy, promotions, events and practical information.

The platform is designed to grow with future CENTRAL locations.

Create the complete frontend experience, including all primary pages, reusable components, responsive states, navigation and realistic Spanish placeholder content.

Prioritize visual quality, UX clarity, scalability and a premium commercial aesthetic.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://central-discover-spaces.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9ff5ca9c-2507-4955-8b82-6bd44327357c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
