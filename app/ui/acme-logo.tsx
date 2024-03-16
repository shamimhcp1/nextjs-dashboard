import { BuildingStorefrontIcon } from '@heroicons/react/24/outline';
import { galada } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${galada.className} flex flex-row items-center leading-none text-white`}
    >
      <BuildingStorefrontIcon className="mt-[-10px] h-12 w-12 pr-2" />
      <p className="text-[44px]">Root</p>
    </div>
  );
}

