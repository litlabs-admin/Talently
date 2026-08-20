"use client";

import { Select } from "@base-ui/react/select";

import { cn } from "@/lib/utils";

/**
 * Flat select matching the contact form's field styling, but with a custom
 * popup instead of the OS dropdown: animated open/close, hover + keyboard
 * highlight, a check indicator on the selected row, and a chevron that flips.
 */
export function SelectField({
  id,
  name,
  label,
  placeholder,
  options,
  required = true,
  triggerClassName,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  triggerClassName?: string;
}) {
  return (
    <Select.Root name={name} required={required} modal={false}>
      <div className="flex flex-col">
        <Select.Label
          className="mb-[10px] block cursor-default text-[16px] leading-[22px] font-medium tracking-[-0.01em] text-ink lg:text-[18px] lg:leading-[24px]"
        >
          {label}
        </Select.Label>

        <Select.Trigger
          id={id}
          className={cn(
            "group flex h-[52px] w-full cursor-pointer items-center justify-between gap-3 rounded-none",
            "border-0 bg-[#DCDCDC] px-4 text-left text-[16px] text-ink select-none",
            "outline-none transition-[background-color,box-shadow] duration-200 ease-out",
            "hover:bg-[#D4D4D4] data-popup-open:bg-[#D4D4D4]",
            "data-popup-open:shadow-[inset_0_0_0_1.5px_var(--color-ink)]",
            "focus-visible:bg-[#D4D4D4] focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)]",
            "lg:h-[44px] lg:text-[17px]",
            triggerClassName,
          )}
        >
          <Select.Value
            className="truncate data-placeholder:text-[#8A8A8A]"
            placeholder={placeholder}
          />
          <Select.Icon
            className="shrink-0 text-[#4A4A4A] transition-transform duration-200 ease-out group-data-popup-open:rotate-180 group-data-popup-open:text-ink"
            aria-hidden
          >
            <svg viewBox="0 0 12 8" className="w-[11px] fill-current">
              <path d="M0 0h12L6 8 0 0Z" />
            </svg>
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Positioner
            className="z-50 outline-none select-none"
            sideOffset={6}
            alignItemWithTrigger={false}
          >
            <Select.Popup
              className={cn(
                "max-h-[var(--available-height)] w-[var(--anchor-width)] origin-[var(--transform-origin)]",
                "rounded-none border border-ink/12 bg-white py-1 text-ink outline-none",
                "shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)]",
                "transition-[opacity,transform] duration-200 ease-out",
                "data-starting-style:translate-y-[-6px] data-starting-style:scale-[0.98] data-starting-style:opacity-0",
                "data-ending-style:translate-y-[-4px] data-ending-style:scale-[0.98] data-ending-style:opacity-0",
              )}
            >
              <Select.List className="max-h-[var(--available-height)] overflow-y-auto scroll-py-1">
                {options.map((option) => (
                  <Select.Item
                    key={option}
                    value={option}
                    className={cn(
                      "relative grid cursor-pointer grid-cols-[18px_1fr] items-center gap-2",
                      "py-[10px] pr-4 pl-3 text-[16px] leading-[22px] outline-none select-none",
                      "transition-[background-color,color,padding-left] duration-150 ease-out",
                      "data-highlighted:bg-ink/[0.06] data-highlighted:pl-4",
                      "data-selected:font-medium lg:text-[17px]",
                      // left accent bar that grows in on hover/keyboard focus
                      "before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[3px]",
                      "before:origin-top before:scale-y-0 before:bg-ink",
                      "before:transition-transform before:duration-200 before:ease-out",
                      "data-highlighted:before:scale-y-100",
                    )}
                  >
                    <Select.ItemIndicator className="col-start-1 flex items-center justify-center transition-opacity duration-150 ease-out">
                      <svg
                        viewBox="0 0 16 16"
                        className="w-[14px] fill-none stroke-current stroke-2"
                        aria-hidden
                      >
                        <path d="m2.5 8.5 4 4 7-9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Select.ItemIndicator>
                    <Select.ItemText className="col-start-2">{option}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </div>
    </Select.Root>
  );
}
