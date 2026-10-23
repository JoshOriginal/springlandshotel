import {
  aboutImage,
  attractionImages,
  facilityImages,
  galleryImages,
  roomOverviewImage,
} from "../data/imageManifest.js";

const bannerImages = {
  about: aboutImage,
  rooms: roomOverviewImage,
  facilities: facilityImages[0],
  experiences: attractionImages["Mount Kilimanjaro"],
  gallery: galleryImages[0],
  contact: facilityImages[1],
};

export default function PageBanner({ heading, imageKey }) {
  const image = bannerImages[imageKey];

  return (
    <section className="page-banner" aria-label={heading}>
      {image && (
        <img
          className="page-banner-image"
          src={image.src}
          srcSet={image.srcSet}
          sizes="100vw"
          width={image.originalDimensions.width}
          height={image.originalDimensions.height}
          alt=""
          fetchPriority="high"
        />
      )}
      <div className="page-banner-shade" />
      <h1>{heading}</h1>
    </section>
  );
}
