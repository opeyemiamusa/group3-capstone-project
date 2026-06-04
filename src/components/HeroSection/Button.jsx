// Reusable button component

export const Button=({href, buttonTitle, background, color, border})=>{
    return( 
    <a href={href}>
        <button className="hero-btn" style={{backgroundColor:background, color:color, border:border|| "none"}}>
            {buttonTitle}
        </button>
    </a>
    )
}
