const ImageSkill = ({ src, alt, title, stars }) => {
    return (
        <div className="">
            <img className="" src={src} alt={alt} title={title} />
            <div className="">
                {
                    [...Array(stars)].map((e, i) => <span key={i} className="text-yellow-400">&#9733;</span>)
                }
            </div>
        </div>

    )
}
export default ImageSkill;