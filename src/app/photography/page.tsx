import PhotographyFeature from "@/components/sections/PhotographyFeature";

export const metadata = {
  title: "Photography",
  description: "Explore photography and still-image work from Tateno Pictures in Kampala, Uganda.",
};

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#060608] pt-24">
      <PhotographyFeature />
    </main>
  );
}
