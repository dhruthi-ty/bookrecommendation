import Hero from '@/components/layout/Hero';
import BookListSection from '@/components/books/BookListSection';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BookListSection />
    </main>
  );
}