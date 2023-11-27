import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

import s from './openModal.module.scss';

export const OpenModal = (): React.ReactElement => {
    const [content, setContent] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    function handleClick() {
        setIsOpen(true);
        setContent(inputValue);
        setInputValue('');
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setInputValue(e.currentTarget.value);
    }

    const { t } = useTranslation();

    return (
        <div className={s.block}>
            <input className={s.input} onChange={handleChange} value={inputValue} type="text" />

            <button className={s.button} onClick={() => handleClick()}>
                {t(`buttons.openModal`)}
            </button>

            {/* <Modal visible={isOpen} setIsOpen={setIsOpen}>
                {content}
            </Modal> */}
            {isOpen &&
                createPortal(
                    <Modal visible={isOpen} setIsOpen={setIsOpen}>
                        {content}
                    </Modal>,
                    document.body
                )}
        </div>
    );
};
