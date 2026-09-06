import { useLanguage } from '../../context/language-context'
import { QuickSectionNav } from '../QuickSectionNav'

const SECTION_IDS = ['history-timeline', 'photo-gallery', 'festivals-rituals', 'location']

export function WzkQuickNav() {
  const { t } = useLanguage()
  const q = t.watZomKham.quickNav
  return <QuickSectionNav label={q.label} items={q.items} sectionIds={SECTION_IDS} />
}
