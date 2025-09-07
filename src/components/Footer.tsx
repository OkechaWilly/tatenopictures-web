export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} Tateno Pictures. All rights reserved.
      </div>
    </footer>
  );
}
