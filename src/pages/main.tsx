import { useState } from 'react';
import FindRewards from '../components/forms/find-rewards';
import { isValidAddress } from '../lib/helpers';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useClaim from '../hooks/useClaim';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { createClaim } = useClaim();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const wallet = e.currentTarget.wallet.value;
    if (!wallet) {
      toast.error('Please enter a wallet address');
      setIsLoading(false);
      return;
    }
    try {
      const isValid = await isValidAddress(wallet);
      if (!isValid) {
        return toast.error('Oops... Something went wrong');
      }
      createClaim(wallet);
      toast.success('Successfully');
      navigate('/check/claim');
    } catch (error) {
      toast.error('There was an error validating the address');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full rounded-t-md gift overflow-hidden">
      <FindRewards onSumbit={handleSubmit} loading={isLoading} />
    </div>
  );
}
