export default function CardLooks({ img, user }) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[400px] aspect-[3/4] overflow-hidden">
      <img
        src={img}
        alt={user}
        className="w-full h-full object-cover rounded-2xl"
      />
      <p className="mt-2 self-start text-white text-sm bg-black/40 px-2 py-1 rounded-full">
        {user}
      </p>
    </div>
  );
}
