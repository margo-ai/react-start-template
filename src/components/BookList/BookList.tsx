import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'react-intersection-observer';
import { FullProductInfo } from '../FullProductInfo/FullProductInfo';
import { RotatingLines } from 'react-loader-spinner';

import { useThemeContext } from '../../theming/ThemeProvider';

import s from './bookList.module.scss';

import { books as bookList } from '../../api/books';

export const BookList = (): React.ReactNode => {
    const { theme } = useThemeContext();

    // console.log('List rendered');

    const { ref, inView } = useInView({ threshold: 0.5, trackVisibility: true, delay: 800 });

    const [books, setBooks] = useState(bookList);

    const setBooksHandle = () => {
        setBooks((prevBooks) => [
            ...prevBooks,
            {
                ...prevBooks[Math.floor(Math.random() * prevBooks.length)],
                id: uuidv4(),
            },
            {
                ...prevBooks[Math.floor(Math.random() * prevBooks.length)],
                id: uuidv4(),
            },
        ]);
    };

    useEffect(() => {
        if (inView) setBooksHandle();
    }, [inView]);

    // const listItems = items.map((item) => {
    //     const { id, name, age } = item;
    //     return (
    //         <li key={id}>
    //             <h2>{name}</h2>
    //             <p>{age}</p>
    //         </li>
    //     );
    // });

    // useEffect(() => {
    //     console.log(items);
    // });

    return (
        <>
            <div className={s.list}>
                {books.map(({ id, imageSrc, name, descrContent, category, price }) => {
                    return (
                        <FullProductInfo
                            key={id}
                            imageSrc={imageSrc}
                            name={name}
                            descrContent={descrContent}
                            category={category}
                            price={price}
                        />
                    );
                })}
            </div>
            <div className={s.list_loader} ref={ref}>
                <RotatingLines
                    strokeColor={theme === 'light' ? 'salmon' : 'darkslategrey'}
                    strokeWidth="5"
                    animationDuration="0.8"
                    width="90"
                    visible={true}
                />
            </div>
        </>
    );
};
