import style from "./GridContainer.module.scss"

export function GridContainer({ 
    children, 
    gap, 
    dir, 
    align, 
    justify, 
    rest, 
    position, 
    xPos, 
    yPos,

 }) {

    const _gap = gap || "8px";
    const _dir = dir || "row";
    const _align = align || "center";
    const _justify = justify || "center";
    const _position = position || "relative";
    const _x = xPos || "0";
    const _y = yPos || "0";

    const style= {
        gap: _gap,
        flexDirection: _dir,
        alignItems: _align,
        justifyContent: _justify,
        position: _position,
        left: _x,
        right: _y,
    }

    return {
        <section style={{...styleProps}} className={style.gridContainer}>
            {children}
        </section>
    };
}