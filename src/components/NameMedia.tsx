export default function NameMedia(){
    return(
        <div className="flex items-center gap-2.5 min-w-60">
            <div><img src={"/image-1.png"} alt={"Title"} width="47" height="44" /></div>
            <div>
                <h4 className="text-black text-base font-bold">Fall Season</h4>
                <p className="text-[13px] font-normal">2 Files</p>
            </div>
        </div>
    )
}