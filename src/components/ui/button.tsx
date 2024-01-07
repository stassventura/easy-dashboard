import { FC, ComponentProps } from 'react';
import { cn } from '../../lib/helpers';
import Spinner from './spinner';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  spinner?: boolean;
}

const buttonVariants = {
  primary:
    'flex bg-orange items-center text-white text-sm px-7 h-[2.25rem] font-medium border-0 transition ease-linear duration-150 font-lato rounded-full  connectButton bg-orange-500 cursor-pointer hover:bg-orange-600 relative',
  outline:
    'flex bg-transparent items-center text-white text-sm px-7 h-[2.25rem] font-medium border-0 transition ease-linear duration-150 font-lato rounded-full connectButton cursor-pointer relative',
} satisfies Record<ButtonVariant, string>;

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  className,
  spinner = false,
  variant = 'primary',
  ...rest
}) => {
  const buttonVariant = buttonVariants[variant];
  const isSpinner = spinner && disabled;
  return (
    <button {...rest} disabled={disabled} className={cn(buttonVariant, className)}>
      {isSpinner && <Spinner />}
      <span className={cn(isSpinner && 'opacity-0')}>{children}</span>
    </button>
  );
};

export default Button;
