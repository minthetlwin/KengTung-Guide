import { useLanguage } from '../../context/language-context'
import { QuickSectionNav } from '../QuickSectionNav'

const SECTION_IDS = ['history-timeline', 'photo-gallery', 'beliefs-traditions', 'trustees', 'location']

export function MmmQuickNav() {
  const { t } = useLanguage()
  const q = t.maharMyatMuni.quickNav
  return <QuickSectionNav label={q.label} items={q.items} sectionIds={SECTION_IDS} />
}
