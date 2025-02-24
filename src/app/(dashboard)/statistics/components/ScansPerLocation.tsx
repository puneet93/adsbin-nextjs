import Image from "next/image";

export default function ScansPerLocation(){
    return(
        <div className={'lg:px-8 px-5 mb-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Scans per Location
            </h3>

            <Image src={'/map.png'} alt={'map-image'} className={'w-full max-h-[420px] min-h-96 object-cover object-center'} width={448} height={448} />
        </div>
    )
}