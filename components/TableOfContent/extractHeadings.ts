interface Heading {
    id: number;
    slug: string;
    title: string;
    level: number;
  }
  
  export function extractHeadings(content: string): Heading[] {
    const headings: Heading[] = [];
    const headingMatcher = /^(#+)\s(.+)$/gm;
    let match: RegExpExecArray | null;
  
    // Define a simple slug function if not provided
    const defaultSlugFn = (title: string): string =>
      title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  
    // Loop through all matches
    while ((match = headingMatcher.exec(content)) !== null) {
      const id = Math.floor(Math.random() * 900000) + 100000;
      const level = match[1].length;
      const title = match[2].trim();
      const slug = defaultSlugFn(title);
  
      headings.push({ id, slug, title, level });
    }
  
    return headings;
  }