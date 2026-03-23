import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

import TopicsContent from "@/components/TopicsContent";

export const metadata: Metadata = { title: "Topics — SEAMUN I" };

export default function TopicsPage() {
  return (
    <>
      <ScrollAnimator />
      <Header />
      <main>
        <Suspense
          fallback={
            <section className="section">
              <div className="container">
                <p>Loading topics...</p>
              </div>
            </section>
          }
        >
          <TopicsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
