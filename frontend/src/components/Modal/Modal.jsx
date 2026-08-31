import style from './Modal.module.scss'

export function Modal ({children}){
   
    return (
        <div className={style.modalStyle}>
            <section>
                <button onClick={() => setModalOpen(!)}>Close</button>
                {children}
            </section>
        </div>
    )
}