"use client";

import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { sendEmail } from "@/services/sendEmail";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="mt-14">
      <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
        <div className="mt-10 max-w-4xl w-full">
          <section className="text-center">
            <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
            <p className="text-lg text-gray-600">
              Whether it’s a creative project or just a quick question, I’d love to hear from you.
            </p>
          </section>

          <section className="mt-12 grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                if (!formRef.current) return;

                setLoading(true);
                const formData = new FormData(formRef.current);
                const { error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                } else {
                  toast.success("Email sent successfully");
                  formRef.current.reset();
                }

                setLoading(false);
              }}
              className="bg-gray-100 p-6 rounded-2xl shadow space-y-6"
            >
              <div>
                <label htmlFor="senderName" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="senderName"
                  name="senderName"
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="senderEmail" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  id="senderEmail"
                  name="senderEmail"
                  type="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="projectDetails" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  rows={5}
                  placeholder="Tell me what’s on your mind..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <AiOutlineMail className="text-2xl text-black" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">laurenjonesweb@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AiOutlinePhone className="text-2xl text-black" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+1 (213) 555-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AiOutlineEnvironment className="text-2xl text-black" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Based in Atlanta, GA</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
