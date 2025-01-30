"use client";

import { Mail } from "lucide-react";
import toast from "react-hot-toast";

const CopyMail = () => {
  const email = "hello@eduardteller.me";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    toast.success("Copied", {
      style: {
        borderRadius: "8px",
        background: "#27272a",
        color: "#e4e4e7",
        border: "1px solid #e4e4e7",
      },
    });
  };

  return (
    <>
      <div
        onClick={handleCopy}
        className="flex w-fit cursor-pointer items-center gap-2 rounded-lg font-medium text-zinc-100/60 transition-colors duration-150 hover:text-zinc-100"
      >
        <Mail className="h-6 w-6 text-zinc-100/80 duration-150 hover:text-zinc-100" />
        <span>{email}</span>
      </div>
    </>
  );
};

export default CopyMail;
