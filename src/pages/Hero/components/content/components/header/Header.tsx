import { memo } from "react";
import type { IHeader } from "../../type";
import { useTheme } from "@/context/theme/ThemeContext";

function Header({ title, selector, value, onChange }: IHeader) {
  const { theme } = useTheme();
  return (
    <div className="flex">
      <h2 className="mr-5 font-semibold text-2xl">{title}</h2>
      <div
        className={`border border-${theme === "dark" ? "gray-400" : "gray-900"} rounded-full  flex `}
      >
        {selector.map((item, index) => (
          <div
            key={index}
            onClick={() => onChange(item.value)}
            className={`px-4 py-1 rounded-full cursor-pointer font-semibold transition duration-300 ${
              value === item.value
                ? "bg-[var(--primary-color)] text-white "
                : " "
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Header);
