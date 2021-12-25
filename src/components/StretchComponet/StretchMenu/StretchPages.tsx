import "./stretch_pages.scss";
import ReactPlayer from "react-player";
import { useInView } from 'react-intersection-observer';

export const stretchList = [
    {
        id: 1,
        title: "stretch1",
        sentence: "説明１",
        movie: "https://www.youtube.com/watch?v=l5g11Jub_Jc&list=PLzBAwob7UcDdqoNzfmbIQd9KCR7X363Ru",
    },
    {
        id: 2,
        title: "stretch2",
        sentence: "説明２",
        movie: "https://www.youtube.com/watch?v=LXzpn0jN8Bg",
    }
];

function StretchPages() {
    const [ref, inView] = useInView({
        rootMargin: '0px 0px -10px 0px',
    });

    return (
        <div className="stretch-wrapper" ref={ref}>
            {stretchList.map(stretch => {
                return(
                    <div id={stretch.title} key={stretch.id} className={"stretch-page" + ' ' + (inView ? 'show' : '')}>
                        <h2 className="stretch-title">{stretch.title}</h2>
                        <div className="page-wrapper">
                            <ReactPlayer 
                                url={stretch.movie} 
                                className="stretch-movie" 
                                width="100%"
                                height="100%"
                                controls
                            />
                            <p className="stretch-sentence">{stretch.sentence}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StretchPages;