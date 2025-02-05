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
    { browser: "TTG Media", visitors: 275, fill: "#60CA3B" },
    { browser: "HJP Enterprise", visitors: 200, fill: "#EA3A88" },
    { browser: "Quick Express", visitors: 287, fill: "#EAB308" },
    { browser: "Boomerang Media", visitors: 173, fill: "#5687F2" }
]

const chartConfig = {
    chrome: {
        label: "TTG Media",
        color: "#60CA3B",
    },
    safari: {
        label: "HJP Enterprise",
        color: "#EA3A88",
    },
    firefox: {
        label: "Quick Express",
        color: "#EAB308",
    },
    edge: {
        label: "Boomerang Media",
        color: "#5687F2",
    }
} satisfies ChartConfig

export function PieChartFun() {
    // const totalVisitors = React.useMemo(() => {
    //     return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    // }, [])

    return (
        <div className={'grid sm:grid-cols-2 grid-cols-1 justify-center items-center'}>
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
                            innerRadius={70}
                            strokeWidth={5}
                        >
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
            <div>
                <ul className={'flex flex-col gap-1.5'}>
                    {chartData?.map((item:{browser:string, fill: string}, index:number) => (
                        <li key={index} className={'flex items-center gap-2.5 text-adsbin-grey-1000'}><span className={`w-3 h-3`} style={{backgroundColor: item?.fill}}></span> {item?.browser}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
