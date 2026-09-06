import { useLanguage } from '../../context/language-context'
import { QuickSectionNav } from '../QuickSectionNav'

const SECTION_IDS = ['history-timeline', 'location']

export function YzmQuickNav() {
  const { t } = useLanguage()
  const q = t.yarzamuni.quickNav
  return <QuickSectionNav label={q.label} items={q.items} sectionIds={SECTION_IDS} />
}
