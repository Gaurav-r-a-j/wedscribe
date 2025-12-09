import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export interface FormTextareaProps extends React.ComponentProps<"textarea"> {
  label?: string
  error?: string
  helperText?: string
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || React.useId()

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <Textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "bg-slate-50 border-slate-200 text-slate-700 font-medium placeholder:text-slate-300 focus-visible:bg-white focus-visible:border-primary focus-visible:ring-primary",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="text-xs text-red-500 font-medium" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="text-xs text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
FormTextarea.displayName = "FormTextarea"

export { FormTextarea }

