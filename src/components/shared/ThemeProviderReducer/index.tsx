import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { TalecardsState } from '@/contexts/talecards/TalecardsReducer'
import { TalecardsContext } from '@/contexts/talecards/TalecardsContext'

type Props = {
  children: React.ReactNode
}

export function ThemeProviderReducer({ children }: Props) {
  const { darkMode } = useContext<Partial<TalecardsState>>(
    TalecardsContext as React.Context<{}>
  )

  if (darkMode) {
    return (
      <ThemeProvider
        theme={{
          colors: {
            primary: '#fff',
            secondary: '#afbec4',

            background: '#242424',
            backgroundVar: '#374850',

            buttonPrimary: '#fff',
            buttonSecondary: '#242424',

            interactive: '#ff5733',
            inlineError: '#fff',
          },
          fonts: {
            primary: 'Roboto, sans-serif',
          },
        }}
      >
        {children}
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: '#242424',
          secondary: '#445a63',

          background: '#fff',
          backgroundVar: '#d0d8dc',

          buttonPrimary: '#242424',
          buttonSecondary: '#fff',

          interactive: '#026ebe',
          inlineError: '#c00300',
        },
        fonts: {
          primary: 'Roboto, sans-serif',
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}
