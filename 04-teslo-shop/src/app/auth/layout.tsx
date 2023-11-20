interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="flex flex-col w-full sm:w-[350px] px-10">{children}</div>
    </main>
  );
}
