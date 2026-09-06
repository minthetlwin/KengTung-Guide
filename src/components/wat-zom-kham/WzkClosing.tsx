import { useLanguage } from '../../context/language-context'
import { PagodaClosing } from '../PagodaClosing'

export function WzkClosing() {
  const { t } = useLanguage()
  const c = t.watZomKham.closing
  return <PagodaClosing text={c.text} cta={c.cta} />
}
