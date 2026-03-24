export default async function ShareCard({
  searchParams,
}: {
  searchParams: { username?: string; role?: string };
}) {
  // Extract parameters from context
  const resolvedParams = await searchParams;
  const username = resolvedParams?.username || "神秘黑客";
  const role = resolvedParams?.role || "全栈自动化专家";

  return (
    <div className="flex h-[630px] w-[1200px] items-center justify-center bg-slate-900 p-20">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-16 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="flex items-center gap-10">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-6xl font-bold text-white shadow-xl">
            {username.charAt(0)}
          </div>
          <div>
            <h1 className="text-6xl font-black text-slate-800 tracking-tight">
              你好, {username}
            </h1>
            <p className="mt-6 text-4xl font-medium text-purple-600">
              🎉 认证身份: {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
