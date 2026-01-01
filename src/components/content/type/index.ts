import type { ITmdbResponse } from "@/types/types";

export interface IHeader {
  title: string;
  value: string;
  onChange: (value: string) => void;
  selector: {
    label: string;
    value: string;
  }[];
}

export interface IContentProps<T> extends IHeader {
  data?: ITmdbResponse<T>;
}

export type ITime = "day" | "week";

export type IScrollerProps<T> = {
  data?: T[];
};
