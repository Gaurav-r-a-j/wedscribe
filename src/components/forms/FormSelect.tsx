import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export interface FormSelectProps {
  label?: string
  error?: string
  helperText?: string
  placeholder?: string
  options: string[]
  value?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  className?: string
}

const FormSelect = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  FormSelectProps
>(({ label, error, helperText, placeholder, options, value, onValueChange, disabled, className }, ref) => {
  const selectId = React.useId()

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider"
        >
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger
          ref={ref}
          id={selectId}
          className={cn(
            "bg-slate-50 border-slate-200 text-slate-700 font-medium data-[placeholder]:text-slate-300 focus:bg-white focus:border-primary",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
        >
          <SelectValue placeholder={placeholder || "Select..."} />
        </SelectTrigger>
        <SelectContent className="bg-white border-slate-200">
          {options.map((option) => (
            <SelectItem key={option} value={option} className="text-slate-700 focus:bg-slate-50">
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p id={`${selectId}-error`} className="text-xs text-red-500 font-medium" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${selectId}-helper`} className="text-xs text-slate-500">
          {helperText}
        </p>
      )}
    </div>
  )
})
FormSelect.displayName = "FormSelect"

export { FormSelect }

