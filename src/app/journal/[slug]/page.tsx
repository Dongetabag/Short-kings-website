import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Crown } from "lucide-react";
import { POSTS, getPost } from "@/lib/journal";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/50 hover:text-white"
      >
        <ArrowLeft className="h-3 w-3" /> Back to the Journal
      </Link>

      <p className="mt-8 eyebrow">{post.category} · {post.readMinutes} min read</p>
      <h1 className="mt-3 font-royal text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl">
        {post.title}
      </h1>

      {post.cover ? (
        <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
          <img src={post.cover} alt={post.title} className="w-full" />
        </div>
      ) : null}

      <div className="prose-invert mt-10 text-base leading-8 text-white/75 [&_p]:mb-6">
        {post.body.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-gold/30 bg-stone/40 p-6 text-center">
        <Crown className="mx-auto h-6 w-6 text-gold" />
        <p className="mt-3 font-royal text-lg text-white">
          Take this further.
        </p>
        <p className="mt-2 text-sm text-white/65">
          The Full Library goes deeper on every theme above.
        </p>
        <Link
          href="/products#bundle"
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-md bg-gold px-5 font-semibold text-black hover:bg-goldLight"
        >
          See the bundle
        </Link>
      </div>
    </article>
  );
}
