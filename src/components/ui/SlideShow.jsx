import { useEffect, useState } from 'react'
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.png'
const SlideShow = ({darkMode}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const currentSlide = (n) => {
        setSlideIndex(n);
    }
    const plusSlide = (n) => {
        setSlideIndex(n + slideIndex);
    }
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { setSlideIndex(1) }
        if (n < 1) { setSlideIndex(slides.length) }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active_dot", "");
        }
        if (slides[slideIndex - 1] !== undefined) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active_dot";
        }

    }
    useEffect(() => {
        showSlides(slideIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideIndex])
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex + 1);
        }, 5000);
        return () => clearTimeout(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slideIndex])
    return (
        <>
            <div className='slide_show_container'>
                <div className="slides fade">
                    <div className="numbertext">1 / 3</div>
                    <img className='rounded-xl shadow-md' alt='slide1' src={slide1} />
                    <div className="text">Caption Text</div>
                </div>
                <div className="slides fade">
                    <div className="numbertext">2 / 3</div>
                    <img className='rounded-xl shadow-md' alt='slide2' src={slide2} />
                    <div className="text">Caption Text</div>
                </div>
                <div className="slides fade">
                    <div className="numbertext">3 / 3</div>
                    <img className='rounded-xl shadow-md' alt='slide3' src={slide3} />
                    <div className="text">Caption Text</div>
                </div>
                <a className="prev" onClick={() => plusSlide(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlide(1)}>&#10095;</a>
            </div>
            <div className='text-center'>
                <span className={`${darkMode ? "dot_light" : "dot_dark"} dot shadow-md`} onClick={() => {
                    currentSlide(1)
                }}></span>
                <span className={`${darkMode ? "dot_light" : "dot_dark"} dot shadow-md`} onClick={() => {
                    currentSlide(2)
                }}></span>
                <span className={`${darkMode ? "dot_light" : "dot_dark"} dot shadow-xl`} onClick={() => {
                    currentSlide(3)
                }}></span>
            </div>
        </>

    )
}
export default SlideShow;