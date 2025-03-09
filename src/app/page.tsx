import { unstable_cacheTag as cacheTag, revalidateTag } from "next/cache";

export default async function Home() {
  "use cache";
  cacheTag("homepage");

  const date = new Date().toISOString();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1>{date}</h1>
        <form
          action={async () => {
            "use server";
            revalidateTag("homepage");
          }}
        >
          <button type="submit">Reveal</button>
        </form>
      </div>
    </>
  );
}
