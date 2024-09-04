interface Props {
    headings: Array<{ slug: string; title: string; level: number}>;
  }

interface HeadingProps {
slug: string;
title: string;
level: number;
}
export default function TableOfContents({ headings }: Props) {
    const getHeadingContent = ({ title, level }: HeadingProps): JSX.Element | string => {
      switch (level) {
        case 1:
          return <strong>{title}</strong>;
        case 2:
          return <em>{title}</em>;
        case 3:
          return <u>{title}</u>;
        case 4:
          return title;
        default:
          return title;
      }
    };

  return (
     <nav className="bg-primary border-solid border-2 border-primary p-4 rounded-md shadow-lg max-w-xs sticky top-20 pl-8">
      <p className="text-lg font-semibold mb-4 text-primary">Table of contents</p>
      <ul className="list-disc list-outside space-y-2">
        {headings.map(({ slug, title, level }, index) => (
          <li key={index} className={`ml-${level * 3} py-1`}>
            <a
              href={`#${slug}`}
              className="text-keyColor hover:text-blue-800 hover:underline block py-1 transition-colors"
            >
              {getHeadingContent({ slug, title, level })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}