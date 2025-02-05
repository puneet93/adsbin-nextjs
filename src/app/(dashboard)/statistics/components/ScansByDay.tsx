export default function ScansByDay(){
    return(
        <div className={'lg:px-8 px-5 mb-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Scans by day
            </h3>

            <table className="w-full table-auto font-outfit text-left text-base">
                <thead>
                <tr className="[&>th]:py-2.5 [&>th]:px-3 [&>th]:font-bold border-b border-adsbin-grey-100">
                    <th>Day</th>
                    <th>Scans</th>
                    <th>CTR</th>
                </tr>
                </thead>
                <tbody className={'font-nunito text-adsbin-neutral-500'}>
                <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                    <td>Mon. 15 Oct. 2025</td>
                    <td>1558</td>
                    <td>20%</td>
                </tr>
                <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                    <td>Wed. 17 Oct. 2025</td>
                    <td>1456</td>
                    <td>20%</td>
                </tr>
                <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                    <td>Fri. 19 Oct. 2025</td>
                    <td>1234</td>
                    <td>20%</td>
                </tr>
                <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100">
                    <td>Sat. 20 Oct. 2025</td>
                    <td>987</td>
                    <td>20%</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}