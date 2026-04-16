import LocationDetail from '../../components/LocationDetail'

export default function BristolPage() {
  return (
    <LocationDetail
      city="Bristol"
      state="CT"
      address="1379 Farmington Ave, Bristol, CT 06010"
      phone="(860) 506-9768"
      heroDescription="Top-tier equipment, expert trainers, and amenities designed for every lifestyle."
      joinUrl="https://join.gffitnessgyms.com/bristol/"
      gymHours={[
        { label: 'Monday – Friday', value: '4:00 AM – 12:00 AM' },
        { label: 'Saturday', value: '6:00 AM – 10:00 PM' },
        { label: 'Sunday', value: '6:00 AM – 10:00 PM' },
      ]}
      childcareHours={[
        { label: 'Monday – Thursday', value: '8 AM – 12 PM, 4 PM – 8 PM' },
        { label: 'Friday & Saturday', value: '8:00 AM – 12:00 PM' },
        { label: 'Sunday', value: 'Closed' },
      ]}
      amenities={[
        'Strength & Cardio Equipment',
        '50+ Weekly Classes',
        'Onsite Childcare',
        'Senior Programs',
        'Pro Shop',
        'Personal Training',
        'Olympic Saltwater Pool',
        'Racquetball Courts',
        'Full Locker Rooms with Dry Saunas',
        'Corrective Stretching / Recovery',
        'Sports-Specific Training',
        'Free Weights',
        'Pickleball Court',
      ]}
    />
  )
}
