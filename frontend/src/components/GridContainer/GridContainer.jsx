import React from "react";
import style from "./GridContainer.module.scss";

export function GridContainer({ children, gap, align, justify }) {
    const inlineStyle = {
        gap: gap || "15px",
        alignItems: align || "stretch",
        justifyContent: justify || "start",
    };

    return (
        <section style={inlineStyle} className={style.gridContainer}>
            {children}
        </section>
    );
}