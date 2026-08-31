import style from './StaffSection.module.scss'

export function staffSection({staffData}) {

    return (
        <>
        <section className={style.staffSelectionStyle}> 
            <h2 className={style.staffheadLine}>Mød vores ansætte</h2>

                {staffData.map((staff)) => (
                <div className={style.staffCard}>
                <img src="{staff.image}" alt={staff.name + "_image"} />
                <div>
                    <p>
                        {staff.firstname} {staff.lastname}
                    </p>
                    <p>{staff.position}</p>
                    <div className={style.hidden}>
                        <p>{staff.phone}</p>
                        <p>{staff.email}</p>
                    </div>
                </div>
            </div>
            ))}
        </section>
        </>
    );
}