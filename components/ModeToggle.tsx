import React from 'react'
import { useTheme } from 'next-themes'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'

declare const analytics: any

const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  let icon = <RiSunFill id="sun" />
  switch (resolvedTheme) {
    case 'light':
      icon = (
        <RiMoonFill
          id="moon"
          onClick={() => {
            setTheme('dark')
            analytics.track('Change to Dark mode')
          }}
        />
      )
      break
    case 'dark':
      icon = (
        <RiSunFill
          id="sun"
          onClick={() => {
            setTheme('light')
            analytics.track('Change to Light mode')
          }}
        />
      )
      break
  }

  return (
    <div className="text-gray-500 dark:text-gray-500 text-xl cursor-pointer transition-all">
      {icon}
    </div>
  )
}

export default ModeToggle
