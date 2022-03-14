import React, {FC} from "react";
import "./pagination.scss";

interface IProps {
    page: number;
    pages: number;
    setPage: (newPage: number) => void;
}


export const Pagination: FC<IProps> = ({ page, pages, setPage }) => {
    let renderedFirstDots = false;
    let renderedSecondDots = false;

    const renderPageBtn = (idx: number, page: number, pages: number) => {
        if (idx === page ) {
            return <li key={`pageNum${idx + 1}`} className="page-item disabled">
                <a className="page-link">{idx}</a>
            </li>
        }

        if (idx <= 3 || pages - idx < 3 || Math.abs(page - idx) < 3) {
            return <li key={`pageNum${idx + 1}`} className={"page-item"}
                       onClick={() => {setPage(idx)}}
            >
                <a className="page-link">{idx}</a>
            </li>
        }

        if (!renderedFirstDots && idx < page) {
            renderedFirstDots = true;
            return <li key={`pageNum${idx + 1}`} className="page-item disabled">
                <a className="page-link borderless ">...</a>
            </li>
        }
        if (!renderedSecondDots && idx > page) {
            renderedSecondDots = true;
            return <li key={`pageNum${idx + 1}`} className="page-item disabled">
                <a className="page-link borderless ">...</a>
            </li>
        }

        return '';
    }

    return <>
        <nav>
            <ul className="pagination justify-content-center">
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}
                    onClick={() => {setPage(1)}}
                >
                    <a className="page-link">First</a>
                </li>
                {
                    [...(new Array(pages))].map((_, idx) => renderPageBtn(idx + 1, page, pages))
                }
                <li className={`page-item ${page === pages ? 'disabled' : ''}`}>
                    <a className="page-link"
                       onClick={() => {setPage(pages)}}
                    >Last</a>
                </li>
            </ul>
        </nav>
        </>
}