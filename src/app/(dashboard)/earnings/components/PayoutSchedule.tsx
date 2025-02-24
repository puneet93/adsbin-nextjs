export default function PayoutSchedule(){
    return(
        <div className={'lg:px-8 px-5'}>
            <h3 className="text-adsbin-evergreens text-2xl font-outfit tracking-tight mb-2.5">
                Payout schedule
            </h3>

            <div className="pt-5">
                <table className="w-full table-fixed text-left text-base">
                    <thead>
                        <tr className="[&>th]:py-2.5 [&>th]:px-5 [&>th]:font-bold border-b border-adsbin-grey-100">
                            <th>Period</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>Jan. - Mar.</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>01-04-2025</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>$ 15,345.00</span></th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>Apr. - Jun.</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>01-07-2025</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>$ 18,345.00</span></th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>Jul. - Sep.</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>01-10-2025</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>$ 21,300.00</span></th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>Okt. - Dec.</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>Ongoing</span></th>
                            <th><span className={'border border-adsbin-grey-100 px-2.5 py-1'}>$ 5,421.14</span></th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens">
                            <th></th>
                            <th></th>
                            <td><span className={'block text-sm text-adsbin-neutral-400 leading-none'}>Estimated $ 35,000.00</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}