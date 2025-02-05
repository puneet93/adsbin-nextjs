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
    { day: "Mon. 21 jan.", total: 186, kids: 80, young: 80, adults: 30, middleage: 54, senior: 34, elderly: 23 },
    { day: "Tue. 22 jan.", total: 305, kids: 200, young: 50, adults: 10, middleage: 40, senior: 12, elderly: 21 },
    { day: "Wed. 24 jan.", total: 237, kids: 120, young: 20, adults: 75, middleage: 32, senior: 76, elderly: 54 },
    { day: "Thur. 27 jan.", total: 73, kids: 190, young: 120, adults: 54, middleage: 76, senior: 32, elderly: 32 },
    { day: "Fri. 29 jan.", total: 209, kids: 130, young: 40, adults: 76, middleage: 12, senior: 32, elderly: 54 },
    { day: "Sat. 30 jan.", total: 214, kids: 140, young: 60, adults: 23, middleage: 67, senior: 65, elderly: 54 },
    { day: "Sun. 31 jan.", total: 186, kids: 80, young: 80, adults: 30, middleage: 54, senior: 34, elderly: 23 },
    { day: "Mon. 1 feb.", total: 305, kids: 200, young: 50, adults: 10, middleage: 40, senior: 12, elderly: 21 },
    { day: "Tue. 2 feb.", total: 237, kids: 120, young: 20, adults: 75, middleage: 32, senior: 76, elderly: 54 },
    { day: "Wed. 3 feb.", total: 73, kids: 190, young: 120, adults: 54, middleage: 76, senior: 32, elderly: 32 },
    { day: "Thur. 4 feb.", total: 209, kids: 130, young: 40, adults: 76, middleage: 12, senior: 32, elderly: 54 },
    { day: "Fri. 5 feb.", total: 214, kids: 140, young: 60, adults: 23, middleage: 67, senior: 65, elderly: 54 },
    { day: "Sat. 6 feb.", total: 237, kids: 120, young: 20, adults: 75, middleage: 32, senior: 76, elderly: 54 },
    { day: "Sun. 7feb.", total: 73, kids: 190, young: 120, adults: 54, middleage: 76, senior: 32, elderly: 32 },
    { day: "Mon. 1 feb.", total: 209, kids: 130, young: 40, adults: 76, middleage: 12, senior: 32, elderly: 54 },
    { day: "Tue. 2 feb.", total: 214, kids: 140, young: 60, adults: 23, middleage: 67, senior: 65, elderly: 54 },
    { day: "Wed. 3 feb.", total: 186, kids: 80, young: 80, adults: 30, middleage: 54, senior: 34, elderly: 23 }
]

const chartConfig = {
    total: {
        label: "Total QR Scans",
        color: "#4DBB18",
    },
    kids: {
        label: "Kids (12 - 19)",
        color: "#9747FF",
    },
    young: {
        label: "Young Adults (20 - 29)",
        color: "#FFD600",
    },
    adults: {
        label: "Adults (30- 39)",
        color: "#646464",
    },
    middleage: {
        label: "Middle Age (40-49)",
        color: "#7CCBFF",
    },
    senior: {
        label: "Senior (50-66)",
        color: "#F10909",
    },
    elderly: {
        label: "Elderly 67+",
        color: "#A44646",
    },
} satisfies ChartConfig

export function LineChartFun() {
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
                    <CartesianGrid vertical={true} horizontal={false} />
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
