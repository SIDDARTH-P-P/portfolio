export default function Button({clr,clr2}){
    return(
        <>
        <button className={`bg-${clr}-500 hover:bg-${clr2}-500`}>click</button>
        </>
    );
}