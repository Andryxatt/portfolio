export default function SkillItem({ Icon, color = '#5454D4', header, description }) {
    return (
      <div className='flex flex-col justify-center items-center p-4 max-w-[200px]'>
        <div className="relative w-[52px] h-[52px] flex items-center justify-center">
          <div style={{ backgroundColor: color }} className="absolute inset-0 opacity-[0.2] rounded-full"></div>
          <Icon style={{ color }} className="relative w-[32px] h-[32px]" />
        </div>
        <h4 className='text-lg font-semibold mt-4'>{header}</h4>
        <p className='text-center text-sm leading-loose mt-2 opacity-70'>{description}</p>
      </div>
    );
  }
  