import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from '@/layout/AdminLayout';
import { Order } from '@/components/Order';

export default function Admin() {
  const fetcher = () => axios('/api/orders').then((data) => data.data);

  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval: 100});

  return (
    <AdminLayout page={'Admin'}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
      {data && data.length ? (
        data.map((ordered) => <Order key={ordered.id} ordered={ordered} />)
      ) : (
        <p>No hay ordene pendientes</p>
      )}
    </AdminLayout>
  );
}
