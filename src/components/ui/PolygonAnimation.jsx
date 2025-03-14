import polygon1 from '../../assets/images/polygon1.svg'
import polygon2 from '../../assets/images/polygon2.svg'

export const PolygonAnimation = (positionStyle) => {
    return (
        <div className={`${positionStyle}`}>
            <img src={polygon1} alt="Polygon 1" className="w-[48px] h-[48px]" />
            <img src={polygon2} alt="Polygon 2" className="w-[48px] h-[48px]" />
        </div>
    )
}
