import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 py-4">
      {/* Top Section: Name, Email, IG */}
      <div className="max-w-full p-6 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Left side */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left">
          <div>
            <p className="font-bold sm:text-3xl">Lauren Jones</p>
            <p className="sm:text-3xl">artist@gmail.com</p>
          </div>
          <a
            href="https://instagram.com/adriangphoto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="mt-2 sm:mt-0 text-white hover:text-gray-300"
          >
            <FaInstagram color="black" size={36} />
          </a>
        </div>
      </div>

      {/* Bottom Section: VisionTech Studio */}
      <div className="mt-4 text-center">
        <a href="https://visiontechstudio.com "className="text-xs sm:text-sm">WEBSITE BY VISIONTECH STUDIO</a>
      </div>
    </footer>
  );
}
