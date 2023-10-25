import { GitHub, LinkedIn } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface FooterData {
  label: string,
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  },
  text: string,
  url: string
}

export const footerData: FooterData[] = [
  {
    Icon: LinkedIn,
    label: "linkedin",
    text: "Visit my profile",
    url: "https://www.linkedin.com/in/jean-carlo-zapata-lopez-4632b3179/"
  },
  {
    Icon: GitHub,
    label: "github",
    text: "Look my learning projects",
    url: "https://github.com/Jeanza94"
  },
] 