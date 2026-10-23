const audit = [
  { filename: "CYR03291.jpg", subject: "Shrubs partly covering an emergency fixture", category: "Garden detail / safety equipment", confidence: 0.96, quality: "High-resolution portrait; foliage is clear, but the safety fixture dominates and is partly obscured.", alt: "Green shrubs in front of a wall-mounted emergency fixture.", selectedFor: [], verificationNeeded: false, disposition: "Do not use; incidental safety equipment is not a guest-facing subject." },
  { filename: "CYR03300.jpg", subject: "Fire extinguisher beside a door", category: "Safety equipment", confidence: 0.99, quality: "High-resolution portrait; clear but tightly framed around emergency equipment.", alt: "Fire extinguisher mounted beside a dark door.", selectedFor: [], verificationNeeded: false, disposition: "Do not use in promotional photography." },
  { filename: "CYR03357.jpg", subject: "Interior ceiling, light, and upper wall", category: "Unknown interior detail", confidence: 0.8, quality: "High-resolution portrait; mostly empty ceiling and wall with little useful context.", alt: "Ceiling light and upper wall inside a building.", selectedFor: [], verificationNeeded: true, disposition: "Do not use; the room or facility cannot be identified." },
  { filename: "CYR03366.jpg", subject: "Covered hotel corridor opening toward a courtyard", category: "Hotel exterior / corridor", confidence: 0.9, quality: "High-resolution portrait; bright, straight corridor with useful depth, but limited width.", alt: "Covered hotel corridor with windows, tiled floor, and greenery at the far end.", selectedFor: ["gallery"], verificationNeeded: false, disposition: "Selected for the gallery." },
  { filename: "CYR03411.jpg", subject: "Garden sign asking visitors to keep off the garden", category: "Garden detail / signage", confidence: 0.99, quality: "High-resolution landscape; sign is sharp, but the message is not a welcoming lead image.", alt: "A sign in the garden reads, Please keep off the garden.", selectedFor: [], verificationNeeded: false, disposition: "Do not use; signage is not suitable for a hospitality gallery." },
  { filename: "CYR03481.jpg", subject: "Promotional wall poster", category: "Interior signage", confidence: 0.96, quality: "High-resolution portrait; poster is readable but visually busy and not hotel atmosphere.", alt: "Promotional poster mounted on an interior wall.", selectedFor: [], verificationNeeded: true, disposition: "Do not use; poster content and branding should be confirmed." },
  { filename: "CYR03490.jpg", subject: "Exterior walkway beside hotel rooms and planting", category: "Hotel exterior / gardens", confidence: 0.95, quality: "High-resolution portrait; clean leading lines and visible planting, though the crop is narrow.", alt: "Tiled walkway beside the hotel veranda, guest-room windows, and tropical plants.", selectedFor: ["gallery"], verificationNeeded: false, disposition: "Selected for the gallery." },
  { filename: "CYR03499.jpg", subject: "Tropical plant and lawn detail", category: "Tropical gardens", confidence: 0.97, quality: "High-resolution portrait; the plant is sharp and saturated, but the frame is a detail rather than a full garden view.", alt: "Colorful tropical foliage growing in a green hotel garden.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; broader garden photographs communicate the grounds better." },
  { filename: "CYR03506.jpg", subject: "Interior staircase", category: "Hotel interior / stairs", confidence: 0.99, quality: "High-resolution landscape; reasonably sharp, but the stairwell is dark and utilitarian.", alt: "Wooden staircase with dark railings inside the hotel.", selectedFor: [], verificationNeeded: false, disposition: "Do not use in the promotional gallery." },
  { filename: "CYR03511.jpg", subject: "Outdoor table and chairs under a covered garden patio", category: "Outdoor relaxation / dining area", confidence: 0.9, quality: "High-resolution portrait; clear seating and lush setting, but narrow framing limits layout use.", alt: "Outdoor table and chairs on a covered patio surrounded by tropical greenery.", selectedFor: ["facility-photos", "gallery"], verificationNeeded: true, disposition: "Selected as an additional covered-patio image; confirm whether guests use this area for dining or relaxation." },
  { filename: "CYR03525.jpg", subject: "Cup of coffee with latte art and biscuits", category: "Café / coffee", confidence: 0.95, quality: "High-resolution portrait; crisp cup detail and strong focus, with dark negative space.", alt: "A cup of latte-art coffee served with biscuits.", selectedFor: ["gallery"], verificationNeeded: true, disposition: "Selected for the gallery; confirm the photographed coffee is from Springlands Café." },
  { filename: "CYR03526.jpg", subject: "Cup of coffee with latte art and biscuits", category: "Café / coffee", confidence: 0.95, quality: "High-resolution portrait; nearly the same coffee subject and styling as CYR03525.jpg.", alt: "A cup of latte-art coffee served with biscuits.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate of CYR03525.jpg; omit to avoid repetitive gallery content." },
  { filename: "CYR03585.jpg", subject: "Garden bar sign behind foliage", category: "Garden bar", confidence: 0.98, quality: "High-resolution portrait; sign is clear but partially blocked by plants and photographed in deep shade.", alt: "Garden bar sign partly screened by tropical leaves.", selectedFor: [], verificationNeeded: false, disposition: "Do not use; an actual bar photograph would be more inviting." },
  { filename: "CYR03586.jpg", subject: "Garden bar doorway and plants", category: "Garden bar", confidence: 0.9, quality: "High-resolution portrait; dim exposure and a partially obscured entrance.", alt: "A shaded doorway beside tropical plants at the garden bar.", selectedFor: [], verificationNeeded: false, disposition: "Do not use; low light and obstructed composition." },
  { filename: "CYR03597.jpg", subject: "Bottled drinks in a refrigerator", category: "Refreshments / refrigerator", confidence: 0.98, quality: "Portrait with lower resolution than most files; product shelves are clear, but the subject is utilitarian.", alt: "Bottled drinks displayed in a glass-front refrigerator.", selectedFor: [], verificationNeeded: false, disposition: "Do not use as a facility highlight." },
  { filename: "CYR03600.jpg", subject: "Refrigerators and counter in a beverage area", category: "Beverage service area", confidence: 0.9, quality: "High-resolution landscape; scene is recognizable but underlit and visually busy.", alt: "Beverage refrigerators behind an interior counter.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; requires a brighter, more guest-focused photograph." },
  { filename: "CYR03622.jpg", subject: "Potted plant inside a tiled restroom", category: "Restroom interior", confidence: 0.97, quality: "High-resolution portrait; clean but the restroom fixtures are prominent.", alt: "A potted plant in a tiled restroom.", selectedFor: [], verificationNeeded: false, disposition: "Do not use in the hotel gallery." },
  { filename: "CYR03626.jpg", subject: "Urinals in a tiled restroom", category: "Restroom interior", confidence: 0.99, quality: "High-resolution portrait; clear but an unsuitable promotional subject.", alt: "Urinals in a tiled restroom.", selectedFor: [], verificationNeeded: false, disposition: "Do not use." },
  { filename: "CYR03627.jpg", subject: "Urinals in a tiled restroom", category: "Restroom interior", confidence: 0.99, quality: "High-resolution portrait; very similar restroom view to CYR03626.jpg.", alt: "Urinals in a tiled restroom.", selectedFor: [], verificationNeeded: false, disposition: "Near-duplicate restroom view; do not use." },
  { filename: "CYR03643.jpg", subject: "Outdoor table and chairs among tropical planting", category: "Outdoor relaxation / garden seating", confidence: 0.92, quality: "High-resolution portrait; visible seating, plants, and shade create a useful facilities image.", alt: "Outdoor table and chairs surrounded by tropical plants in a shaded garden.", selectedFor: ["facilities", "hero-carousel"], verificationNeeded: true, disposition: "Selected for the facilities section and homepage hero carousel; confirm whether this is a guest dining or relaxation area." },
  { filename: "CYR03660.jpg", subject: "Garden seating area behind tropical hedges", category: "Tropical gardens / outdoor relaxation", confidence: 0.91, quality: "High-resolution landscape; broad, clear setting, with darker shadows under the umbrellas.", alt: "Garden seating beneath umbrellas behind lush tropical hedges.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; CYR03643.jpg provides a clearer view of seating." },
  { filename: "CYR03661.jpg", subject: "Hotel building partly screened by garden planting", category: "Hotel exterior / gardens", confidence: 0.94, quality: "High-resolution landscape; green foreground is attractive, but the building is mostly obscured.", alt: "Hotel roof and exterior partly visible through tropical garden plants.", selectedFor: ["gallery"], verificationNeeded: false, disposition: "Selected for the gallery as a garden and building view." },
  { filename: "CYR03749.jpg", subject: "Sunburst-style wall decoration", category: "Interior décor detail", confidence: 0.98, quality: "High-resolution portrait; sharp decorative detail, but no room context.", alt: "Sunburst wall decoration on a light-colored wall.", selectedFor: [], verificationNeeded: false, disposition: "Do not use as a standalone gallery image." },
  { filename: "CYR03751.jpg", subject: "Treatment table in a small relaxation room", category: "Massage / relaxation area", confidence: 0.82, quality: "High-resolution portrait; treatment table is visible, with limited room context.", alt: "Treatment table prepared in a small relaxation room.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate treatment-room sequence; not selected." },
  { filename: "CYR03753.jpg", subject: "Treatment table and circular mirror", category: "Massage / relaxation area", confidence: 0.82, quality: "High-resolution portrait; table and room detail are visible, but the composition is tightly cropped.", alt: "Treatment table beneath a circular wall mirror.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate treatment-room sequence; not selected." },
  { filename: "CYR03760.jpg", subject: "Treatment table and circular mirror", category: "Massage / relaxation area", confidence: 0.82, quality: "High-resolution portrait; similar treatment-room angle to neighboring frames.", alt: "Treatment table and circular mirror in a quiet room.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate treatment-room sequence; not selected." },
  { filename: "CYR03767.jpg", subject: "Decorative dried flowers in a vase", category: "Interior décor detail", confidence: 0.98, quality: "High-resolution portrait; clear object detail with no hotel-room context.", alt: "Decorative dried flowers arranged in a vase.", selectedFor: [], verificationNeeded: false, disposition: "Do not use alone in the gallery." },
  { filename: "CYR03768.jpg", subject: "Treatment table, cabinet, and furnishings in a small room", category: "Massage / relaxation area", confidence: 0.86, quality: "High-resolution landscape; strongest wider view of the treatment room, with clear furniture and balanced framing.", alt: "A prepared treatment table and furnishings in a quiet hotel room.", selectedFor: ["facilities"], verificationNeeded: true, disposition: "Selected as the relaxation-room image; confirm the room is used for the hotel's massage service." },
  { filename: "CYR03774.jpg", subject: "Wardrobe and partial treatment table", category: "Interior / possible relaxation room", confidence: 0.72, quality: "High-resolution portrait; cropped view, with the room purpose uncertain.", alt: "Wooden wardrobe and part of a prepared table in a room.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; subject is unclear and framing is partial." },
  { filename: "CYR03776.jpg", subject: "Treatment table and mirror in a small room", category: "Massage / relaxation area", confidence: 0.83, quality: "High-resolution portrait; readable room detail but similar to several adjacent frames.", alt: "Treatment table beneath a circular mirror in a small room.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate treatment-room sequence; not selected." },
  { filename: "CYR03784.jpg", subject: "Basket and lower part of a room", category: "Interior detail / uncertain", confidence: 0.65, quality: "High-resolution portrait; floor-level crop with little context.", alt: "Woven basket beside a wall and part of a table.", selectedFor: [], verificationNeeded: true, disposition: "Do not use; subject is uncertain and framing is too tight." },
  { filename: "CYR03797.jpg", subject: "Close view of treatment table and mirror", category: "Massage / relaxation area", confidence: 0.83, quality: "High-resolution landscape; close crop similar to other treatment-room frames.", alt: "Treatment table beneath a circular wall mirror.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate treatment-room sequence; not selected." },
  { filename: "CYR03807.jpg", subject: "Partial view of treatment table and furnishings", category: "Massage / relaxation area", confidence: 0.78, quality: "High-resolution portrait; partially obscured by foreground framing.", alt: "Partial view of a treatment table and furnishings.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate treatment-room sequence; not selected." },
  { filename: "CYR03832.jpg", subject: "Hotel courtyard, guest-room balconies, and landscaped garden", category: "Hotel exterior / gardens", confidence: 0.99, quality: "High-resolution landscape; sharp architecture, balanced greenery, and a strong sense of place; best wide property view.", alt: "Springlands Hotel courtyard with guest-room balconies, tropical planting, and a tiled garden path.", selectedFor: ["hero", "hero-carousel"], verificationNeeded: false, disposition: "Selected as the primary hotel photograph for the homepage hero carousel." },
  { filename: "CYR03851.jpg", subject: "Espresso machine behind a café counter", category: "Café", confidence: 0.96, quality: "High-resolution landscape; recognizable equipment and good detail, though the counter scene is dark.", alt: "Espresso machine and cups behind the hotel café counter.", selectedFor: ["facilities", "hero-carousel"], verificationNeeded: true, disposition: "Selected for the café facility image and homepage hero carousel; confirm this is Springlands Café." },
  { filename: "CYR03854.jpg", subject: "Espresso machine behind a café counter", category: "Café", confidence: 0.96, quality: "High-resolution landscape; very similar equipment view to CYR03851.jpg.", alt: "Espresso machine and cups behind a café counter.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate of CYR03851.jpg; omit." },
  { filename: "CYR03905.jpg", subject: "Garden tables under umbrellas", category: "Outdoor dining / garden seating", confidence: 0.9, quality: "High-resolution landscape; appealing greenery and patio layout, but notably underexposed.", alt: "Garden tables beneath umbrellas in a shaded outdoor seating area.", selectedFor: [], verificationNeeded: true, disposition: "Not selected due to dark exposure; confirm area use if considered later." },
  { filename: "CYR04017.jpg", subject: "Shower fittings on blue-toned tile", category: "Bathroom", confidence: 0.99, quality: "High-resolution landscape; cool color cast and close crop emphasize fixtures.", alt: "Shower fittings against tiled bathroom walls.", selectedFor: [], verificationNeeded: false, disposition: "Do not use as promotional accommodation photography." },
  { filename: "CYR04018.jpg", subject: "Toilet in a tiled bathroom", category: "Bathroom", confidence: 0.99, quality: "High-resolution landscape; clear but not a suitable promotional subject.", alt: "Toilet in a tiled bathroom.", selectedFor: [], verificationNeeded: false, disposition: "Do not use." },
  { filename: "CYR04027.jpg", subject: "Towel rail on tiled bathroom wall", category: "Bathroom detail", confidence: 0.99, quality: "High-resolution landscape; isolated fixture with little room context.", alt: "Towel rail mounted on a tiled bathroom wall.", selectedFor: [], verificationNeeded: false, disposition: "Do not use as a standalone photo." },
  { filename: "CYR04028.jpg", subject: "Bathroom sink and mirror", category: "Bathroom", confidence: 0.98, quality: "High-resolution landscape; fixtures are visible, but the frame is tightly focused on the sink.", alt: "Bathroom sink beneath a round mirror.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; full room views are more useful." },
  { filename: "CYR04032.jpg", subject: "Two separate canopy beds in a decorated bedroom", category: "Accommodation / twin-bed room", confidence: 0.94, quality: "High-resolution portrait; two separate beds are visible, though the narrow portrait framing makes the full room arrangement less prominent in a card.", alt: "Two separate canopy beds in a Springlands Hotel bedroom.", selectedFor: ["rooms", "hero-carousel"], verificationNeeded: true, disposition: "Selected for the twin-bed card and homepage hero carousel because two separate beds are visible; confirm the room's official category." },
  { filename: "CYR04045.jpg", subject: "Folded towel decoration on a bed", category: "Accommodation detail", confidence: 0.95, quality: "High-resolution portrait; decorative detail is clear but not a room view.", alt: "Decorative folded towel and flower arranged on a bed.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; use wider room compositions." },
  { filename: "CYR04054.jpg", subject: "Four separate beds arranged in a bedroom", category: "Accommodation / four-bed room", confidence: 0.97, quality: "High-resolution landscape; wide view with four separate bed frames visible and a clear shared-room arrangement.", alt: "Four separate beds arranged in a Springlands Hotel bedroom.", selectedFor: ["rooms", "hero-carousel"], verificationNeeded: true, disposition: "Selected for the quadruple-room card and hero carousel; confirm the official room category and capacity." },
  { filename: "CYR04057.jpg", subject: "Room arranged with multiple separate beds", category: "Accommodation / multi-bed room", confidence: 0.96, quality: "High-resolution landscape; similar room and composition to CYR04054.jpg.", alt: "Several separate beds arranged in a hotel room.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate multi-bed room sequence; omit." },
  { filename: "CYR04058.jpg", subject: "Room arranged with multiple separate beds", category: "Accommodation / multi-bed room", confidence: 0.96, quality: "High-resolution landscape; similar room and composition to CYR04054.jpg.", alt: "Several separate beds arranged in a hotel room.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate multi-bed room sequence; omit." },
  { filename: "CYR04067.jpg", subject: "Close view of a bed and canopy", category: "Accommodation detail", confidence: 0.92, quality: "High-resolution portrait; soft focus on foreground fabric and limited room context.", alt: "Close view of a bed beneath a canopy.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; framing is too close for a room feature." },
  { filename: "CYR04072.jpg", subject: "Close view of bed linen and pillows", category: "Accommodation detail", confidence: 0.94, quality: "High-resolution landscape; bright bedding but narrow subject and little room context.", alt: "White bed linen and pillows in a hotel bedroom.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; wider bedroom photos are more informative." },
  { filename: "CYR04075.jpg", subject: "Bed and open wardrobe in a bedroom", category: "Accommodation / bedroom", confidence: 0.96, quality: "High-resolution landscape; useful room context, though the bed is partly cut off.", alt: "Hotel bedroom with an open wardrobe beside a bed.", selectedFor: [], verificationNeeded: true, disposition: "Potential accommodation image; no room-category mapping supplied." },
  { filename: "CYR04086.jpg", subject: "Coat hooks and no-smoking sign", category: "Interior signage", confidence: 0.98, quality: "High-resolution landscape; sharp but limited to a wall detail.", alt: "Wall hooks beside a no-smoking sign.", selectedFor: [], verificationNeeded: false, disposition: "Do not use." },
  { filename: "CYR04090.jpg", subject: "Framed wall art and air conditioner", category: "Bedroom interior detail", confidence: 0.92, quality: "High-resolution landscape; wall detail only, with no room context.", alt: "Framed artwork beneath an air-conditioning unit.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; not a representative room view." },
  { filename: "CYR04093.jpg", subject: "Bedside lamp beside a bed", category: "Accommodation detail", confidence: 0.94, quality: "High-resolution landscape; warm light, but only a partial bed view.", alt: "Bedside lamp on a wooden table beside a hotel bed.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; partial room composition." },
  { filename: "CYR04096.jpg", subject: "Bedside table and canopy bed", category: "Accommodation detail", confidence: 0.92, quality: "High-resolution portrait; partly blocked by foreground fabric.", alt: "Bedside lamp and part of a canopy bed.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; foreground obscures the view." },
  { filename: "CYR04102.jpg", subject: "Bathroom sink, mirror, and tiled wall", category: "Bathroom", confidence: 0.98, quality: "High-resolution landscape; balanced fixtures but not a guest-facing hero subject.", alt: "Bathroom sink and mirror against tiled walls.", selectedFor: [], verificationNeeded: false, disposition: "Do not use in promotional photography." },
  { filename: "CYR04114.jpg", subject: "Five separate beds arranged in a shared bedroom", category: "Accommodation / five-bed room", confidence: 0.92, quality: "High-resolution landscape; broad room view with five separate bed frames visible; exact guest capacity and official room category need confirmation.", alt: "Five separate beds arranged in a Springlands Hotel bedroom.", selectedFor: ["gallery", "rooms", "hero-carousel"], verificationNeeded: true, disposition: "Selected for the five-bed-room card and homepage hero carousel based on the five visible separate beds; confirm the official room category and capacity." },
  { filename: "CYR04118.jpg", subject: "Wide bedroom view with multiple separate beds", category: "Accommodation / multi-bed room", confidence: 0.96, quality: "High-resolution landscape; similar beds and lighting to CYR04114.jpg.", alt: "Several separate beds arranged in a hotel room.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate room sequence; omit." },
  { filename: "CYR04136.jpg", subject: "Multiple beds and folded towels", category: "Accommodation / multi-bed room", confidence: 0.96, quality: "High-resolution landscape; useful room detail but similar sequence and tighter framing.", alt: "Hotel beds arranged with folded towel decorations.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate room sequence; omit." },
  { filename: "CYR04137.jpg", subject: "Beds and canopy frames in a bedroom", category: "Accommodation / multi-bed room", confidence: 0.96, quality: "High-resolution landscape; clear bedding but closely related to CYR04114.jpg.", alt: "Beds and canopy frames in a hotel bedroom.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate room sequence; omit." },
  { filename: "CYR04143.jpg", subject: "Small sofa and sitting area", category: "Hotel interior / sitting area", confidence: 0.94, quality: "High-resolution portrait; clear furnishings and a useful alternate interior subject.", alt: "Small sofa and sitting area inside the hotel.", selectedFor: ["gallery"], verificationNeeded: false, disposition: "Selected for the gallery." },
  { filename: "CYR04157.jpg", subject: "Bedroom viewed through hanging canopy fabric", category: "Accommodation detail", confidence: 0.93, quality: "High-resolution landscape; partial view obscured by fabric and similar to adjacent frames.", alt: "Hotel beds partly viewed through hanging canopy fabric.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate, partially obscured room sequence; omit." },
  { filename: "CYR04158.jpg", subject: "Bedroom viewed through hanging canopy fabric", category: "Accommodation detail", confidence: 0.93, quality: "High-resolution landscape; nearly the same obstructed viewpoint as CYR04157.jpg.", alt: "Hotel beds partly viewed through hanging canopy fabric.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate, partially obscured room sequence; omit." },
  { filename: "CYR04167.jpg", subject: "Bathroom accessory bin and brush", category: "Bathroom detail", confidence: 0.98, quality: "High-resolution landscape; isolated utility detail.", alt: "Bathroom bin and toilet brush against a tiled wall.", selectedFor: [], verificationNeeded: false, disposition: "Do not use." },
  { filename: "CYR04188.jpg", subject: "Double bed in a bright bedroom", category: "Accommodation / bedroom", confidence: 0.94, quality: "High-resolution landscape; attractive bed view but similar to several photos from the same room set.", alt: "Double bed with white linens in a bright hotel bedroom.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; CYR04194.jpg provides a clearer room composition." },
  { filename: "CYR04190.jpg", subject: "Close view of bed frame and pillows", category: "Accommodation detail", confidence: 0.92, quality: "High-resolution landscape; bright but tightly framed.", alt: "Pillows and bed frame in a hotel bedroom.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; detail-only view." },
  { filename: "CYR04191.jpg", subject: "Flower arrangement on a bedside table", category: "Accommodation detail", confidence: 0.95, quality: "High-resolution landscape; sharp detail with a softly lit bedroom background.", alt: "Flowers on a bedside table beside a hotel bed.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; room context is secondary." },
  { filename: "CYR04194.jpg", subject: "One large bed in a bright bedroom", category: "Accommodation / single-bed room", confidence: 0.97, quality: "High-resolution landscape; clean, well-lit composition with one large bed clearly visible; guest capacity and room category are not identified.", alt: "One large bed in a bright Springlands Hotel bedroom.", selectedFor: ["gallery", "rooms", "hero-carousel"], verificationNeeded: true, disposition: "Selected for the single-room card and homepage hero carousel because one large bed is visible. It is not used as a Jacuzzi-room photo or fallback." },
  { filename: "CYR04197.jpg", subject: "Close bedroom view framed by curtains", category: "Accommodation detail", confidence: 0.9, quality: "High-resolution landscape; warm light, but foreground curtain obscures part of the bed.", alt: "Hotel bed partly framed by a curtain.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; partially obscured." },
  { filename: "CYR04215.jpg", subject: "Toilet in a tiled bathroom", category: "Bathroom", confidence: 0.99, quality: "High-resolution portrait; clear but unsuitable as promotional photography.", alt: "Toilet in a tiled bathroom.", selectedFor: [], verificationNeeded: false, disposition: "Do not use." },
  { filename: "CYR04220.jpg", subject: "Bed and canopy details", category: "Accommodation detail", confidence: 0.94, quality: "High-resolution landscape; close crop similar to other bedroom images.", alt: "White bed linen beneath a canopy in a hotel bedroom.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate accommodation series; omit." },
  { filename: "CYR04228.jpg", subject: "Canopy bed in warm bedroom lighting", category: "Accommodation / bedroom", confidence: 0.95, quality: "High-resolution portrait; warm and clear, but bed type and category are unknown.", alt: "Canopy bed in a warmly lit hotel bedroom; room category is not confirmed.", selectedFor: [], verificationNeeded: true, disposition: "Potential accommodation image; no category mapping supplied." },
  { filename: "CYR04232.jpg", subject: "Partial bedroom view with bed and canopy", category: "Accommodation detail", confidence: 0.92, quality: "High-resolution portrait; narrow, partly obstructed, and similar to the nearby bedroom series.", alt: "Partial view of a hotel bed and canopy.", selectedFor: [], verificationNeeded: true, disposition: "Near-duplicate accommodation series; omit." },
  { filename: "CYR04237.jpg", subject: "Several beds in warm bedroom lighting", category: "Accommodation / multi-bed room", confidence: 0.94, quality: "High-resolution landscape; warm light and multiple beds, but exact room type and capacity are unconfirmed.", alt: "Several beds in a warmly lit hotel bedroom; room category and capacity are not confirmed.", selectedFor: [], verificationNeeded: true, disposition: "Potential gallery candidate, not selected because CYR04114.jpg is clearer." },
  { filename: "IMG_3303.jpg", subject: "Hotel courtyard path, building, and tropical planting", category: "Hotel exterior / gardens", confidence: 0.99, quality: "4,032×3,024 landscape; bright, sharp and balanced, with the garden path leading toward the hotel.", alt: "Courtyard path surrounded by tropical plants at Springlands Hotel.", selectedFor: ["about"], verificationNeeded: false, disposition: "Selected for the About section." },
  { filename: "IMG_3305.jpg", subject: "Hotel veranda and planted walkway", category: "Hotel exterior / gardens", confidence: 0.96, quality: "3,024×3,583 portrait; clear, but narrow framing and similar courtyard subject to IMG_3303.jpg.", alt: "Hotel veranda and walkway bordered by tropical planting.", selectedFor: [], verificationNeeded: false, disposition: "Not selected; IMG_3303.jpg shows the property more clearly." },
  { filename: "IMG_3316.jpg", subject: "Garden pavilion and landscaped courtyard", category: "Tropical gardens / outdoor relaxation", confidence: 0.98, quality: "3,024×4,032 portrait; recognizable pavilion and garden, with a slight wide-angle look.", alt: "Pavilion surrounded by a landscaped garden at Springlands Hotel.", selectedFor: ["gallery", "hero-carousel"], verificationNeeded: false, disposition: "Selected for the gallery and homepage hero carousel; crop is adjusted responsively." },
  { filename: "IMG_3516.jpg", subject: "Outdoor swimming pool with hotel building and loungers", category: "Swimming pool", confidence: 0.99, quality: "8,064×5,759 landscape; high detail and clear pool context; overcast sky and elevated angle are visible.", alt: "Outdoor swimming pool, loungers, and hotel building at Springlands Hotel.", selectedFor: ["facilities", "hero-carousel"], verificationNeeded: false, disposition: "Selected for the swimming-pool feature and homepage hero carousel." },
  { filename: "mount-kilimanjaro.jpg", subject: "Mount Kilimanjaro above clouds at sunset", category: "Surrounding attraction / Mount Kilimanjaro", confidence: 0.98, quality: "2,000×1,640 landscape; atmospheric and recognizable, but lower resolution and darker foreground than the hotel photographs.", alt: "Mount Kilimanjaro rising above clouds in warm evening light.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; the newer 7.png mountain photograph has a brighter, clearer summit view." },
  { filename: "1.png", subject: "Tall waterfall in a forested setting", category: "Surrounding attraction / waterfall", confidence: 0.98, quality: "2,160×2,160 square; visually striking cascade, leafy context, and a person for scale; moving water is naturally soft.", alt: "A tall waterfall cascading through dense green forest, with a visitor standing nearby.", selectedFor: ["experiences"], verificationNeeded: true, disposition: "Selected for Materuni Waterfalls; confirm the waterfall location and image rights." },
  { filename: "2.png", subject: "Waterfall plunging into a pool with swimmers", category: "Surrounding attraction / waterfall", confidence: 0.98, quality: "2,160×2,160 square; clear waterfall-and-swimming scene, but appears to be a similar waterfall subject to 1.png.", alt: "A waterfall flowing into a natural swimming pool.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; similar waterfall subject to 1.png. Confirm location if retained for later." },
  { filename: "3.png", subject: "Clear turquoise natural pool beneath tropical trees", category: "Surrounding attraction / natural spring", confidence: 0.98, quality: "2,160×2,160 square; distinctive blue water and shaded vegetation; some bright highlights are clipped.", alt: "A clear turquoise natural pool shaded by tropical trees.", selectedFor: ["experiences"], verificationNeeded: true, disposition: "Selected for Chemka Hot Springs; confirm that the photographed spring is Chemka." },
  { filename: "4.png", subject: "Turquoise natural pool with a swimmer", category: "Surrounding attraction / natural spring", confidence: 0.98, quality: "2,160×2,160 square; swimmers add context, but the highlights are overexposed and the scene resembles 3.png.", alt: "A swimmer in a bright turquoise natural pool surrounded by trees.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; highlight clipping and similar natural-pool view to 3.png." },
  { filename: "5.png", subject: "Woodland walking path through a leafy forest", category: "Surrounding attraction / forest", confidence: 0.94, quality: "2,160×2,160 square; strong path-leading composition and good natural detail; highlights are bright.", alt: "A walking path winding between trees in a leafy forest.", selectedFor: ["experiences"], verificationNeeded: true, disposition: "Selected for Rau Forest; confirm that the photographed forest is Rau." },
  { filename: "6.png", subject: "Forest trail with visitors walking among dense greenery", category: "Surrounding attraction / forest", confidence: 0.95, quality: "2,160×2,160 square; readable trail and people for scale; shaded foreground is slightly dark.", alt: "Visitors walking along a shaded trail through dense forest.", selectedFor: [], verificationNeeded: true, disposition: "Not selected; forest alternative to 5.png, with darker exposure." },
  { filename: "7.png", subject: "Mount Kilimanjaro summit above foreground trees", category: "Surrounding attraction / Mount Kilimanjaro", confidence: 0.99, quality: "2,160×2,160 square; recognizable snow-covered summit and good subject separation; atmospheric softness is visible.", alt: "Mount Kilimanjaro rising above clouds and dark foreground trees.", selectedFor: ["experiences"], verificationNeeded: true, disposition: "Selected for the Mount Kilimanjaro card; confirm image provenance and rights." },
  { filename: "8.png", subject: "People in traditional red-patterned clothing joining hands", category: "Culture / people", confidence: 0.9, quality: "2,160×2,160 file but visibly soft and pixelated; edge detail appears limited.", alt: "People in red patterned clothing joining their hands in a circle.", selectedFor: [], verificationNeeded: true, disposition: "Do not use prominently; the image appears blurred or enlarged despite its pixel dimensions. Request the original camera file." },
  { filename: "9.png", subject: "Visitors viewing carved objects at a craft display", category: "Culture / craft display", confidence: 0.94, quality: "2,160×2,160 square; clear people and craft display with a natural indoor light; exact location and cultural context are not identifiable.", alt: "Visitors browsing carved objects at a craft display.", selectedFor: ["experiences"], verificationNeeded: true, disposition: "Selected for the Moshi culture card; confirm the cultural context and location before publication." },
  { filename: "10.png", subject: "Hands preparing a ground ingredient over a metal bowl", category: "Culture / food preparation detail", confidence: 0.78, quality: "2,160×2,160 square; close-up is sharply detailed, but the ingredient, activity, and location are uncertain.", alt: "Hands lifting a ground ingredient above a metal bowl during food preparation.", selectedFor: ["gallery"], verificationNeeded: true, disposition: "Selected for the gallery as a general cultural detail; verify what is being prepared and where." },
  { filename: "WhatsApp Image 2026-04-29 at 3.18.06 PM.jpg", subject: "Safari vehicle crossing a rocky stream", category: "Wildlife safari / game-drive vehicle", confidence: 0.99, quality: "1,024×683 landscape; vehicle and stream are clearly readable at card size; foreground rocks and muted light reduce visual impact.", alt: "A safari vehicle crossing a shallow rocky stream in a dry woodland setting.", selectedFor: ["gallery"], verificationNeeded: false, disposition: "Selected for the gallery; the client confirms Zara Tanzania Adventures safari vehicles are approved for use." },
  { filename: "WhatsApp Image 2026-04-29 at 3.18.06 PM (1).jpg", subject: "Three safari vehicles parked on a dry savanna track", category: "Wildlife safari / game-drive vehicles", confidence: 0.99, quality: "1,024×683 landscape; vehicles are recognizable and the scene is evenly exposed; large pale sky area and limited subject variety make it secondary gallery content.", alt: "Three safari vehicles parked together on an open dry savanna track.", selectedFor: ["gallery"], verificationNeeded: false, disposition: "Selected for the gallery; the client confirms Zara Tanzania Adventures safari vehicles are approved for use." },
  { filename: "WhatsApp Image 2026-04-29 at 3.18.06 PM (2).jpg", subject: "Lion partly visible in grass beside safari vehicles", category: "Wildlife safari / lion game drive", confidence: 0.94, quality: "1,024×683 landscape; the lion and safari vehicle establish a genuine game-drive scene, though the animal is partly obscured and shadow detail is soft.", alt: "A lion partly visible in grass beside safari vehicles on a game drive.", selectedFor: ["experiences", "gallery"], verificationNeeded: false, disposition: "Selected for the Wildlife Safari experience and gallery; the client confirms Zara Tanzania Adventures safari vehicles are approved for use." },
];

const responsiveWidths = [640, 1200, 1920];
const getResponsiveWidths = (sourceWidth) => {
  const widths = responsiveWidths.filter((width) => width < sourceWidth);
  if (sourceWidth <= responsiveWidths.at(-1)) widths.push(sourceWidth);
  return widths;
};
const originalDimensions = {
  "CYR03366.jpg": [4672, 7008],
  "CYR03490.jpg": [4672, 7008],
  "CYR03511.jpg": [4672, 7008],
  "CYR03525.jpg": [4672, 7008],
  "CYR03643.jpg": [4672, 7008],
  "CYR03661.jpg": [7008, 4672],
  "CYR04032.jpg": [4672, 7008],
  "CYR03768.jpg": [7008, 4672],
  "CYR03832.jpg": [7008, 4672],
  "CYR03851.jpg": [6823, 4549],
  "CYR04054.jpg": [7008, 4672],
  "CYR04114.jpg": [7008, 4672],
  "CYR04114.jpg": [7008, 4672],
  "CYR04143.jpg": [4672, 7008],
  "CYR04194.jpg": [7008, 4672],
  "IMG_3303.jpg": [4032, 3024],
  "IMG_3316.jpg": [3024, 4032],
  "IMG_3516.jpg": [8064, 5759],
  "mount-kilimanjaro.jpg": [2000, 1640],
  "1.png": [2160, 2160],
  "2.png": [2160, 2160],
  "3.png": [2160, 2160],
  "4.png": [2160, 2160],
  "5.png": [2160, 2160],
  "6.png": [2160, 2160],
  "7.png": [2160, 2160],
  "8.png": [2160, 2160],
  "9.png": [2160, 2160],
  "10.png": [2160, 2160],
  "WhatsApp Image 2026-04-29 at 3.18.06 PM.jpg": [1024, 683],
  "WhatsApp Image 2026-04-29 at 3.18.06 PM (1).jpg": [1024, 683],
  "WhatsApp Image 2026-04-29 at 3.18.06 PM (2).jpg": [1024, 683],
};

const imageEnhancement =
  "EXIF orientation normalized, resized for responsive display, lightly edge-sharpened, and converted to WebP at quality 84; no AI upscaling, deblurring, denoising, exposure correction, or white-balance changes.";

export const imageManifest = audit.map((entry) => {
  const originalPath = `client-content/images/${entry.filename}`;
  const basename = entry.filename.replace(/\.[^.]+$/, "");
  const encodedBasename = encodeURIComponent(basename);
  const qualityNeedsReview =
    /blur|pixelat|overexpos|clipped|soft|dark|underlit|underexpos|cropped|limited width|low resolution|partly|partial|busy|uncertain/i.test(entry.quality);
  const requiresReplacement = /blur|pixelat/i.test(entry.quality);
  const qualityStatus = requiresReplacement
    ? "Requires AI upscaling or replacement"
    : qualityNeedsReview
      ? "Needs manual review"
      : entry.quality.includes("clear") || entry.quality.includes("sharp") || entry.quality.includes("crisp")
        ? "Suitable after standard enhancement"
        : "Ready for production";

  if (entry.selectedFor.length === 0) {
    return {
      ...entry,
      originalPath,
      originalDimensions: originalDimensions[entry.filename]
        ? { width: originalDimensions[entry.filename][0], height: originalDimensions[entry.filename][1] }
        : null,
      qualityStatus,
      enhancementPerformed: "Original preserved; no optimized derivative generated.",
      optimizedOutput: null,
      optimizedOutputs: [],
      src: null,
      srcSet: null,
    };
  }

  const dimensions = originalDimensions[entry.filename];
  const optimizedWidths = dimensions
    ? getResponsiveWidths(dimensions[0])
    : responsiveWidths;
  const largestOptimizedWidth = optimizedWidths.at(-1);
  return {
    ...entry,
    originalPath,
    originalDimensions: dimensions ? { width: dimensions[0], height: dimensions[1] } : null,
    qualityStatus,
    enhancementPerformed: imageEnhancement,
    optimizedOutput: `public/images/optimized/${basename}-${largestOptimizedWidth}.webp`,
    optimizedOutputs: optimizedWidths.map(
      (width) => `public/images/optimized/${basename}-${width}.webp`,
    ),
    src: `/images/optimized/${encodedBasename}-${largestOptimizedWidth}.webp`,
    srcSet: optimizedWidths
      .map((width) => `/images/optimized/${encodedBasename}-${width}.webp ${width}w`)
      .join(", "),
    sizes: "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw",
  };
});

export const imageAuditSummary = {
  filesFound: imageManifest.length,
  filesVisuallyReviewed: imageManifest.length,
  reviewMethod:
    "The original 87 files were reviewed in labeled contact sheets; the three newly added safari photographs were individually inspected at full size.",
  limitation:
    "Full-resolution, pixel-level sharpness and noise assessment was not possible for every original because several exceed the viewer's 10 MB limit.",
  exactDuplicates: 0,
  selectionCount: imageManifest.filter((image) => image.selectedFor.length > 0).length,
};

export function getImageByFilename(filename) {
  return imageManifest.find((image) => image.filename === filename);
}

export const imageSelectionPlan = {
  hero: "CYR03832.jpg",
  heroSlides: [
    { filename: "CYR03832.jpg", caption: "Springlands Hotel · Courtyard and gardens" },
    { filename: "IMG_3516.jpg", caption: "Springlands Hotel · Outdoor swimming pool" },
    { filename: "IMG_3316.jpg", caption: "Springlands Hotel · Garden pavilion" },
    { filename: "CYR03643.jpg", caption: "Springlands Hotel · Shaded garden seating" },
    { filename: "CYR03851.jpg", caption: "Springlands Hotel · Café counter" },
    { filename: "CYR04194.jpg", caption: "Springlands Hotel · Single-bed room" },
    { filename: "CYR04032.jpg", caption: "Springlands Hotel · Twin-bed room" },
    { filename: "CYR04054.jpg", caption: "Springlands Hotel · Quadruple room" },
    { filename: "CYR04114.jpg", caption: "Springlands Hotel · Five-bed room" },
  ],
  about: "IMG_3303.jpg",
  roomOverview: "CYR04054.jpg",
  roomCategoryPhotos: {
    single: "CYR04194.jpg",
    twin: "CYR04032.jpg",
    quadruple: "CYR04054.jpg",
    fiveBed: "CYR04114.jpg",
    privateJacuzzi: null,
  },
  roomCategoryPhotoNotes: {
    single: "One large bed is visible; confirm room category and single-guest suitability.",
    twin: "Two separate beds are visible; confirm this is the hotel's twin-bed category.",
    quadruple: "Four separate beds are visible; confirm room category and guest capacity.",
    fiveBed: "Five separate beds are visible; confirm room category and guest capacity.",
    privateJacuzzi: "No supplied photograph visibly confirms the private Jacuzzi.",
  },
  facilities: {
    swimmingPool: "IMG_3516.jpg",
    gardens: "CYR03643.jpg",
    cafe: "CYR03851.jpg",
    relaxation: "CYR03768.jpg",
  },
  experiences: {
    mountKilimanjaro: "7.png",
    materuniWaterfalls: "1.png",
    chemkaHotSprings: "3.png",
    rauForest: "5.png",
    wildlifeSafaris: "WhatsApp Image 2026-04-29 at 3.18.06 PM (2).jpg",
    moshiCulture: "9.png",
  },
  gallery: [
    "CYR03366.jpg",
    "CYR03490.jpg",
    "CYR03511.jpg",
    "CYR03525.jpg",
    "CYR03661.jpg",
    "CYR04114.jpg",
    "CYR04143.jpg",
    "CYR04194.jpg",
    "IMG_3316.jpg",
    "10.png",
    "7.png",
    "1.png",
    "3.png",
    "5.png",
    "9.png",
    "WhatsApp Image 2026-04-29 at 3.18.06 PM.jpg",
    "WhatsApp Image 2026-04-29 at 3.18.06 PM (1).jpg",
    "WhatsApp Image 2026-04-29 at 3.18.06 PM (2).jpg",
  ],
  excludedGroups: [
    "CYR03525.jpg and CYR03526.jpg are near-identical coffee photographs; retain only CYR03525.jpg.",
    "CYR03851.jpg and CYR03854.jpg show near-identical café equipment; retain only CYR03851.jpg.",
    "CYR03751.jpg through CYR03807.jpg include repeated views of the same apparent treatment room; retain only the clearest wide frame, CYR03768.jpg.",
    "CYR04054.jpg through CYR04072.jpg and CYR04114.jpg through CYR04237.jpg contain repeated bedroom angles; select only distinct, better-composed frames.",
    "No byte-identical duplicates were found by SHA-256.",
  ],
  gaps: [
    "Bedroom photographs visually match one large bed, two separate beds, four separate beds, and five separate beds; confirm these are the current hotel categories and their guest capacities.",
    "No photograph visibly confirms the private Jacuzzi; the website uses a branded non-photographic card fallback. Provide an authentic current photo of the special room and private Jacuzzi.",
    "No clearly identifiable restaurant interior, reception, or parking photograph.",
    "The three supplied safari photographs show game-drive vehicles, and one includes a partly obscured lion. The client confirms Zara Tanzania Adventures safari vehicles are approved for use on this site.",
    "Confirm that 1.png depicts Materuni Waterfalls, 3.png depicts Chemka Hot Springs, 5.png depicts Rau Forest, and 9.png depicts a cultural attraction around Moshi.",
    "Image 8.png appears soft and pixelated and should be replaced with the original camera file; AI recovery is not available in this workflow.",
    "Image 10.png's subject appears to be food or ingredient preparation, but the ingredient, location, and cultural context are unverified.",
    "Confirm that patio and café images depict the stated hotel areas and confirm the source/rights for mount-kilimanjaro.jpg.",
  ],
};

export const roomPhotoAssignments = {
  "Single Room": {
    filename: "CYR04194.jpg",
    visibleBedCount: 1,
    confidence: 0.84,
    note: "One large bed is visible. Confirm the single-room category and single-guest suitability with the hotel.",
  },
  "Double Room · Twin Beds": {
    filename: "CYR04032.jpg",
    visibleBedCount: 2,
    confidence: 0.9,
    note: "Two separate beds are visible. Confirm this is the hotel's twin-bed category.",
  },
  "Quadruple Room": {
    filename: "CYR04054.jpg",
    visibleBedCount: 4,
    confidence: 0.94,
    note: "Four separate beds are visible. Confirm the room category and guest capacity with the hotel.",
  },
  "Five-Bed Room": {
    filename: "CYR04114.jpg",
    visibleBedCount: 5,
    confidence: 0.88,
    note: "Five separate beds are visible. Confirm the room category and guest capacity with the hotel.",
  },
  "Special Room · Private Jacuzzi": {
    filename: null,
    visibleBedCount: null,
    confidence: 0,
    note: "No supplied photograph shows or verifies a private Jacuzzi. The website uses a branded non-photographic fallback until an authentic image is supplied.",
  },
};

export const roomImages = Object.fromEntries(
  Object.entries(roomPhotoAssignments).map(([roomName, assignment]) => [
    roomName,
    {
      ...assignment,
      image: assignment.filename ? getImageByFilename(assignment.filename) : null,
    },
  ]),
);

export const galleryImages = imageSelectionPlan.gallery
  .map(getImageByFilename)
  .filter(Boolean);

export const facilityImages = [
  { filename: "IMG_3516.jpg", title: "Swimming pool", alt: "Outdoor swimming pool with loungers and the hotel building." },
  { filename: "CYR03643.jpg", title: "Garden seating", alt: "Outdoor table and chairs among tropical plants." },
  { filename: "CYR03511.jpg", title: "Covered garden patio", alt: "Outdoor table and chairs under a covered patio surrounded by tropical greenery." },
  { filename: "CYR03851.jpg", title: "Café", alt: "Espresso machine and cups behind a café counter." },
  { filename: "CYR03768.jpg", title: "Relaxation room", alt: "A prepared treatment table and furnishings in a quiet room." },
].map(({ filename, ...details }) => ({
  ...getImageByFilename(filename),
  ...details,
}));

export const heroSlides = imageSelectionPlan.heroSlides
  .map(({ filename, caption }) => ({ image: getImageByFilename(filename), caption }))
  .filter((slide) => slide.image);
export const heroImage = getImageByFilename(imageSelectionPlan.hero);
export const aboutImage = getImageByFilename(imageSelectionPlan.about);
export const roomOverviewImage = getImageByFilename(imageSelectionPlan.roomOverview);
export const kilimanjaroImage = getImageByFilename(imageSelectionPlan.experiences.mountKilimanjaro);
export const attractionImages = {
  "Mount Kilimanjaro": getImageByFilename(imageSelectionPlan.experiences.mountKilimanjaro),
  "Materuni Waterfalls": getImageByFilename(imageSelectionPlan.experiences.materuniWaterfalls),
  "Chemka Hot Springs": getImageByFilename(imageSelectionPlan.experiences.chemkaHotSprings),
  "Rau Forest": getImageByFilename(imageSelectionPlan.experiences.rauForest),
  "Wildlife Safari": getImageByFilename(imageSelectionPlan.experiences.wildlifeSafaris),
  "Moshi Culture": getImageByFilename(imageSelectionPlan.experiences.moshiCulture),
};
