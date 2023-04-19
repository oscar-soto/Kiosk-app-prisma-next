export const Order = ({ordered}) => {
  const { id, name, total, order } = ordered;

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {name}</p>
    </div>
  );
};
