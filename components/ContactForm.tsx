"use client";
import { sendContact } from "@/actions/formAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const formSchema = z.object({
  name: z.string().min(3, { message: "Name is too short" }).max(50),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message is too short" }).max(500),
});

export type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    const resp = await sendContact(data);
    if (!resp.status) {
      toast.error("Error", {
        style: {
          borderRadius: "6px",
          background: "#27272a",
          color: "#e4e4e7",
        },
      });
    } else {
      toast.success("Message Sent", {
        style: {
          borderRadius: "6px",
          background: "#27272a",
          color: "#e4e4e7",
        },
      });
      reset();
    }

    setLoading(false);
  };

  const inputCSS =
    "rounded-lg border border-zinc-100/80 bg-transparent px-6 py-4 outline-none duration-150";
  const textareaCSS =
    "max-h-48 min-h-24 rounded-lg border border-zinc-100/80 bg-transparent px-6 py-4 outline-none duration-150 focus:border-red-600";
  const errorCSS = "text-sm font-medium text-red-600";
  const headingCSS = `font-bold uppercase ${poppins.className}`;
  return (
    <>
      <div>
        <Toaster />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-8 text-zinc-100/80"
      >
        <div className="flex w-full flex-col gap-2">
          <div className={headingCSS}>
            <h6>Full Name</h6>
          </div>
          <input
            {...register("name")}
            placeholder="John Doe"
            type="text"
            className={`${inputCSS} focus:border-blue-600`}
          />
          {errors.name && (
            <span className={errorCSS}>{errors.name.message}</span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2">
          <h6 className={headingCSS}>Your Email</h6>
          <input
            className={`${inputCSS} focus:border-purple-600`}
            placeholder="john@example.com"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <span className={errorCSS}>{errors.email.message}</span>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className={headingCSS}>Your Message</h6>
          <textarea
            className={textareaCSS}
            placeholder="Tell me about your project"
            {...register("message")}
          />
          {errors.message && (
            <span className={errorCSS}>{errors.message.message}</span>
          )}
        </div>
        <button disabled={loading} className="group relative w-full">
          <div className="animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 via-purple-600 to-blue-600" />
          <div className="relative w-full rounded-lg border border-zinc-100/80 bg-[#151517] p-4 text-sm font-bold uppercase text-zinc-100/80 transition-all duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-zinc-100 group-hover:text-zinc-100">
            {loading ? "Sending..." : "Send"}
          </div>
        </button>
        {/* <button className="w-full rounded-lg border border-zinc-100/80 bg-transparent p-4 text-sm font-bold uppercase text-zinc-100/80 duration-300 hover:border-zinc-100 hover:text-zinc-100">
          Send
        </button> */}
      </form>
    </>
  );
};

export default ContactForm;
