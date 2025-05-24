import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 py-4">
      <div className="max-w-full p-6 mx-auto flex justify-between items-center">
        {/* Left side */}
        <div>
          <p className="font-bold sm:text-3xl">ARTIST NAME</p>
          <p className="sm:text-3xl">artist@email.com</p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram color="black" size={36} />
          </a>
          <p className="sm:text-xl mt-1">Website by VisionTech Studio</p>
        </div>
      </div>
    </footer>
  );
}
