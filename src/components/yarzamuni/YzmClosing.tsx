import { useLanguage } from '../../context/language-context'
import { PagodaClosing } from '../PagodaClosing'

export function YzmClosing() {
  const { t } = useLanguage()
  const c = t.yarzamuni.closing
  return <PagodaClosing text={c.text} cta={c.cta} />
}
