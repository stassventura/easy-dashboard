import { ReactNode, useEffect, useState } from 'react';
import Spinner from '../ui/spinner';
import { useNavigate } from 'react-router-dom';
import useClaim from '../../hooks/useClaim';

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const { claim, isLoaded } = useClaim();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      if (!claim) {
        navigate('/');
      } else {
        setIsLoading(false);
      }
    }
  }, [isLoaded, claim, navigate]);

  return (
    <div className="min-h-[590px] w-full relative flex justify-center items-center pb-8">
      {isLoading ? <Spinner accent className="block " /> : children}
    </div>
  );
}
