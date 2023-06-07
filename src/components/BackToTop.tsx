import { UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { ReactElement } from "react";

export default function ToTopBtn(): ReactElement {
  return(
    <Button
      className="
      bg1
      transition-colors
      duration-200
      hover:transition-colors
      hover:bg2
      mt-14"
      icon={<UpOutlined />}
      onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Voltar ao topo
    </Button>
  );
}