import thunder from '../../assets/images/thunder.svg'

export const ThunderAnimation = ( positionStyle) => {
    return (
        <div className={`${positionStyle}` }>
            <img src={thunder} alt="Thunder"
                className="w-[48px] h-[48px]"
            />
        </div>
    )
}
