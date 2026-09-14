import { useMemo, useState } from 'react'
import type { Property } from '../types/property'

type DateRange = { checkIn: Date | null; checkOut: Date | null }

const money = (value: number) => `₹${value.toLocaleString('en-IN')}`
const formatDate = (date: Date | null) => date ? date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'Add date'
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
const sameDay = (a: Date | null, b: Date | null) => !!a && !!b && startOfDay(a).getTime() === startOfDay(b).getTime()
const nightsBetween = (a: Date | null, b: Date | null) => a && b ? Math.max(0, Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / 86400000)) : 0

function Month({ month, range, onPick }: { month: Date; range: DateRange; onPick: (date: Date) => void }) {
  const first = new Date(month.getFullYear(), month.getMonth(), 1)
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const leading = first.getDay()
  const cells: (Date | null)[] = Array.from({ length: leading }, () => null)
  for (let day = 1; day <= days; day++) cells.push(new Date(month.getFullYear(), month.getMonth(), day))
  while (cells.length % 7) cells.push(null)

  return <div className="calendar-month">
    <h3>{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
    <div className="calendar-weekdays">{['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d}>{d}</span>)}</div>
    <div className="calendar-days">
      {cells.map((date, i) => {
        const selected = sameDay(date, range.checkIn) || sameDay(date, range.checkOut)
        const inRange = !!date && !!range.checkIn && !!range.checkOut && date > range.checkIn && date < range.checkOut
        return <button key={i} className={`${selected ? 'selected' : ''} ${inRange ? 'in-range' : ''}`} disabled={!date} onClick={() => date && onPick(date)}>{date?.getDate() ?? ''}</button>
      })}
    </div>
  </div>
}

export function BookingCard({ property }: { property: Property }) {
  const [range, setRange] = useState<DateRange>({ checkIn: new Date(2026, 9, 18), checkOut: new Date(2026, 9, 23) })
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [guestOpen, setGuestOpen] = useState(false)
  const [reserved, setReserved] = useState(false)
  const [guests, setGuests] = useState(property.guests)
  const nights = nightsBetween(range.checkIn, range.checkOut)
  const cleaningFee = 500
  const serviceFee = 6999
  const accommodation = property.price * nights
  const total = accommodation + cleaningFee + serviceFee
  const month1 = new Date(2026, 9, 1)
  const month2 = new Date(2026, 10, 1)

  const handlePick = (date: Date) => {
    if (!range.checkIn || (range.checkIn && range.checkOut) || date <= range.checkIn) setRange({ checkIn: date, checkOut: null })
    else setRange({ checkIn: range.checkIn, checkOut: date })
  }

  const summary = useMemo(() => nights ? `${nights} night${nights === 1 ? '' : 's'}` : 'Choose dates', [nights])

  return <aside id="reserve" className="booking-card" aria-label="Reserve this property">
    <div className="price-line"><strong>{money(property.price)}</strong> <span>night</span></div>
    <div className="booking-fields">
      <button className="booking-field" onClick={() => setCalendarOpen(true)}><small>CHECK-IN</small><strong>{formatDate(range.checkIn)}</strong></button>
      <button className="booking-field" onClick={() => setCalendarOpen(true)}><small>CHECKOUT</small><strong>{formatDate(range.checkOut)}</strong></button>
      <button className="booking-field guest-field" onClick={() => setGuestOpen(v => !v)}><small>GUESTS</small><strong>{guests} guests</strong></button>
    </div>
    {guestOpen && <div className="guest-popover"><span>Guests</span><div><button onClick={() => setGuests(g => Math.max(1, g - 1))}>−</button><strong>{guests}</strong><button onClick={() => setGuests(g => Math.min(10, g + 1))}>+</button></div></div>}
    <button className="reserve-button reserve" onClick={() => setReserved(true)}>Reserve</button>
    <div className="charge-note">You won't be charged yet</div>
    <div className="fee-row"><span>{money(property.price)} × {nights || 1} {nights === 1 ? 'night' : 'nights'}</span><span>{money(nights ? accommodation : property.price)}</span></div>
    <div className="fee-row"><span>Cleaning fee</span><span>{money(cleaningFee)}</span></div>
    {nights > 0 && <div className="fee-row"><span>Service fee</span><span>{money(serviceFee)}</span></div>}
    <div className="fee-row total"><strong>Total</strong><strong>{money(nights ? total : property.price + cleaningFee)}</strong></div>
    {nights > 0 && <div className="stay-note">{summary} · {formatDate(range.checkIn)} – {formatDate(range.checkOut)}</div>}

    {reserved && <div className="modal-backdrop" onMouseDown={e => e.currentTarget === e.target && setReserved(false)}>
      <div className="sheet-modal reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title">
        <button className="modal-close" aria-label="Close reservation" onClick={() => setReserved(false)}>×</button>
        <div className="success-mark">✓</div>
        <h2 id="reservation-title">Ready to reserve</h2>
        <p>Your dates and guest count are selected. This demo does not process a real payment.</p>
        <button className="reserve-button reserve" onClick={() => setReserved(false)}>Continue</button>
      </div>
    </div>}

    {calendarOpen && <div className="modal-backdrop" onMouseDown={e => e.currentTarget === e.target && setCalendarOpen(false)}>
      <div className="calendar-modal" role="dialog" aria-modal="true" aria-label="Choose dates">
        <button className="modal-close" onClick={() => setCalendarOpen(false)}>×</button>
        <div className="calendar-title"><strong>Select your dates</strong><span>{range.checkIn && !range.checkOut ? 'Select checkout date' : '18 Oct – 23 Oct'}</span></div>
        <div className="calendar-months"><Month month={month1} range={range} onPick={handlePick}/><Month month={month2} range={range} onPick={handlePick}/></div>
        <div className="calendar-footer"><button className="clear-button" onClick={() => setRange({checkIn:null,checkOut:null})}>Clear dates</button><button className="done-button" onClick={() => setCalendarOpen(false)}>Save</button></div>
      </div>
    </div>}
  </aside>
}
