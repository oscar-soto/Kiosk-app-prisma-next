import useKiosk from '@/hooks/useKiosk';
import { useRouter } from 'next/router';

const steps = [
  { step: 1, name: 'Menu', url: '/' },
  { step: 2, name: 'Resumen', url: '/summary' },
  { step: 3, name: 'Datos y Total', url: '/total' },
];

export const Steps = () => {
  // const { handleChangeStep, step } = useKiosk();
  const router = useRouter();

  const calculateProgress = () => {
    const percentValues = {
      '/': 2,
      '/summary': 50,
      '/total': 100,
    };

    const value = percentValues[router.pathname]

    return value;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            className="text-2xl font-bold"
            key={step.step}
            type="button"
            onClick={() => {
              router.push(step.url);
              // handleChangeStep(step.step);
            }}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};
