import Work from "@/components/sections/Work";

export const metadata = {
  title: "Film & Video Work",
  description: "Selected film, video and production work by Tateno Pictures, a creative production studio based in Kampala, Uganda.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#060608] pt-24">
      <Work />
    </main>
  );
}
