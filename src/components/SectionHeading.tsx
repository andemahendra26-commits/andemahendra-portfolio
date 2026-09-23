import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  art: string;
  subtitle?: string;
}

// Pixel-art section title with a screen-reader heading and optional subtitle.
const SectionHeading = ({ title, art, subtitle }: SectionHeadingProps) => (
  <motion.div
    className="text-center mb-12 md:mb-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true, margin: "-80px" }}
  >
    <h2 className="sr-only">{title}</h2>
    <img
      src={art}
      alt=""
      aria-hidden="true"
      className="dark:invert h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full mx-auto mb-4"
    />
    {subtitle && (
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
