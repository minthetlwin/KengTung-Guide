import { useLanguage } from '../../context/language-context'
import { PagodaClosing } from '../PagodaClosing'

export function MmmClosing() {
  const { t } = useLanguage()
  const c = t.maharMyatMuni.closing
  return <PagodaClosing text={c.text} cta={c.cta} />
}
