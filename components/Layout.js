import BottomNav from './ui/BottomNav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="pb-[56px] md:pb-0"> {/* Added padding bottom for mobile */}
        {children}
      </main>
      <BottomNav />
    </div>
  );
}