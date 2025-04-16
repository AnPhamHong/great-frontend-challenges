import { SVGProps } from "react";


export interface Extensions {
    id: string;
    logo: React.ComponentType<SVGProps<SVGSVGElement>>;
    name: string;
    description: string;
    isActive: Boolean;
}