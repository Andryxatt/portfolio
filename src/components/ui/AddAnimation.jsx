import add from '../../assets/images/add.svg'
export const AddAnimation = ( positionStyle ) => {
    return (
        <div className={`${positionStyle}`}> <img src={add} alt="Add" className="w-[28px] h-[28px]" /></div>
        // <div className={`${positionStyle} will-change-transform`}>
        //     <img src={add} alt="Add" className="w-[28px] h-[28px] animate-rotate-add will-change-transform" />
        // </div>
    )
}
