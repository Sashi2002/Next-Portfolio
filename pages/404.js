import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="h1 font-bold text-accent mb-6">404</h1>
      <p className="text-lg text-white/50 mb-8 mx-4 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-accent text-center hover:underline">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
