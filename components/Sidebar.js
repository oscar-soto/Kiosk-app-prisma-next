import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';
import { Category } from './Category';

export const Sidebar = () => {
  const { categories } = useKiosk();
  console.log(categories)
  return (
    <>
      <Image
        width={0}
        height={0}
        src="/assets/img/logo.svg"
        alt="Imagen del logotipo"
        className='w-52 h-auto mx-auto'
        priority
      />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </nav>
    </>
  );
};
