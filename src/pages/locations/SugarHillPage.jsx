import LocationDetail from '../../components/LocationDetail'

export default function SugarHillPage() {
  return (
    <LocationDetail
      city="Sugar Hill"
      state="GA"
      address="245 Peachtree Industrial Blvd #100, Sugar Hill, GA 30518"
      phone="(678) 765-8999"
      heroDescription="Top-tier equipment, expert trainers, and amenities designed for every lifestyle — at the leading gym in Sugar Hill, GA."
      joinUrl="https://join.gffitnessgyms.com/sugar-hill/"
      gymHours={[
        { label: 'Monday – Friday', value: '5:00 AM – 11:00 PM' },
        { label: 'Saturday – Sunday', value: '7:00 AM – 7:00 PM' },
      ]}
      childcareHours={[
        { label: 'Monday – Thursday', value: '8:30 AM – 12 PM, 4:30 PM – 8 PM' },
        { label: 'Friday', value: '8:30 AM – 12 PM, 4:30 PM – 7 PM' },
        { label: 'Saturday', value: '8:30 AM – 12:00 PM' },
        { label: 'Sunday', value: 'Closed' },
      ]}
      amenities={[
        'Largest Strength Selection in the Area',
        'Cardio Equipment',
        '50+ Weekly Classes',
        'Onsite Childcare',
        'Senior Programs',
        'Pro Shop',
        'Personal Training',
        'Functional Training Room',
        'Tanning',
        'Full Locker Rooms with Dry Saunas',
        'Corrective Stretching / Recovery',
        'Sports-Specific Training',
        'Free Weights',
        'Dedicated Leg Training Room',
        'Group Fitness & Cycling Classes',
      ]}
    />
  )
}
