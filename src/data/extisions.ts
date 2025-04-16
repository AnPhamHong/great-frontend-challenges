

import { ReactComponent as LogoDevlens } from "@/assets/svg/logo-devlens.svg";
import { ReactComponent as LogoConsolePlus } from "@/assets/svg/logo-console-plus.svg";
import { ReactComponent as LogoDomSnapshot } from "@/assets/svg/logo-dom-snapshot.svg";
import { ReactComponent as LogoGridGuides } from "@/assets/svg/logo-grid-guides.svg";
import { ReactComponent as LogoJsonWizard } from "@/assets/svg/logo-json-wizard.svg";
import { ReactComponent as LogoLinkChecker } from "@/assets/svg/logo-link-checker.svg";
import { ReactComponent as LogoMarkupNotes } from "@/assets/svg/logo-markup-notes.svg";
import { ReactComponent as LogoPalettePicker } from "@/assets/svg/logo-palette-picker.svg";
import { ReactComponent as LogoSpeedBoost } from "@/assets/svg/logo-speed-boost.svg";
import { ReactComponent as LogoStyleSpy } from "@/assets/svg/logo-style-spy.svg";
import { ReactComponent as LogoTabMasterPro } from "@/assets/svg/logo-tab-master-pro.svg";
import { ReactComponent as LogoViewportBuddy } from "@/assets/svg/logo-viewport-buddy.svg";
import { Extensions } from "@/types/extensions";

export const dataExtensions: Extensions[] = [
  {
    id: "DevLens",
    logo: LogoDevlens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    id: "StyleSpy",
    logo:LogoStyleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: "SpeedBoost",
    logo: LogoSpeedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: "JSONWizard",
    logo: LogoJsonWizard,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    id: "TabMaster-Pro",
    logo: LogoTabMasterPro,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: "ViewportBuddy",
    logo: LogoViewportBuddy,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: "Markup-Notes",
    logo: LogoMarkupNotes,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: "GridGuides",
    logo: LogoGridGuides,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: "Palette-Picker",
    logo: LogoPalettePicker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: "LinkChecker",
    logo: LogoLinkChecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    id: "DOM-Snapshot",
    logo: LogoDomSnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: "ConsolePlus",
    logo: LogoConsolePlus,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },

];
