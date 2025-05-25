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
          Hi, I’m Lauren Jones — a photographer and visual artist with a passion for capturing artists in their element. Whether it's the raw energy of a live show or a quiet moment in the studio, I’m all about documenting the real, the unfiltered, and the in-between.

I work with musicians, performers, and creatives of all kinds to create images that feel as alive as the moments themselves. From high-energy concerts to intimate portraits, I aim to tell your story through my lens in a way that’s bold, honest, and uniquely you.

If you’re an artist looking to capture your work, your process, or your presence — let’s connect. I’m always open to collaborating with new people and bringing creative visions to life.

Reach out and let’s make something unforgettable.
          </p>
        </div>
      </section>
    </div>
  );
}
