import { Header } from "@/components/ClientShell";
import { Footer } from "@/components/ClientShell";
import AnnouncementBar from "@/components/AnnouncementBar";
import HelpSystem from "@/components/HelpSystem";
import HomeModals from "./HomeModals";
import ScrollAnimator from "@/components/ScrollAnimator";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <HelpSystem />
      <AnnouncementBar />
      <Header showHelp />
      <HomeContent />
      <HomeModals />
      <Footer />
    </>
  );
}
