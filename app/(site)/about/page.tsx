import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="mt-24">
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-24 bg-white p-10">
        {/* Image section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Header.png" // Replace with your image path
            width={1000}
            height={1000}
            alt="Artist Portrait"
            className="w-full h-auto shadow-lg object-cover"
          />
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm Adrian Gonzalez, a photographer with a passion for light, people, and honest moments. My work focuses on capturing what’s real — the subtle, fleeting expressions that define our humanity. Whether it’s a portrait or a spontaneous scene, I aim to preserve the feeling of the moment with care and intention.
          </p>
        </div>
      </section>
    </div>
  );
}
