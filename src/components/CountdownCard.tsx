// Countdown Timer Card Component in TypeScript + React + Tailwind

import React from 'react'

interface CountdownProps {
  days: number
  hours: number
  minutes: number
}

export default function CountdownCard({ days, hours, minutes }: CountdownProps) {
  return (
    <div className="w-full rounded-xl flex items-center justify-center p-4">
      <div className="flex items-center justify-center gap-2 count-down-main">
        {/* Days */}
        <Timer value={days} label="Days" />
        {/* Hours */}
        <Timer value={hours} label="Hours" />
        {/* Minutes */}
        <Timer value={minutes} label="Minutes" />
      </div>
    </div>
  )
}

interface TimerProps {
  value: number
  label: string
}

function Timer({ value, label }: TimerProps) {
  return (
    <div className="timer">
      <div className="rounded-lg bg-gradient-to-r from-primary to-accent py-2 min-w-[60px] flex items-center justify-center flex-col gap-1 px-2">
        <h3 className="countdown-element font-semibold text-lg text-white text-center">
          {value}
        </h3>
        <p className="text-xs uppercase font-normal text-white text-center w-full">
          {label}
        </p>
      </div>
    </div>
  )
}
