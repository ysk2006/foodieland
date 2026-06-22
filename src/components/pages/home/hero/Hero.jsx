import React from "react";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

import DefaultBanner from "@/components/ui/banners/DefaultBanner";
import { defaultBanners } from "@/context/banners";

import styles from "./Hero.module.scss";

const AUTOPLAY_DELAY = 5000;
const SLIDE_WIDTH = 1280;
const SLIDE_GAP = 24;

function createInfiniteSlides(items) {
  if (items.length === 0) return [];
  return [items[items.length - 1], ...items, items[0]];
}

const MemoizedBanner = React.memo(DefaultBanner);

function Hero() {
  const slides = useMemo(() => createInfiniteSlides(defaultBanners), []);
  const [slideIndex, setSlideIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  const autoplayRef = useRef(null);
  const transitionRef = useRef(false);
  const slidesLengthRef = useRef(slides.length);

  useEffect(() => {
    slidesLengthRef.current = slides.length;
  }, [slides.length]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === "visible";
      setIsPageVisible(isVisible);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }

    if (!isPageVisible || isHovering) {
      return;
    }

    autoplayRef.current = setInterval(() => {
      setSlideIndex((prevIndex) => {
        let nextIndex = prevIndex + 1;
        if (nextIndex >= slidesLengthRef.current - 1) {
          return slidesLengthRef.current - 1;
        }
        return nextIndex;
      });
    }, AUTOPLAY_DELAY);
  }, [isPageVisible, isHovering]);

  const goNext = useCallback(() => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    setEnableTransition(true);
    setSlideIndex((prevIndex) => prevIndex + 1);
    resetAutoplay();
  }, [resetAutoplay]);

  const goPrev = useCallback(() => {
    if (transitionRef.current) return;
    transitionRef.current = true;
    setEnableTransition(true);
    setSlideIndex((prevIndex) => prevIndex - 1);
    resetAutoplay();
  }, [resetAutoplay]);

  const handleTransitionEnd = useCallback(() => {
    transitionRef.current = false;

    const resetTransition = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    };

    if (slideIndex === slides.length - 1) {
      setEnableTransition(false);
      setSlideIndex(1);
      resetTransition();
    } else if (slideIndex === 0) {
      setEnableTransition(false);
      setSlideIndex(slides.length - 2);
      resetTransition();
    }
  }, [slideIndex, slides.length]);

  useEffect(() => {
    if (!isPageVisible || isHovering) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    } else {
      resetAutoplay();
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [isPageVisible, isHovering, resetAutoplay]);

  const trackStyle = {
    transform: `translateX(calc(-${slideIndex} * (${SLIDE_WIDTH}px + ${SLIDE_GAP}px)))`,
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        <div className={clsx(styles.hoverZone, styles.hoverZoneLeft)}>
          <button
            type="button"
            className={styles.navButton}
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div
          className={styles.viewport}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className={clsx(
              styles.track,
              !enableTransition && styles.noTransition,
            )}
            style={trackStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((banner, index) => (
              <div
                key={`${banner.id}-${index}`}
                className={clsx(
                  styles.slide,
                  index === slideIndex && styles.slideActive,
                )}
              >
                <div className={styles.slideOverlay} />
                <MemoizedBanner {...banner} isActive={index === slideIndex} />
              </div>
            ))}
          </div>
        </div>
        <div className={clsx(styles.hoverZone, styles.hoverZoneRight)}>
          <button
            type="button"
            className={styles.navButton}
            onClick={goNext}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
