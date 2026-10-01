import type { Metadata } from 'next'
import { ProjectsExplorer } from '@/components/projects-explorer'

export const metadata: Metadata = {
  title: 'Проекты',
  description: 'Сайты, магазины, доставка и системы учёта, которые делала студия gwensoft.',
}

export default function ProjectsPage() {
  return <ProjectsExplorer />
}
