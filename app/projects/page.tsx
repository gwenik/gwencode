import type { Metadata } from 'next'
import { ProjectsExplorer } from '@/components/projects-explorer'

export const metadata: Metadata = {
  title: 'Проекты IT-студии в Грозном',
  description:
    'Кейсы gwencode: сайты, магазины, доставка, образовательные платформы и системы учёта. IT-команда в Грозном, работаем по Чечне и России.',
  alternates: { canonical: '/projects/' },
}

export default function ProjectsPage() {
  return <ProjectsExplorer />
}
