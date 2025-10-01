import type { ReactNode } from "react";

type SectionProps = {
  text: string;
  children?: ReactNode;
};

export default function Section(props: SectionProps) {
  console.log("🚀 ~ Section ~ props:", props);
  return (
    <section>
      <h2>{props.text}</h2>

      {props.children}
    </section>
  );
}
