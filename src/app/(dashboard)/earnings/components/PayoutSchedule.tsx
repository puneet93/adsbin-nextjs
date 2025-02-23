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
                            <th>Jan. - Mar.</th>
                            <th>01-04-2025</th>
                            <th>$ 15,345.00</th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th>Apr. - Jun.</th>
                            <th>01-07-2025</th>
                            <th>$ 18,345.00</th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th>Jul. - Sep.</th>
                            <th>01-10-2025</th>
                            <th>$ 21,300.00</th>
                        </tr>
                        <tr className="[&>td]:py-2.5 [&>td]:px-5 [&>th]:py-2.5 [&>th]:px-5 [&>td]:text-adsbin-evergreens [&>th]:text-adsbin-evergreens border-b border-adsbin-grey-100">
                            <th>Okt. - Dec.</th>
                            <th>Ongoing</th>
                            <th>$ 5,421.14</th>
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