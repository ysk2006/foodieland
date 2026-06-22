import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

import DefaultBanner from "@/components/ui/banners/DefaultBanner";
import { defaultBanners } from "@/context/banners";

import styles from "./Hero.module.scss";

const AUTOPLAY_DELAY = 5000;
const SLIDE_WIDTH = 1280; // В пикселях вместо процентов
const SLIDE_GAP = 24;

function createInfiniteSlides(items) {
  if (items.length === 0) return [];
  return [items[items.length - 1], ...items, items[0]];
}

function Hero() {
  const slides = useMemo(() => createInfiniteSlides(defaultBanners), []);
  const [slideIndex, setSlideIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  const goNext = useCallback(() => {
    setEnableTransition(true);
    setSlideIndex((index) => index + 1);
  }, []);

  const goPrev = useCallback(() => {
    setEnableTransition(true);
    setSlideIndex((index) => index - 1);
  }, []);

  const handleTransitionEnd = useCallback(() => {
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
    const timer = setInterval(goNext, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [goNext]);

  // Пересчёт трансформации с использованием пикселей
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

        <div className={styles.viewport}>
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
                <DefaultBanner {...banner} isActive={index === slideIndex} />
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
