import circle1 from '../../assets/images/circle1.svg'
import circle2 from '../../assets/images/circle2.svg'

export const CircleAnimation = (positionStyle) => {
    return (
        <div className={`${positionStyle}`}>
            <img src={circle1} alt="Circle 1" className="w-[40px] h-[40px]" />
            <img src={circle2} alt="Circle 2" className="w-[40px] h-[40px]" />
        </div>
        // <div className={`${positionStyle} will-change-transform`}>
        //     <img src={circle1} alt="Circle 1"
        //         className={`w-[40px] h-[40px] animate-move-diagonal-1`} />
        //     <img src={circle2} alt="Circle 2"
        //         className={`w-[40px] h-[40px] animate-move-diagonal-2`} />
        // </div>
    )
}
