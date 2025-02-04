import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function SelectedLocations() {
  return (
    <div className="mb-5 text-adsbin-grey-1000 font-extrabold tracking-wide md:px-0 px-5">
      <h5 className="uppercase py-5">
        SELECTED LOCATIONS:
      </h5>

        <table className={'table-auto w-full text-left text-adsbin-grey-1000'}>
            <thead>
                <tr className={'uppercase text-sm'}>
                    <th className={'font-extrabold py-5'}>Location/ Country</th>
                    <th className={'font-extrabold py-5'}>PRICE per HR.</th>
                    <th className={'font-extrabold py-5'}>SCREENS</th>
                    <th className={'w-8 py-5'}></th>
                </tr>
            </thead>
            <tbody className={'text-sm'}>
                <tr className={'border-b border-adsbin-grey-100'}>
                    <th className={'font-extrabold py-5 pl-5'}>1. DUBAI - AL SHARIF MALL</th>
                    <td className={'py-5 text-adsbin-green-200 font-bold'}>$11.5 /Hr.</td>
                    <td className={'py-5 font-normal'}>3 screens</td>
                    <td>
                        <Button size={"icon"} variant={"link"} className="!h-auto !w-auto">
                            <X />
                        </Button>
                    </td>
                </tr>
                <tr className={'border-b border-adsbin-grey-100'}>
                    <th className={'font-extrabold py-5 pl-5'}>1. DUBAI - AL SHARIF MALL</th>
                    <td className={'py-5 text-adsbin-green-200 font-bold'}>$11.5 /Hr.</td>
                    <td className={'py-5 font-normal'}>3 screens</td>
                    <td>
                        <Button size={"icon"} variant={"link"} className="!h-auto !w-auto">
                            <X />
                        </Button>
                    </td>
                </tr>
                <tr className={'border-b border-adsbin-grey-100'}>
                    <th className={'font-extrabold py-5 pl-5'}>1. DUBAI - AL SHARIF MALL</th>
                    <td className={'py-5 text-adsbin-green-200 font-bold'}>$11.5 /Hr.</td>
                    <td className={'py-5 font-normal'}>3 screens</td>
                    <td>
                        <Button size={"icon"} variant={"link"} className="!h-auto !w-auto">
                            <X />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
  );
}
