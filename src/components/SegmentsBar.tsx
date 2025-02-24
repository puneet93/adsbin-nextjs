"use client"

import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { browser: "kids", visitors: 50, fill: "#9747FF" },
    { browser: "young", visitors: 62, fill: "#FFD600" },
    { browser: "middelage", visitors: 43, fill: "#7CCBFF" },
    { browser: "senior", visitors: 38, fill: "#F10909" },
    { browser: "elderly", visitors: 20, fill: "#A44646" },
]

const chartConfig = {
    visitors: {
        label: "Perc.",
    },
    kids: {
        label: "Kids",
        color: "#9747FF",
    },
    young: {
        label: "Young Adults",
        color: "#FFD600",
    },
    middelage: {
        label: "Middle Age",
        color: "#7CCBFF",
    },
    senior: {
        label: "Senior",
        color: "#F10909",
    },
    elderly: {
        label: "Elderly",
        color: "#A44646",
    },
} satisfies ChartConfig

export function SegmentBar() {
    return (
        <div className={'-ml-9'}>
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="browser"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) =>
                            chartConfig[value as keyof typeof chartConfig]?.label
                        }
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={0}
                        label={{ value: "Perc. (%)", angle: -90, position: "outsideLeft" }}
                    />
                    <Bar
                        dataKey="visitors"
                        strokeWidth={0}
                        radius={6}
                        activeIndex={2}
                        // activeBar={({ ...props }) => {
                        //     return (
                        //         <Rectangle
                        //             {...props}
                        //             fillOpacity={0.8}
                        //             stroke={props.payload.fill}
                        //             strokeDasharray={4}
                        //             strokeDashoffset={4}
                        //         />
                        //     )
                        // }}
                    />
                </BarChart>
            </ChartContainer>
        </div>
    )
}
