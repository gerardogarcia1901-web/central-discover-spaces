import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface FilterOption {
  value: string;
  label: string;
}

export function FilterBar({
  query,
  onQueryChange,
  searchPlaceholder = "Buscar",
  selects = [],
  className,
}: {
  query?: string;
  onQueryChange?: (value: string) => void;
  searchPlaceholder?: string;
  selects?: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: FilterOption[];
  }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3 border-y border-border py-5 lg:flex-row lg:items-center", className)}>
      {onQueryChange && (
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-11 rounded-none border-border pl-10"
          />
        </div>
      )}
      <div className="grid grid-cols-2 gap-3 lg:flex lg:w-auto">
        {selects.map((s) => (
          <Select key={s.label} value={s.value} onValueChange={s.onChange}>
            <SelectTrigger className="h-11 min-w-[10rem] rounded-none border-border" aria-label={s.label}>
              <SelectValue placeholder={s.label} />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              {s.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
      </div>
    </div>
  );
}

export function CategoryChips({
  options,
  value,
  onChange,
}: {
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          aria-pressed={value === opt.value}
          className={cn(
            "border px-4 py-2 eyebrow transition-colors",
            value === opt.value
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
