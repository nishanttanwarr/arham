
import About from '@/components/About';
import Faculty from '@/components/Faculty';

export default async function Page() {
  return (
    <main className="min-h-screen">
      <div className='space-y-16 bg-[#232E26]'>
      <About />
      <Faculty />
      </div>
    </main>
  );
}
