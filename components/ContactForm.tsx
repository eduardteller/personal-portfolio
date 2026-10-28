"use client";
import { sendContact } from "@/actions/formAction";
import { ContactFormText } from "@/i18n/dictionaries";
import { zodResolver } from "@hookform/resolvers/zod";
import { Poppins } from "next/font/google";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const createFormSchema = (text: ContactFormText) =>
  z.object({
    name: z.string().min(3, { message: text.nameTooShort }).max(50),
    email: z.string().email({ message: text.invalidEmail }),
    message: z.string().min(1, { message: text.messageTooShort }).max(500),
  });

export type FormData = z.infer<ReturnType<typeof createFormSchema>>;

interface Props {
  text: ContactFormText;
}

const ContactForm = ({ text }: Props) => {
  const [loading, setLoading] = useState(false);
  const formSchema = useMemo(() => createFormSchema(text), [text]);
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
      toast.error(text.sendError, {
        style: {
          borderRadius: "8px",
          background: "#27272a",
          color: "#e4e4e7",
          border: "1px solid #e4e4e7",
        },
      });
    } else {
      toast.success(text.sent, {
        style: {
          borderRadius: "8px",
          background: "#27272a",
          color: "#e4e4e7",
          border: "1px solid #e4e4e7",
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
            <h6>{text.name}</h6>
          </div>
          <input
            {...register("name")}
            placeholder={text.namePlaceholder}
            type="text"
            className={`${inputCSS} focus:border-blue-600`}
          />
          {errors.name && (
            <span className={errorCSS}>{errors.name.message}</span>
          )}
        </div>

        <div className="flex w-full flex-col gap-2">
          <h6 className={headingCSS}>{text.email}</h6>
          <input
            className={`${inputCSS} focus:border-purple-600`}
            placeholder={text.emailPlaceholder}
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <span className={errorCSS}>{errors.email.message}</span>
          )}
        </div>
        <div className="flex w-full flex-col gap-2">
          <h6 className={headingCSS}>{text.message}</h6>
          <textarea
            className={textareaCSS}
            placeholder={text.messagePlaceholder}
            {...register("message")}
          />
          {errors.message && (
            <span className={errorCSS}>{errors.message.message}</span>
          )}
        </div>
        <button disabled={loading} className="group relative w-full">
          <div className="animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-red-600 via-purple-600 to-blue-600" />
          <div className="relative w-full rounded-lg border border-zinc-100/80 bg-[#151517] p-4 text-sm font-bold uppercase text-zinc-100/80 transition-all duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-zinc-100 group-hover:text-zinc-100">
            {loading ? text.sending : text.send}
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
