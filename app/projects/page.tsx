import type { Metadata } from 'next'
import { ProjectsExplorer } from '@/components/projects-explorer'

export const metadata: Metadata = {
  title: {
    absolute: 'Заказы — кейсы IT в Грозном | GwenCode',
  },
  description:
    'Кейсы GwenCode: сайты, магазины, доставка, образовательные платформы и системы учёта. IT-команда в Грозном, работаем по Чечне и России.',
  alternates: { canonical: '/projects/' },
  openGraph: {
    title: 'Заказы GwenCode',
    description:
      'Кейсы: сайты, магазины, доставка и учёт. IT-команда в Грозном.',
    url: '/projects/',
  },
}

export default function ProjectsPage() {
  return <ProjectsExplorer />
}
