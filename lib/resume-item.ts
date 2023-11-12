/**
 * resume-item.ts
 * ---
 *
 * ResumeItem is a
 */

import { ReactNode } from "react";

import Location from "./location";
import DateRange from "./date-range";

export default interface ResumeItem {
  key: string;
  title: string;
  location: Location;
  when: DateRange;
  content: () => ReactNode;
}
