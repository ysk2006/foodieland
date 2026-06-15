import styles from "./Hero.module.scss";
import DefaultBanner from "@/components/ui/banners/DefaultBanner";

function Hero() {
  return (
    <section className="hero">
      <DefaultBanner />
    </section>
  );
}

export default Hero;
