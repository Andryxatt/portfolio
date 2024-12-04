import thunder from '../../assets/images/thunder.svg'
type Props = {
    positionStyle: string
}
export const ThunderAnimation = ( { positionStyle }: Props) => {
    return (
        <div className={`${positionStyle}` }>
            <img src={thunder} alt="Thunder"
                className="w-[48px] h-[48px]"
            />
        </div>
    )
}
