import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../lib/helpers';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
  defaultValue?: string | number;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...rest }, ref) => {
    return (
      <>
        {label && <p className="mb-1 text-sm font-medium text-gray-700">{label}</p>}
        <input
          {...rest}
          ref={ref}
          className={cn(
            'h-[2.25rem] w-full md:w-[22.5rem] rounded-full text-sm font-lato border border-[rgba(225,229,242,.8)] focus:border-orange-400 shadow-none focus-visible:border-orange-400 outline-none font-medium',
            className,
            error ? 'border-red-400 shadow-[0_0_4px_rgba(255,0,0,0.2)]' : 'border-gray-300',
          )}
        />
        {error && <p className="absolute -bottom-5  left-0.5  text-xs text-red-500">{error}</p>}
      </>
    );
  },
);

export default Input;
