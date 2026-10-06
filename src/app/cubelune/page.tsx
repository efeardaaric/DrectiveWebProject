import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cubelune — Block Puzzle & Support | Drective',
  description: 'Cubelune support, how to play, and privacy information.',
};

export default function CubeluneSupport() {
  return (
    <main className="min-h-screen bg-[#20134b] px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-200">Drective Interactive</p>
        <h1 className="mb-6 text-5xl font-bold">Cubelune</h1>
        <p className="mb-12 text-xl text-purple-100">Find your flow. Place colorful shapes, clear rows and columns, and explore a world of block puzzles.</p>
        <section className="mb-10 rounded-2xl bg-white/10 p-8">
          <h2 className="mb-4 text-2xl font-semibold">How to play</h2>
          <p>Drag one of the three shapes onto the 8 × 8 board. Complete a row or column to clear it. Journey offers 200 levels with different goals and obstacles. Endless lets you play for your best score.</p>
        </section>
        <section className="mb-10 rounded-2xl bg-white/10 p-8">
          <h2 className="mb-4 text-2xl font-semibold">Need a hand?</h2>
          <p className="mb-4">For a bug report or support request, email <a className="underline" href="mailto:drectivegames@gmail.com?subject=Cubelune%20Support">drectivegames@gmail.com</a>. Include your device model, iOS version, Cubelune version, and a description of the issue. Please do not send passwords or sensitive personal information.</p>
          <p>Your progress is stored on your device. Removing the app may remove saved progress. You can change sound, music, vibration, and available advertising privacy choices in Settings.</p>
        </section>
        <p className="mb-4">Cubelune is free to download and includes advertising. Optional rewarded ads can provide a second chance when available. No account is required.</p>
        <a className="font-semibold text-purple-100 underline" href="/cubelune/privacy">Cubelune privacy policy / Gizlilik politikası</a>
      </div>
    </main>
  );
}
