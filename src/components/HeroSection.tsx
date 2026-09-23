import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Ultra-fluid Entrance Timeline with hardware acceleration (GPU composited)
      const tl = gsap.timeline({
        defaults: { ease: 'expo.out' },
        onComplete: () => {
          // Clean up inline styles once finished so elements remain permanently visible
          gsap.set(
            [
              titleRef.current,
              subtitleRef.current,
              descRef.current,
              ...(buttonsRef.current ? Array.from(buttonsRef.current.children) : [])
            ],
            { clearProps: 'opacity,transform,filter' }
          );
        }
      });

      // Main headline
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 26, force3D: true },
          { opacity: 1, y: 0, duration: 1.15, ease: 'expo.out' }
        );
      }

      // "Tranquilo, estamos aquí" subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 18, force3D: true },
          { opacity: 1, y: 0, duration: 1.05, ease: 'expo.out' },
          '-=0.95'
        );
      }

      // Subtitle description text
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 14, force3D: true },
          { opacity: 1, y: 0, duration: 0.95, ease: 'expo.out' },
          '-=0.9'
        );
      }

      // Action buttons with fluid staggered wave
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 16, scale: 0.96, force3D: true },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            stagger: 0.08,
            ease: 'expo.out'
          },
          '-=0.85'
        );
      }

      // Hero Image Frame & Photo
      if (imageWrapperRef.current && imageRef.current) {
        tl.fromTo(
          imageWrapperRef.current,
          { opacity: 0, y: 28, scale: 0.97, force3D: true },
          { opacity: 1, y: 0, scale: 1, duration: 1.25, ease: 'expo.out' },
          '-=0.9'
        );

        tl.fromTo(
          imageRef.current,
          { scale: 1.08, force3D: true },
          { scale: 1.02, duration: 1.7, ease: 'expo.out' },
          '-=1.25'
        );
      }

      // Fluid Parallax depth on Hero Image when scrolling down
      if (imageWrapperRef.current && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 8,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: imageWrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Butter-smooth 3D tilt tracking with overwrite: 'auto'
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(imageWrapperRef.current, {
      rotateY: x * 5,
      rotateX: -y * 5,
      scale: 1.012,
      transformPerspective: 1000,
      duration: 0.35,
      ease: 'power1.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    if (!imageWrapperRef.current) return;
    gsap.to(imageWrapperRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.65,
      ease: 'expo.out',
      overwrite: 'auto'
    });
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="pt-14 sm:pt-20 md:pt-24 text-center"
      data-purpose="hero-section"
    >
      {/* Main Editorial Headline */}
      <h1
        ref={titleRef}
        className="serif-display text-5xl sm:text-[52px] md:text-6xl leading-[1.1] font-medium text-bark-900 mb-3"
      >
        ¿Te has quedado <br />
        <span className="italic font-normal">fuera de casa?</span>
      </h1>

      <p ref={subtitleRef} className="font-serif text-2xl sm:text-3xl italic text-bark-700 mb-4">
        Tranquilo, estamos aquí.
      </p>

      {/* Subtitle description */}
      <p
        ref={descRef}
        className="text-sm leading-relaxed text-bark-600 px-2 font-normal mb-7 max-w-md mx-auto"
      >
        Llegamos en 20 minutos con presupuesto telefónico cerrado y apertura limpia sin romper tu puerta.
      </p>

      {/* Immediate Action Buttons */}
      <div
        ref={buttonsRef}
        className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-8"
      >
        <a
          className="w-full max-w-[280px] sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-4 sm:py-[18px] rounded-full bg-bark-800 text-linen-50 text-lg sm:text-xl font-bold tracking-wide shadow-lg hover:bg-bark-900 active:scale-[0.98] transition-all gap-3 whitespace-nowrap"
          href={siteConfig.phoneHref}
          style={{ backgroundColor: 'rgb(46, 21, 16)', color: 'rgb(255, 255, 255)' }}
        >
          <svg
            className="w-6 h-6 text-linen-200 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Llamar Urgencias 24h
        </a>

        <a
          className="w-full max-w-[280px] sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-linen-50 border border-linen-300 text-bark-800 text-base sm:text-lg font-semibold tracking-wide hover:bg-white active:scale-[0.98] transition-all gap-2.5 shadow-sm"
          href={siteConfig.whatsappHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className="w-5 h-5 text-bark-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
          WhatsApp Directo
        </a>
      </div>

      {/* Hero Warm Photography with 3D Tilt and Scroll Parallax */}
      <div
        ref={imageWrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-3xl bg-linen-200 aspect-[4/3] shadow-sm border border-linen-300/40 max-w-lg mx-auto cursor-pointer transition-shadow duration-300 hover:shadow-warm-lg will-change-transform"
      >
        <img
          ref={imageRef}
          alt="Llave atascada en cerradura de puerta - Cerrajeros de urgencia 24 horas"
          className="w-full h-[115%] object-cover object-center -mt-[5%] will-change-transform"
          loading="eager"
          src={siteConfig.heroImage}
        />
      </div>
    </section>
  );
};
