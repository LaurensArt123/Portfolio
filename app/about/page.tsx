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
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
  
        {/* Text section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a visual storyteller capturing the world one frame at a time. With a background in fine arts and a passion for authentic moments, my photography explores light, emotion, and human connection. From intimate portraits to sweeping landscapes, each image is a reflection of how I see the world — raw, honest, and beautiful.
          </p>
        </div>
      </section>  
        </div>
     
    );
  }
  