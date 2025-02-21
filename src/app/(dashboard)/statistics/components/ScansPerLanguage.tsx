export default function ScansPerLanguage(){
    return(
        <div className={'lg:px-8 px-5 mb-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Scans per Language
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
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">
                        <td>Dutch (Nl-nl)</td>
                        <td>2121</td>
                        <td>20%</td>
                    </tr>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">
                        <td>Portugese (PT)</td>
                        <td>221</td>
                        <td>20%</td>
                    </tr>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">
                        <td>Spanish (ES-es)</td>
                        <td>22</td>
                        <td>20%</td>
                    </tr>
                    <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">
                        <td>English (en-uk)</td>
                        <td>145</td>
                        <td>20%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}