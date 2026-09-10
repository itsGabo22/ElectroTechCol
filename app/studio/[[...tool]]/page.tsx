export const dynamic = 'force-static';
export default function StudioPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Sanity Studio (Temporarily Disabled)</h1>
      <p>The embedded Sanity Studio is temporarily disabled due to a known incompatibility between Sanity UI and Next.js 15 (React 19 missing &apos;Activity&apos; export).</p>
      <p>To manage your content, please run <strong>npx sanity start</strong> locally in your terminal.</p>
    </div>
  );
}
