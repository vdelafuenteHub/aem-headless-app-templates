import { Loader } from '@/components/atoms/Loader';
import { Backdrop } from '@/ui/components/molecules/Backdrop';
import { useLoaders } from '@/ui/plugins/Loaders';
import { Portal } from '@headlessui/react';

import Logo from 'public/logo.svg';

const Loading = () => {
  const { state } = useLoaders();

  return (
    <Portal>
      <Backdrop open={state}>
        <Loader>
          <div className="bg-yellow-300 p-10">
            <Logo height={50} />
          </div>
        </Loader>
      </Backdrop>
    </Portal>
  );
};

export default Loading;
