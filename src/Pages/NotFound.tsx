export const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center text-[--secondary-color]">
        <h1 className="text-4xl font-bold text-[--secondary-color]">Stay tuned!</h1>
        <a
          href="/"
          className="mt-4 px-4 py-2 rounded-lg bg-[--secondary-color] text-[--primary-color] hover:bg-opacity-80"
        >
          More is coming soon...
        </a>
      </div>
    );
  };
  