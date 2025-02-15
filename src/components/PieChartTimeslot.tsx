"use client"

import * as React from "react"
import { Pie, PieChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { browser: "11:00 - 14:00", visitors: 275, fill: "#60CA3B" },
    { browser: "07:00 - 11:00", visitors: 200, fill: "#EA3A88" },
    { browser: "14:00 - 18:00", visitors: 287, fill: "#EAB308" },
    { browser: "Other", visitors: 173, fill: "#5687F2" }
]

const chartConfig = {
    chrome: {
        label: "11:00 - 14:00",
        color: "#60CA3B",
    },
    safari: {
        label: "07:00 - 11:00",
        color: "#EA3A88",
    },
    firefox: {
        label: "14:00 - 18:00",
        color: "#EAB308",
    },
    edge: {
        label: "Other",
        color: "#5687F2",
    }
} satisfies ChartConfig

export function PieChartTimeslot() {
    // const totalVisitors = React.useMemo(() => {
    //     return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    // }, [])

    return (
        <div className={'grid grid-cols-2 justify-center items-center'}>
            <div>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={50}
                            strokeWidth={5}
                        >
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
            <div className={'flex'}>
                <ul className={'flex m-auto flex-col gap-1.5'}>
                    {chartData?.map((item:{browser:string, fill: string}, index:number) => (
                        <li key={index} className={'flex items-center gap-2.5 text-adsbin-grey-1000'}><span className={`w-3 h-3`} style={{backgroundColor: item?.fill}}></span> {item?.browser}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
