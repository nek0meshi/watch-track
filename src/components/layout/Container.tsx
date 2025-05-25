import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto p-4">{children}</div>;
};
