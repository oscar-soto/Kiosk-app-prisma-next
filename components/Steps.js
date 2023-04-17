import { useRouter } from 'next/router';

const steps = [
  { step: 1, name: 'Menu', url: '/' },
  { step: 2, name: 'Resumen', url: '/summary' },
  { step: 3, name: 'Datos y Total', url: '/total' },
];

export const Steps = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step) => (
          <button
            className="text-2xl font-bold"
            key={step.step}
            type="button"
            onClick={() => router.push(step.url)}
          >
            {step.name}
          </button>
        ))}
      </div>
    </>
  );
};
