import React from "react";
import styles from "./style";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Business } from "./components/Business";
import { Billing } from "./components/Billing";
import { CardDeal } from "./components/CardDeal";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="sticky top-0 bg-primary w-full">
      <div className={`z-[6] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} overflow-x-hidden`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};
