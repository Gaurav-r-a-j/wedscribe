import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface FormInputProps extends React.ComponentProps<"input"> {
  label?: string
  error?: string
  helperText?: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <Input
          id={inputId}
          ref={ref}
          className={cn(
            "bg-slate-50 border-slate-200 text-slate-700 font-medium placeholder:text-slate-300 focus-visible:bg-white focus-visible:border-primary focus-visible:ring-primary",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-500 font-medium" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-xs text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
FormInput.displayName = "FormInput"

export { FormInput }

