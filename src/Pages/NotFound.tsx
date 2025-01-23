// src/Pages/NotFound.tsx

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center text-[--secondary-color]">
      <h1 className="text-4xl font-bold text-[--secondary-color]">404 PAGE NOT FOUND</h1>
      <a
        href="/"
        className="mt-4 rounded-lg bg-[--secondary-color] px-4 py-2 text-[--primary-color] hover:bg-opacity-80"
      >
        Don't know how you end up here... Just buy $LUIGI
      </a>
    </div>
  );
};
