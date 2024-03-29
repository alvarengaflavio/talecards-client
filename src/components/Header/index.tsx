import { ThemeButton } from '../shared/ThemeButton'
import { HeaderSection } from './StyledHeader'

type Props = {}

export function Header({}: Props) {
  return (
    <HeaderSection>
      <div className="title">
        <h1>TaleCards</h1>
      </div>
      <div className="theme">
        <ThemeButton />
      </div>
    </HeaderSection>
  )
}
