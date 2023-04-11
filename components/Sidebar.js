import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';
import { Category } from './Category';

export const Sidebar = () => {
  const { categories } = useKiosk();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Imagen del logotipo"
      />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </nav>
    </>
  );
};
