import { enabledLocales, Locale } from "@/i18n/config";
import Link from "next/link";

interface Props {
  lang: Locale;
  label: string;
}

const LanguageSwitch = ({ lang, label }: Props) => {
  return (
    <nav
      aria-label={label}
      className="flex rounded-lg border border-zinc-600 bg-zinc-950 p-1 text-xs font-bold uppercase"
    >
      {enabledLocales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          hrefLang={locale}
          aria-current={locale === lang ? "page" : undefined}
          className={`rounded-md px-3 py-1.5 duration-150 ${locale === lang ? "bg-zinc-100/10 text-zinc-100" : "text-zinc-100/50 hover:text-zinc-100"}`}
        >
          {locale}
        </Link>
      ))}
    </nav>
  );
};

export default LanguageSwitch;
