import {SegmentBar} from "@/components/SegmentsBar";

export default function Segments(){
    return(
        <div className={'lg:px-8 px-5 mb-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Segments
            </h3>

            <SegmentBar />

            {/*<table className="w-full table-auto font-outfit text-left text-base">*/}
            {/*    <thead>*/}
            {/*        <tr className="[&>th]:py-2.5 [&>th]:px-3 [&>th]:font-bold border-b border-adsbin-grey-100">*/}
            {/*            <th>Group</th>*/}
            {/*            <th>Perc.</th>*/}
            {/*        </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody className={'font-nunito text-adsbin-neutral-500'}>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>Kids (12-19)</td>*/}
            {/*            <td>3%</td>*/}
            {/*        </tr>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>Young Adults (20 - 29)</td>*/}
            {/*            <td>12%</td>*/}
            {/*        </tr>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>Adults (30- 39)</td>*/}
            {/*            <td>43%</td>*/}
            {/*        </tr>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>Middle Age (40-49)</td>*/}
            {/*            <td>5%</td>*/}
            {/*        </tr>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>Senior (50-66)</td>*/}
            {/*            <td>3%</td>*/}
            {/*        </tr>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>Elderly 67+</td>*/}
            {/*            <td>3%</td>*/}
            {/*        </tr>*/}
            {/*        <tr className="[&>td]:py-2.5 [&>td]:px-3 border-b border-adsbin-grey-100 [&>td]:font-bold">*/}
            {/*            <td>No answer</td>*/}
            {/*            <td>2%</td>*/}
            {/*        </tr>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
        </div>
    )
}