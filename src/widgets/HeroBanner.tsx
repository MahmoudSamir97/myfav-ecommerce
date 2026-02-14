interface HeroImageProps {
  alt: string;
  className?: string;
}

export const HeroBanner = ({ alt, className = '' }: HeroImageProps) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <picture>
        {/* 1. Modern Format (AVIF) - Smallest File Size */}
        <source
          srcSet="/images/hero-desktop.avif 1x, /images/hero-desktop@2x.avif 2x"
          media="(min-width: 1024px)"
          type="image/avif"
        />
        <source
          srcSet="/images/hero-mobile.avif 1x, /images/hero-mobile@2x.avif 2x"
          media="(max-width: 1023px)"
          type="image/avif"
        />

        {/* 2. Standard Modern Format (WebP) */}
        <source
          srcSet="/images/hero-desktop.webp 1x, /images/hero-desktop@2x.webp 2x"
          media="(min-width: 1024px)"
          type="image/webp"
        />

        {/* 3. Fallback Image + Performance Props */}
        <img
          src="/images/hero-desktop.jpg"
          alt={alt}
          // fetchpriority="high" tells the browser to download this IMMEDIATELY
          fetchPriority="high"
          // loading="eager" ensures it doesn't wait for lazy-load triggers
          loading="eager"
          // decoding="sync" ensures the image is decoded along with other content
          decoding="sync"
          className="w-full h-auto object-cover aspect-video lg:aspect-21/9"
        />
      </picture>
    </section>
  );
};
