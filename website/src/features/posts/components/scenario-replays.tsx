import React from "react"
import FollowUpPosts from "./follow-ups"

export function ScenarioReplaysFollowUps(props: { current: string }) {
    return (
        <FollowUpPosts
            posts={[
                {
                    href: "/blog/scenario-replays",
                    label:
                        "Scenario replays and how they improve workflows across teams",
                },
                {
                    href: "/blog/scenario-replays-requirements",
                    label:
                        "What you need to get scenario replays in your product",
                },
                {
                    href: "/blog/rapid-iteration-backend",
                    label:
                        "Structuring your back-end for rapid iteration during development",
                },
            ]}
            current={props.current}
        />
    )
}
