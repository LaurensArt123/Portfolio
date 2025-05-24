import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";

export default function ContactPage() {
  return (
    <div className="mt-14">
            <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
      {/* Wrapper div with mt-10 and max width, centering children */}
      <div className="mt-10 max-w-4xl w-full">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Let’s Talk</h1>
          <p className="text-lg text-gray-600">
            Have a question, idea, or project? Reach out and we’ll get back to you as soon as we can.
          </p>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-gray-100 p-6 rounded-2xl shadow space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                rows={5}
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <AiOutlineMail className="text-2xl text-black" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">contact@visiontech.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <AiOutlinePhone className="text-2xl text-black" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <AiOutlineEnvironment className="text-2xl text-black" />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600">Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    </div>

  );
}
