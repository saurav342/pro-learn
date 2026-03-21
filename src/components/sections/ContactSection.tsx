"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormInputs = {
  name: string;
  phone: string;
  className: string;
  courseInterest: string;
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 lg:py-28 bg-cream relative overflow-hidden">
      {/* Crosshair decorations */}
      <span className="crosshair absolute top-10 left-20 !w-8 !h-8 text-gray-300 opacity-40 hidden md:block" />
      <span className="crosshair absolute bottom-10 right-20 !w-6 !h-6 text-gray-300 opacity-30 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="section-label flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary inline-block" />
              Get in Touch
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight">
              Ready to Start Your
              <span className="text-primary italic"> Journey?</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Contact us to secure your admission or schedule a counselling session with our team.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl overflow-hidden shadow-2xl border border-white bg-white">
          {/* ── Left: Info Panel ── */}
          <FadeIn direction="right" className="h-full">
            <div className="h-full bg-secondary text-white p-6 sm:p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_top_left,_white_0%,_transparent_60%)]" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="font-playfair text-3xl font-bold mb-3">Contact Information</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-12 max-w-sm">
                  Fill up the form and our team will get back to you within 24 hours to guide you through the admission process.
                </p>

                <div className="space-y-8">
                  <a
                    href="tel:+918851748983"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-200">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Call Us Directly</p>
                      <p className="font-bold text-lg font-playfair">+91-8851748983</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-200">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Visit Our Centre</p>
                      <address className="not-italic text-sm leading-relaxed text-white/90">
                        J-202, Eldeco Green Meadows,<br />
                        Greater Noida, Uttar Pradesh
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="relative z-10 mt-12 rounded-2xl overflow-hidden border border-white/10 h-44">
                <iframe
                  title="Pro Learning Center Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1234!2d77.4260!3d28.5842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d0b32b4d57%3A0x0!2sEldeco+Green+Meadows%2C+Greater+Noida!5e0!3m2!1sen!2sin!4v1"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Form ── */}
          <FadeIn direction="left">
            <div className="p-6 sm:p-10 md:p-14">
              <h3 className="font-playfair text-2xl font-bold text-secondary mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-secondary">
                    Student&apos;s Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm placeholder:text-gray-400 bg-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone + Class */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-secondary">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
                      })}
                      placeholder="10-digit mobile"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm placeholder:text-gray-400"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="className" className="text-sm font-semibold text-secondary">
                      Current Class
                    </label>
                    <select
                      id="className"
                      {...register("className", { required: "Class is required" })}
                      defaultValue=""
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white text-gray-700"
                    >
                      <option value="" disabled>Select Class</option>
                      <option value="9">Class IX</option>
                      <option value="10">Class X</option>
                      <option value="11">Class XI</option>
                      <option value="12">Class XII</option>
                    </select>
                    {errors.className && (
                      <p className="text-red-500 text-xs mt-1">{errors.className.message}</p>
                    )}
                  </div>
                </div>

                {/* Course Interest */}
                <div className="space-y-1.5">
                  <label htmlFor="courseInterest" className="text-sm font-semibold text-secondary">
                    Course Interest
                  </label>
                  <select
                    id="courseInterest"
                    {...register("courseInterest", { required: "Course is required" })}
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white text-gray-700"
                  >
                    <option value="" disabled>Select Subject / Course</option>
                    <option value="PCM">Physics, Chemistry, Maths (11/12)</option>
                    <option value="PCB">Physics, Chemistry, Bio (11/12)</option>
                    <option value="All_9_10">Maths & Science (9/10)</option>
                    <option value="Applied_Math">Applied Mathematics (Special)</option>
                    <option value="Junior">Foundation (Junior Batch)</option>
                  </select>
                  {errors.courseInterest && (
                    <p className="text-red-500 text-xs mt-1">{errors.courseInterest.message}</p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-white font-bold text-[15px] shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all duration-200 disabled:opacity-70 group relative overflow-hidden"
                  >
                    <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? "opacity-0 translate-y-5" : "opacity-100"}`}>
                      Submit Inquiry
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                    <span className={`absolute transition-all duration-300 ${isSubmitting ? "opacity-100" : "opacity-0 -translate-y-5"}`}>
                      Sending...
                    </span>
                  </button>
                </div>

                {isSuccess && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-xl flex gap-3 border border-green-200 animate-fade-in-up">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Thank you for your interest!</p>
                      <p className="text-xs mt-0.5">Your inquiry has been sent. We&apos;ll contact you within 24 hours.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
