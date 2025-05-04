import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  t: TFunction;
  id: string;
  direction: "left" | "right";
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}
