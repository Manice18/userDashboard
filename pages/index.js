import UserInfo from '@/components/UserInfo'
import RetirementIncome from '@/components/RetirementIncome'
import RetirementStrategy from '@/components/RetirementStrategy'


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='grid grid-cols-3'>
        <UserInfo />
        <RetirementIncome />
        <RetirementStrategy />
      </div>
    </main>
  )
}
