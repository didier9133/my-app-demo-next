import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LigthLayout = ({ children }: Props) => {
  return (
    <div style={{ background: "rgb(240 241 241)", color: "black" }}>
      <h3>Ligth-Layout</h3>
      {children}
    </div>
  );
};

export default LigthLayout;
