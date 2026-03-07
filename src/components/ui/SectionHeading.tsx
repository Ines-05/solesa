type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  titleAs?: 'h1' | 'h2';
  tone?: 'dark' | 'light';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  titleAs = 'h2',
  tone = 'dark'
}: SectionHeadingProps) {
  const TitleTag = titleAs;
  const isLight = tone === 'light';

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${isLight ? 'text-white/70' : 'text-sole-green'}`}>
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl ${isLight ? 'text-white' : 'text-sole-blue'}`}>
        {title}
      </TitleTag>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${isLight ? 'text-white/80' : 'text-slate-600'}`}>{description}</p>
      ) : null}
    </div>
  );
}
