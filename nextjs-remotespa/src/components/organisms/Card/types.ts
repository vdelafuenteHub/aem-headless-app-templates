export type CardProps = {
  slug: string;
  title: string;
  price: number;
  duration: number;
  imageSrc: string;
} & React.AllHTMLAttributes<HTMLDivElement>;
