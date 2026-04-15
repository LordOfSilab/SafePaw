import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paw-amber focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        'dark:border-paw-dark-border dark:bg-paw-dark-card dark:text-amber-50 dark:placeholder:text-amber-300/40 dark:ring-offset-paw-dark-bg dark:focus-visible:ring-paw-amber',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
