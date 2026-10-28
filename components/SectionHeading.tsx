interface Props {
  eyebrow: string;
  title: string;
}

const SectionHeading = ({ eyebrow, title }: Props) => {
  return (
    <>
      <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
        {eyebrow}
      </h5>
      <h2 className="text-center text-3xl font-bold text-zinc-100/80 md:text-4xl">
        {title}
      </h2>
    </>
  );
};

export default SectionHeading;
