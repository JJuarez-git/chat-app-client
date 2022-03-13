import React from "react";

interface FadeProps {
  children: any;
  active?: boolean;
  slow?: boolean
}

const Fade = (props: FadeProps) => {
  const { children, active = true, slow = false } = props;
  return <div className={active ? "animate-fadeInUp" : ""}>{children}</div>;
};

export default Fade;
