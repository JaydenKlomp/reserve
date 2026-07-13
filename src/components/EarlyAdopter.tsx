import { earlyAdopter } from "@/content/site";
import CtaBanner from "./CtaBanner";

export default function EarlyAdopter() {
  return (
    <CtaBanner
      heading={earlyAdopter.heading}
      sub={earlyAdopter.sub}
      label={earlyAdopter.cta.label}
      href={earlyAdopter.cta.href}
    />
  );
}
