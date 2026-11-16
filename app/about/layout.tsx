import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Кто мы — IT-команда в Грозном | GwenCode',
  },
  description:
    'GwenCode — разработчики в IT с 2018 года в Грозном: сайты, боты, магазины и учёт. Свой продукт ВайСклад, кейсы и как мы закрываем боли бизнеса.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'Кто мы — GwenCode',
    description: 'IT-команда в Грозном: свои продукты и заказы для бизнеса.',
    url: '/about/',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
