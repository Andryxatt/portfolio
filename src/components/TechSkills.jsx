import SkillSlider from './SkillSlider';
const TechSkills = () => {
  return (
    <div className='flex flex-col w-full h-auto mt-16 relative justify-center'>
      <div className='flex flex-row justify-center items-center text-center mb-4'>
        <h2 className='text-4xl font-bold text-center'>Tech Skills I Use Everyday</h2>
      </div>
      <div className='w-full mt-10'>
        <SkillSlider />
      </div>
    </div>
  )
}

export default TechSkills