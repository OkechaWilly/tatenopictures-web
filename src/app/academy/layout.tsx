import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Film Academy | Tateno Pictures',
  description: 'Gain industry-ready, hands-on experience in visual storytelling. Tateno Film Academy offers intensive training modules in Kampala, Uganda.',
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
