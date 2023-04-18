import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';

export const Category = ({ category }) => {
  const { currentCategory, handleClickCategory } = useKiosk();
  const { name, icon, id } = category;

  return (
    <div
      className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-colors duration-300 hover:cursor-pointer ${
        currentCategory?.id === id ? 'bg-amber-400' : null
      }`}
      onClick={() => handleClickCategory(id)}
    >
      <Image
        width={0}
        height={0}
        src={`/assets/img/icono_${icon}.svg`}
        alt="Imagen Icono"
        className="w-16 h-auto"
      />

      <button type="button" className="text-2xl font-bold">
        {name}
      </button>
    </div>
  );
};
