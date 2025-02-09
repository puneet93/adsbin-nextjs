"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import * as React from "react";
const chartData = [
    { day: "Mon. 21 jan.", total: 186},
    { day: "Tue. 22 jan.", total: 305},
    { day: "Wed. 24 jan.", total: 237},
    { day: "Thur. 27 jan.", total: 73},
    { day: "Fri. 29 jan.", total: 209},
    { day: "Sat. 30 jan.", total: 214},
    { day: "Sun. 31 jan.", total: 186},
    { day: "Mon. 1 feb.", total: 305},
    { day: "Tue. 2 feb.", total: 237},
    { day: "Wed. 3 feb.", total: 73},
    { day: "Thur. 4 feb.", total: 209},
    { day: "Fri. 5 feb.", total: 214},
    { day: "Sat. 6 feb.", total: 237},
    { day: "Sun. 7feb.", total: 73},
    { day: "Mon. 1 feb.", total: 209},
    { day: "Tue. 2 feb.", total: 214},
    { day: "Wed. 3 feb.", total: 186}
]

const chartConfig = {
    total: {
        label: "Ad Revenue over Time",
        color: "#4DBB18",
    },
} satisfies ChartConfig

export function LineChartEarningFun() {
    return (
        <>
            <ChartContainer config={chartConfig} className={'h-64 w-full'}>
                <LineChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 0,
                        right: 0,
                    }}
                >
                    <CartesianGrid vertical={false}  />
                    <XAxis
                        dataKey="day"
                        tickLine={true}
                        axisLine={true}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 12)}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line
                        dataKey="total"
                        type="monotone"
                        stroke="#4DBB18"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="kids"
                        type="monotone"
                        stroke="#9747FF"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="young"
                        type="monotone"
                        stroke="#FFD600"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="adults"
                        type="monotone"
                        stroke="#646464"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="middleage"
                        type="monotone"
                        stroke="#7CCBFF"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="senior"
                        type="monotone"
                        stroke="#F10909"
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        dataKey="elderly"
                        type="monotone"
                        stroke="#A44646"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ChartContainer>

            <ul className={'flex items-center text-xs justify-center mt-2.5 gap-2.5 flex-wrap'}>
                {Object.entries(chartConfig).map(([, item], index) => (
                    <li key={index} className="flex items-center gap-2.5 text-adsbin-grey-1000">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                        {item.label}
                    </li>
                ))}
            </ul>
        </>
    )
}
