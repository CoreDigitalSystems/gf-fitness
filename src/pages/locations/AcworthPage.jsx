import LocationDetail from '../../components/LocationDetail'

export default function AcworthPage() {
  return (
    <LocationDetail
      city="Acworth"
      state="GA"
      address="3362 Acworth Summit Blvd, Unit 100, Acworth GA 30101"
      phone="(678) 973-0635"
      heroDescription="North Georgia's premier gym experience. Achieve your goals in a supportive, state-of-the-art environment."
      joinUrl="https://join.gffitnessgyms.com/acworth/"
      gymHours={[{ label: 'Monday – Sunday', value: 'Open 24 hours' }]}
      childcareHours={[
        { label: 'Monday – Thursday', value: '8 AM – 12 PM, 4 PM – 8 PM' },
        { label: 'Friday', value: '8:00 AM – 12:00 PM' },
        { label: 'Saturday', value: '8:00 AM – 12:00 PM' },
        { label: 'Sunday', value: 'Closed' },
      ]}
      amenities={[
        'Yoga / Zumba Classes',
        'Strength & Cardio Equipment',
        'Locker Rooms & Showers',
        'Group Fitness Classes',
        'Cycle Classes',
        'Senior Programs',
        'Sauna & Tanning',
        'Personal Training',
      ]}
    />
  )
}
