

export const Input = (props) => {
    return (
        <div className="w-full">
            <label className="relative block">
            <input type={props.type} name={props.name} onChange={(e)=>props.inputChangeHandler(e)} className="focus:border-accent peer/published px-4 text-sm focus:text-white transition-all duration-300  outline-none w-full h-[50px] bg-transparent border-opacity-50	border-white border-2 rounded-lg"  />
            <span className={`scale-75 text-lg text-white  absolute left-0 -translate-y-1/2 mx-2 px-2 transition-all duration-300 peer-focus/published:transition-all peer-focus/published:duration-300 peer-focus/published:top-0 peer-focus/published:left-0 peer-focus/published:rounded-lg peer-focus/published:text-white peer-focus/published:bg-accent peer-focus/published:text-sm ${props.value&&props.value !== "" ? "top-0 rounded-lg text-white bg-accent text-sm" : "top-1/2"}`}>{props.label}</span>
            </label>    
        </div>
    );
}

export const InputArea = (props) => {
    return (
        <div className="w-full">
            <label className="relative block">
            <textarea name={props.name}  onChange={(e)=>props.inputChangeHandler(e)} className="focus:border-accent peer/published px-4 py-3 text-sm focus:text-white transition-all duration-300  outline-none w-full h-[100px] bg-transparent border-opacity-50	border-white border-2 rounded-lg" ></textarea>
            <span className={`scale-75 text-lg text-white  absolute left-0 mx-2 px-2 transition-all duration-300 peer-focus/published:transition-all peer-focus/published:duration-300 peer-focus/published:-top-2 peer-focus/published:left-0 peer-focus/published:rounded-lg peer-focus/published:text-white peer-focus/published:bg-accent peer-focus/published:text-sm ${props.value&&props.value !== "" ? "-top-2 rounded-lg text-white bg-accent text-sm" : "top-2"}`}>{props.label}</span>
            </label>    
        </div>
    )
}
