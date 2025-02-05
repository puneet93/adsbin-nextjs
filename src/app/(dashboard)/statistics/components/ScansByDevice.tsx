export default function ScansByDevice(){
    return(
        <div className={'lg:px-8 px-5 mb-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Scans by Device
            </h3>

            <table className="w-full table-auto font-outfit text-left text-base">
                <thead>
                    <tr className="[&>th]:py-2.5 [&>th]:px-3 [&>th]:font-bold border-b border-adsbin-grey-100">
                        <th>Device</th>
                        <th>Scans</th>
                        <th>CTR</th>
                    </tr>
                </thead>
                <tbody className={'font-nunito text-adsbin-neutral-500'}>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                        <td>iPhone iOS 18.1</td>
                        <td>2121</td>
                        <td>20%</td>
                    </tr>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                        <td>Samsung - SM-S921N</td>
                        <td>221</td>
                        <td>20%</td>
                    </tr>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                        <td>Samsung - SM-S123</td>
                        <td>22</td>
                        <td>20%</td>
                    </tr>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                        <td>iPhone iOS 16.2</td>
                        <td>32</td>
                        <td>20%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}