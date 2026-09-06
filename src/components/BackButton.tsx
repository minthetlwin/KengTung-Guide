import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/language-context'

export function BackButton() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  function handleBack() {
    // location.key is 'default' when this page was opened directly (typed
    // URL, shared link, new tab) rather than navigated to from elsewhere in
    // the app — there's nothing in this session's history to go back to, so
    // falling back to the directory avoids navigating away from the site.
    if (location.key !== 'default') {
      navigate(-1)
    } else {
      navigate('/pagodas')
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label={t.common.back}
      title={t.common.back}
      className="absolute left-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-xl transition-all hover:scale-105 hover:border-white/40 hover:bg-black/50"
    >
      <span className="material-symbols-outlined text-[22px]">arrow_back</span>
    </button>
  )
}
