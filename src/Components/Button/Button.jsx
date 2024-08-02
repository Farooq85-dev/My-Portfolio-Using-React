import { Button } from "@material-tailwind/react";

function ButtonComp({ title, classes }) {
  return (
    <Button variant="gradient" size="sm" className={`navbarButton pt-3 pb-3 pl-6 pr-6 ${classes} `}>
      <span>{title}</span>
    </Button>
  );
}

export default ButtonComp;
