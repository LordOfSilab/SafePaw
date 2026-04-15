import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'danger' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paw-amber focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-paw-amber text-white hover:bg-amber-500 active:bg-amber-600':
              variant === 'default',
            'border-2 border-paw-amber text-paw-amber bg-transparent hover:bg-paw-amber/10':
              variant === 'outline',
            'bg-transparent text-paw-amber hover:bg-paw-amber/10': variant === 'ghost',
            'bg-red-500 text-white hover:bg-red-600 active:bg-red-700': variant === 'danger',
            'underline-offset-4 hover:underline text-paw-amber p-0 h-auto': variant === 'link',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-sm': size === 'md',
            'h-12 px-6 text-base': size === 'lg',
            'h-10 w-10 p-0': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
